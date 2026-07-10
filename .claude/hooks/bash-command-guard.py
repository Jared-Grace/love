#!/usr/bin/env python3
"""PreToolUse hook for the Bash tool. Two-directional guard around the
verb-prefix rules in permissions.allow (e.g. "Bash(cat:*)", "Bash(find:*)").

Those rules match by literal prefix on the *whole* command string, with no
awareness of shell grammar. That cuts both ways:

  1. Too narrow: `for f in *.mjs; do cat -n "$f"; done` doesn't start with
     an allowed verb ("for" isn't allowed), so it always prompts even
     though every command actually run inside the loop is on the allow
     list.
  2. Too broad: `find . && rm -rf ~` DOES start with "find", so the naive
     prefix match silently approves the whole string - "&& rm -rf ~" and
     all - since the matcher never looks past the leading token. Note
     this specific example still correctly forces "ask" below: unqualified
     "rm" isn't itself a verb in permissions.allow in this repo, so the
     second command fails the same allowlist check as the first.

This hook parses the command with a small quote-aware tokenizer that
understands exactly one safe shape: a top-level chain of links joined by
any mix of ';', '|', '&&', '||', where each link is either a plain simple
command or a single-level 'for VAR in LIST; do CMDS; done' loop (whose own
body is in turn a chain of simple commands - no nested for-loops). Every
simple command's verb, wherever it appears in the chain or inside a loop
body, must independently be in permissions.allow - conditional vs.
unconditional execution doesn't matter, since the check is about which
verbs can run, not when. Anything outside that (command substitution,
redirection, subshells, backgrounding, nested control flow) is
deliberately left unparsed.

Characters that only have special meaning to the shell when unquoted
(the pipeline/redirection/grouping/background operators) are treated as
plain literal text when they appear inside single or double quotes -
matching actual shell quoting rules - so a quoted regex alternation
pattern containing a literal pipe character doesn't get misidentified
as an unparsed shell pipe.

Redirection is unsupported in general (see above), with two narrow
exceptions that are parsed and allowed inline regardless of the target
verb's trust level: redirecting to `/dev/null` (e.g. `2>/dev/null`,
`>/dev/null`, `>>/dev/null`) and fd-dup redirects (`&1`/`&2`, e.g.
`2>&1`, `1>&2`). Both are safe by construction - neither can write to
an arbitrary file - so allowing them doesn't weaken the guarantee that
every write-capable construct still forces a real prompt.

  - If the whole command parses into that narrow shape AND every simple
    command's verb is already in permissions.allow: emit "allow" (closes
    gap #1 - loops/sequences of already-trusted commands stop prompting).
  - If the command does NOT parse safely, but its raw text starts with a
    verb that IS in permissions.allow (so the native prefix rule would
    otherwise have silently approved it): emit "ask", forcing a real
    prompt instead of letting the trailing content ride along on the
    leading verb's trust (closes gap #2).
  - Otherwise: stay silent and let normal permission handling proceed
    unchanged (this is the case for any command whose leading verb isn't
    on the allow list at all - nothing to add or restrict here).

Note this hook can only ever narrow what would already prompt or widen an
existing allow rule's scope to loops/sequences - it never grants a verb
that wasn't already independently allowed in permissions.allow.
"""
import json
import os
import re
import sys


SETTINGS_PATHS = [
    os.path.expanduser("~/.claude/settings.json"),
    ".claude/settings.json",
    ".claude/settings.local.json",
]

RESERVED_WORDS = {
    "for", "in", "do", "done", "if", "then", "elif", "else", "fi",
    "while", "until", "case", "esac", "function", "select", "time",
}

DANGEROUS_CHARS = set("`<{}()")


class Unsupported(Exception):
    """Command doesn't fit the narrow shape this hook parses."""


def load_safe_verbs():
    verbs = set()
    for path in SETTINGS_PATHS:
        try:
            with open(path) as f:
                data = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError, OSError):
            continue
        for rule in data.get("permissions", {}).get("allow", []):
            m = re.match(r"^Bash\((.+):\*\)$", rule)
            if m:
                verbs.add(m.group(1).strip())
    return verbs


def tokenize(command):
    """Quote-aware tokenizer. Emits word tokens (quotes stripped) and a
    single ';' token for each unquoted ';' or newline. Raises Unsupported
    for any command substitution, redirection, subshell/group,
    backgrounding, or pipe/&&/|| operator found outside single quotes
    (inside single quotes everything is always literal in POSIX shell)."""
    tokens = []
    word = []
    quote = None  # None | "'" | '"'
    i, n = 0, len(command)

    def flush_word():
        if word:
            tokens.append("".join(word))
            word.clear()

    while i < n:
        c = command[i]

        if quote == "'":
            if c == "'":
                quote = None
            else:
                word.append(c)
            i += 1
            continue

        if quote == '"':
            if c == "\\" and i + 1 < n and command[i + 1] in ("$", "`", '"', "\\", "\n"):
                word.append(command[i + 1])
                i += 2
                continue
            if c == '"':
                quote = None
                i += 1
                continue
            if c == "`":
                raise Unsupported("command substitution (backtick) in double quotes")
            if c == "$" and i + 1 < n and command[i + 1] == "(":
                raise Unsupported("command substitution")
            word.append(c)
            i += 1
            continue

        # unquoted
        if c == "'":
            quote = "'"
            i += 1
            continue
        if c == '"':
            quote = '"'
            i += 1
            continue
        if c == "\\":
            if i + 1 < n:
                word.append(command[i + 1])
                i += 2
            else:
                i += 1
            continue
        if c == "|":
            if i + 1 < n and command[i + 1] == "|":
                flush_word()
                tokens.append("||")
                i += 2
                continue
            flush_word()
            tokens.append("|")
            i += 1
            continue
        if c == "&":
            if i + 1 < n and command[i + 1] == "&":
                flush_word()
                tokens.append("&&")
                i += 2
                continue
            raise Unsupported("unsupported operator '&' (backgrounding)")
        if c == ">":
            # Bare ">"/">>"" only mean fd redirection here if the word
            # accumulated since the last boundary is empty (default fd 1)
            # or all-digits (explicit "2>", "1>", ...). Anything else means
            # this '>' is glued onto a real word (e.g. "foo>bar"), which
            # doesn't change the analysis - it's still a fresh redirect at
            # this position with an implied default fd.
            is_fd_prefix = bool(word) and all(ch.isdigit() for ch in word)
            if is_fd_prefix or not word:
                j = i + 1
                if j < n and command[j] == ">":
                    j += 1  # ">>" (append) - equally harmless for these targets
                target_len = 0
                if command[j:j + 2] in ("&1", "&2"):
                    target_len = 2
                elif command[j:j + len("/dev/null")] == "/dev/null":
                    target_len = len("/dev/null")
                if target_len:
                    end = j + target_len
                    if end >= n or command[end].isspace() or command[end] in (";", "&", "|", "\n"):
                        word.clear()
                        i = end
                        continue
            raise Unsupported(
                "unsupported operator '>' (redirection, except >/dev/null "
                "or fd dup &1/&2)"
            )
        if c in DANGEROUS_CHARS:
            raise Unsupported(f"unsupported operator {c!r}")
        if c == "$" and i + 1 < n and command[i + 1] == "(":
            raise Unsupported("command substitution")
        if c in (";", "\n"):
            flush_word()
            tokens.append(";")
            i += 1
            continue
        if c.isspace():
            flush_word()
            i += 1
            continue
        word.append(c)
        i += 1

    if quote is not None:
        raise Unsupported("unterminated quote")
    flush_word()

    collapsed = []
    for t in tokens:
        if t == ";" and collapsed and collapsed[-1] == ";":
            continue
        collapsed.append(t)
    while collapsed and collapsed[0] == ";":
        collapsed.pop(0)
    while collapsed and collapsed[-1] == ";":
        collapsed.pop()
    return collapsed


SEPARATORS = {";", "|", "&&", "||"}


def split_statements(tokens):
    """Split on any mix of ';', '|', '&&', '||' - they all carry the same
    verb-allowlist requirement here, so this hook doesn't need to
    distinguish sequencing from piping from conditional chaining."""
    groups, current = [], []
    for t in tokens:
        if t in SEPARATORS:
            groups.append(current)
            current = []
        else:
            current.append(t)
    groups.append(current)
    return groups


def split_top_level(tokens):
    """Split into top-level links on any mix of ';', '|', '&&', '||',
    except that a 'for ... done' loop is kept together as one link even
    though it contains its own internal ';' before 'do' - otherwise a
    naive split would slice the loop apart. This is what lets a for-loop
    be chained with plain commands via any separator (e.g.
    'cd X && for ... done'), while nested for-loops are still rejected
    separately, in check_for_loop's own body scan."""
    groups, current = [], []
    i, n = 0, len(tokens)
    while i < n:
        t = tokens[i]
        if t in SEPARATORS:
            groups.append(current)
            current = []
            i += 1
            continue
        if t == "for" and not current:
            depth, j, closed = 0, i, False
            while j < n:
                if tokens[j] == "for":
                    depth += 1
                elif tokens[j] == "done":
                    depth -= 1
                    if depth == 0:
                        j += 1
                        closed = True
                        break
                j += 1
            if not closed:
                raise Unsupported("malformed for-loop: missing 'done'")
            groups.append(tokens[i:j])
            current = []
            i = j
            continue
        current.append(t)
        i += 1
    groups.append(current)
    return groups


def verb_of(words):
    if words[0] in ("git", "node") and len(words) >= 2:
        return f"{words[0]} {words[1]}"
    return words[0]


def check_simple_commands(tokens, safe_verbs):
    groups = split_statements(tokens)
    if not groups:
        return False
    found_command = False
    for words in groups:
        if not words:
            continue
        found_command = True
        if words[0] in RESERVED_WORDS:
            raise Unsupported(f"unsupported nested keyword {words[0]!r}")
        if re.match(r"^[A-Za-z_][A-Za-z0-9_]*=", words[0]):
            raise Unsupported("variable assignment prefix")
        if verb_of(words) not in safe_verbs:
            return False
    return found_command


def check_for_loop(tokens, safe_verbs):
    if len(tokens) < 5 or tokens[1] in RESERVED_WORDS or tokens[2] != "in":
        raise Unsupported("malformed for-loop")
    i = 3
    list_words = []
    while i < len(tokens) and tokens[i] != ";":
        list_words.append(tokens[i])
        i += 1
    if not list_words or i >= len(tokens) or tokens[i] != ";":
        raise Unsupported("malformed for-loop: missing separator before do")
    i += 1
    if i >= len(tokens) or tokens[i] != "do":
        raise Unsupported("malformed for-loop: expected 'do'")
    i += 1
    body = []
    while i < len(tokens) and tokens[i] != "done":
        if tokens[i] in RESERVED_WORDS:
            raise Unsupported(f"nested control flow {tokens[i]!r} unsupported")
        body.append(tokens[i])
        i += 1
    if i >= len(tokens) or tokens[i] != "done":
        raise Unsupported("malformed for-loop: missing 'done'")
    i += 1
    if i != len(tokens):
        raise Unsupported("trailing content after 'done'")
    return check_simple_commands(body, safe_verbs)


def is_safe(command, safe_verbs):
    tokens = tokenize(command)
    if not tokens:
        return False
    found_command = False
    for group in split_top_level(tokens):
        if not group:
            continue
        found_command = True
        if group[0] == "for":
            if not check_for_loop(group, safe_verbs):
                return False
        elif group[0] in RESERVED_WORDS:
            raise Unsupported(f"unsupported construct {group[0]!r}")
        elif not check_simple_commands(group, safe_verbs):
            return False
    return found_command


def matched_leading_verb(command, safe_verbs):
    """Return the allow-list verb whose literal prefix the native
    permission engine would match against this raw command string, or
    None. Mirrors the engine's own "Bash(verb:*)" prefix matching so we
    only intervene on commands it would otherwise have silently allowed.

    Deliberately uses a plain startswith with no word-boundary check:
    the exact boundary semantics of the native matcher aren't known from
    here, and guessing a narrower boundary risks silently missing a real
    gap (e.g. "git status; rm -rf ~" has no space after "git status"
    before the ';'). A boundary-less match can only make this hook
    intervene *more* often than necessary, never less - the failure mode
    of being wrong here is an extra "ask" prompt, not a missed hole."""
    for verb in safe_verbs:
        if command.startswith(verb):
            return verb
    return None


def main():
    try:
        payload = json.load(sys.stdin)
    except json.JSONDecodeError:
        return
    if payload.get("tool_name") != "Bash":
        return
    raw_command = (payload.get("tool_input") or {}).get("command", "")
    if not raw_command or not raw_command.strip():
        return
    command = raw_command.strip()

    safe_verbs = load_safe_verbs()
    if not safe_verbs:
        return

    try:
        safe = is_safe(command, safe_verbs)
    except Unsupported:
        safe = False

    if safe:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "allow",
                "permissionDecisionReason": (
                    "Auto-approved: every command in this sequence/for-loop "
                    "uses a verb already in permissions.allow."
                ),
            }
        }))
        return

    verb = matched_leading_verb(command, safe_verbs)
    if verb is not None:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "ask",
                "permissionDecisionReason": (
                    f"This command starts with the allowed verb {verb!r}, but "
                    "contains additional chained/unparsed content (&&, |, "
                    "`, $(...), redirection, etc.) that permissions.allow's "
                    "prefix match would otherwise let ride through unchecked. "
                    "Forcing a real prompt."
                ),
            }
        }))
        return


if __name__ == "__main__":
    main()
