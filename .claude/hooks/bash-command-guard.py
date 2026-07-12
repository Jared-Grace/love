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

Redirection is unsupported in general (see above), with three narrow
exceptions that are parsed and allowed inline regardless of the target
verb's trust level: redirecting to `/dev/null` (e.g. `2>/dev/null`,
`>/dev/null`, `>>/dev/null`), fd-dup redirects (`&1`/`&2`, e.g.
`2>&1`, `1>&2`), and redirecting into this project's Bash-writable
scratchpad (SCRATCHPAD_PREFIX, e.g. `> /tmp/claude-1000/-home-j-repos-love/x/scratchpad/out.txt`).
The first two are safe by construction - neither can write to an
arbitrary file. The scratchpad case is safe for a different reason: it
doesn't grant a new capability at all, it just extends a capability the
Bash/Write/Edit tools already have unconditionally in that directory
(see permissions.allow's `Write(/tmp/claude-1000/-home-j-repos-love/**)`
etc.) to the shell-redirect surface too. The target path is validated
with a strict character allowlist (no `$`, backticks, `(`, `<`, spaces,
quotes, etc. can sneak through) plus an exact-prefix + normpath-equality
check that rejects `../` traversal and double slashes - so this can't be
abused to redirect outside the scratchpad. None of these three
exceptions weakens the guarantee that every *other* write-capable
construct still forces a real prompt.

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

`xargs` is treated as transparent rather than as a verb of its own:
`xargs cat` is checked as `cat`, `xargs git status` is checked as `git
status`, etc. - `verb_of` recurses past a leading `xargs` token straight
into whatever command follows it, so no separate "Bash(xargs cat:*)"
style rule is ever needed. This is deliberately narrow: it only recurses
when the token right after `xargs` is not itself a flag (does not start
with `-`). `xargs -I{} rm {}` or `xargs -0 sh -c ...` do NOT recurse and
so are never auto-approved by this path - parsing which xargs flags take
a following value (`-I`, `-n`, `-P`, `-a`, `-d`, `-L`, `-s`, ...) well
enough to reliably find the real command word is more complexity than
this hook is willing to trust itself with, so any flagged invocation
just falls through to a real prompt instead of being guessed at. Note
that unlike the git/node case, this never widens permissions.allow
itself - `xargs cat` is approved because `cat` already is, not because
of any new rule - so adding a command to the safe-verb list automatically
makes the flagless `xargs <that command>` form safe too, without an
separate xargs-specific entry.

`timeout` gets the same transparent treatment, narrowed the same way:
`verb_of` recurses past `timeout <DURATION>` into whatever follows only
when DURATION matches TIMEOUT_DURATION_RE - a bare number with an
optional single s/m/h/d suffix (`30`, `2.5`, `10m`) - so `timeout 30 git
status` is checked as `git status`. Any leading flag (`-k`, `-s`,
`--foreground`, `--preserve-status`, etc.) fails this exact-shape check
and falls through to a real prompt instead, the same posture as xargs
rejecting `-I{}`/`-0`. Also like xargs, this only ever reaches verb_of's
safe_verbs lookup - it does not unwrap the leading `timeout <DURATION>`
before the exact-command check in check_simple_commands or before any of
the is_safe_* exact-shape templates (is_safe_sed, is_safe_sandboxed_node_*,
etc.), so e.g. `timeout 60 node scripts/g.mjs ai` still isn't auto-approved
even though `node scripts/g.mjs ai` alone is - only plain verb-list rules
(Bash(verb:*)) get the benefit of a timeout wrapper.

A fifth exception, `is_safe_bare_mount`, auto-allows `mount` invoked with
zero arguments - the read-only form that just lists current mounts. No
blanket `Bash(mount:*)` rule exists because `mount SRC DST` (and mount's
other argument forms - remount, bind mounts, `-o` options, etc.) actually
changes system state; the exception is deliberately exact-shape (no
arguments at all, not a flag blacklist) for the same reason `is_safe_sed`
and the sandboxed-node templates are exact-shape rather than pattern-matched.

Note this hook can only ever narrow what would already prompt or widen an
existing allow rule's scope to loops/sequences - it never grants a verb
that wasn't already independently allowed in permissions.allow.

One additional, separately-gated exception exists outside the verb
allowlist entirely: a single exact template for running an ad-hoc `node
-e` snippet under real sandboxing rather than trusting the source text.
`node -e` is otherwise never auto-approved (arbitrary JS can shell out,
touch the network, or read/write any file the process can reach - a
verb-prefix check has no visibility into what happens after `-e`, and
blocklisting dangerous identifiers in the script text is not real safety
since it's trivially bypassed, e.g. `globalThis['requ'+'ire']`). Instead
`is_safe_sandboxed_node_eval` recognizes exactly one token-for-token
shape - `unshare --net --map-root-user -- node --permission
--allow-fs-read=<abs path under this repo> -e <script>` - and grants that
regardless of the script's content, because the safety guarantee here
comes entirely from the OS/runtime sandboxing flags, not from parsing
the JS. Verified experimentally: Node's `--permission` model blocks fs
write, fs read outside the allowed path, child_process, workers,
addons, and wasi by default, but does NOT block outbound network
(fetch() succeeded in testing even with `--permission
--allow-fs-read=...` alone) - `unshare --net` closes that gap
independently. `--map-root-user` just lets an unprivileged user create
the namespace; it grants no real host privileges. Any deviation from
the exact template (extra flags, a relative or out-of-repo read path,
missing `--net`) is deliberately rejected rather than pattern-matched
loosely, since this check's whole job is to make sure nothing broader
than the tested guarantee ever slips through. This is also why no
generic `Bash(unshare:*)` or `Bash(node:*)` rule is added to
permissions.allow - that would let the native prefix matcher wave
through `unshare ... -- rm -rf ~` or `node -e '<anything>'` unrelated to
this template.

A second exact template, `is_safe_sandboxed_node_script`, extends the
same idea to running a *file* instead of an inline `-e` string:
`unshare --net --map-root-user -- node --permission
--allow-fs-read=<abs path under this repo> scripts/temp/<name>.mjs`.
Same sandboxing guarantee, same "exact shape or reject" posture, but two
extra restrictions specific to running a file: (1) `--allow-fs-write` is
never part of the accepted template, so these scripts can only read and
print, never modify the repo - if a scratch script needs to write, that
is deliberately not handled by this template; (2) the script path itself
must resolve (same normpath-equality + character-allowlist check used
for the scratchpad case) to something under `scripts/temp/` specifically
- this keeps the template from being reusable to silently run a script
with real side effects elsewhere in the repo (e.g. `scripts/g.mjs`).
`--allow-fs-read` still grants read of the whole repo tree (not just
`scripts/temp/`), same as the `-e` template - acceptable here because
this repo keeps all secrets outside the repo folder.

A third exception, `is_safe_sed`, takes the same "exact shape or reject"
approach for `sed` (no `Bash(sed:*)` entry exists in permissions.allow at
all - this check is the only path by which a sed invocation is ever
auto-allowed). `-i`/`--in-place` (arbitrary file overwrite) is the obvious
risk, but GNU sed has two more independent of -i: the `e` command/flag
executes the pattern space (or an explicit command) as a shell command -
arbitrary code execution - and the `w`/`W` command writes matched output
to an arbitrary file path - an arbitrary-file-write primitive. `-f`/
`--file=` is rejected outright because it reads the real script from a
file this hook never sees. Reliably telling "e"/"w" apart as a trailing
command/flag versus just a literal letter inside someone's regex pattern
or replacement text isn't doable with regex short of a real sed parser, so
this deliberately does not attempt a blacklist scan for those letters
anywhere in the script (that either false-positives on harmless scripts or
false-negatives on obfuscated ones). Instead it only auto-allows a single
`sed` [`-n`] followed by one `-e SCRIPT` or one bare positional SCRIPT,
where SCRIPT matches SED_SCRIPT_RE: a plain `s/PATTERN/REPLACEMENT/FLAGS`
substitution (FLAGS restricted to digits/g/p/I/i/M/m, excluding e and w),
or a single address (line number, `$`, or one `/regex/`, optionally a
range of two) followed by only `d` or `p`. Any trailing argument that
still starts with `-` fails the check - which is what rejects -i, -f,
--posix, and a second chained -e (chaining lets a second -e's `w`/`e`
command ride in after a first, innocuous-looking one) without needing to
enumerate each flag by name. Anything outside this narrow shape - other
delimiters (`s#..#..#`), multiple semicolon-joined commands in one script,
a/i/c text-insertion commands, negation (`!`), etc. - falls through to a
real prompt rather than being pattern-matched loosely, same posture as
every other exception in this file.

A sixth exception, `is_safe_claude_temp_rm`, is the other direction from
the sandboxed-node/sed templates: instead of trusting one exact command
shape regardless of target, it trusts one narrow *verb* (`rm`, file-only -
no -r/-R/-d/long-options) whenever every argument resolves to a path
strictly inside a short fixed list of directories nothing but Claude Code
tooling ever writes to (CLAUDE_TEMP_RM_PREFIXES: this repo's scratchpad,
plus the /tmp/claude-code-lock-claude/<session>/ dirs the lock hooks use
for their hold/holder.pid/acquired sentinel files). Bare `rm` is
deliberately never a trusted verb anywhere else in this file - the whole
point here is that "target is provably inside a Claude-owned /tmp
directory" is a narrower, safer condition than "verb is rm", not a
loosening of it. Path validation reuses the same character-allowlist +
normpath-equality checks as is_safe_scratchpad_target, so `../` traversal
or a glob character (which would need real shell expansion this hook
never performs) both fail closed to a real prompt.

A seventh exception, `is_safe_verify_html_rm`, is the same idea as
`is_safe_claude_temp_rm` applied to a different Claude-owned location:
file-only `rm` (same flag restriction, 'v'/'f' only) where every argument is
an absolute path under `<repo>/public/` whose basename matches
`tmp_verify_<name>.html`. These are scratch files created for manual
in-browser verification (see the `verify` skill) - they have to live under
`public/` rather than the real /tmp scratchpad because that's the directory
vite actually serves, but they're just as disposable as anything in the
scratchpad once verification is done. The basename pattern is deliberately
narrow (fixed `tmp_verify_` prefix, `.html` suffix, no `../` - same
character-allowlist + normpath-equality checks as everywhere else in this
file) so this can't be widened into a general "rm anything under public/"
capability.

A fourth check, `is_dangerous_find`, goes the other direction: it
*narrows* an existing broad allow rule instead of adding a new auto-allow
path. `Bash(find:*)` is in permissions.allow for ordinary read-only
lookups, but verb_of() only ever looks at the leading token - it has no
idea whether the rest of a `find` invocation is `-iname foo -type f` or
`-delete`. Since a single unchained `find ...` command parses as one
ordinary simple command whose verb ("find") is already trusted, it would
otherwise sail through as a silent "allow" despite being able to
delete/overwrite arbitrary files (-delete/-fls/-fprint/-fprint0/
-fprintf) or run arbitrary commands with no visibility into what
(-ok/-okdir, which prompt at runtime themselves - a different trust model
than this hook reasons about, so still blocked here rather than treated
as equivalent to a vetted -exec). check_simple_commands rejects any
`find` call carrying one of those flags before it ever consults
safe_verbs, which falls through to the same "ask" path as any other
unsafe command - a real prompt instead of a missed hole. Unlike
is_safe_sed's blacklist-scan avoidance, a plain token scan is safe to use
here because find's action flags are always their own separate shell
word; the only false positive is a flag's own argument happening to
spell one (`find . -name -exec`), which just costs an extra prompt.

`-exec`/`-execdir` are handled separately, by `is_safe_find_exec`, rather
than blocked outright like the flags above. The command they run is its
own clearly-delimited word sequence - the same shape xargs' target
command is in (see above) - so instead of blocking on sight it's checked
against safe_verbs the same way. Requires exactly one -exec/-execdir in
the whole invocation (so trust never has to reason about two differently
-targeted actions), no other DANGEROUS_FIND_FLAGS before it, a literal
`{}` in its clause, and the clause to run all the way to the end of the
simple command (only a trailing `+` - immediately after `{}`, per find's
own syntax rules for that form - is stripped). That last constraint is
what rejects anything chained after the -exec clause (e.g. `find X -exec
cat {} + -delete`) rather than risking a parse that silently drops a
trailing dangerous flag. It's also forced by a quirk of tokenize(): an
escaped `\\;` and a real shell `;` both collapse to the identical string
token, and tokenize()'s dedup step merges adjacent `;` tokens, so a
`\\;`-terminated clause never survives as a distinguishable trailing
token to strip in the first place - the words list for this simple
command already ends exactly at the clause boundary by the time it
reaches this function. Net effect: `find ... -exec cat {} \\;` (or
`... -exec grep foo {} +`) auto-approves when the target verb is already
trusted, while any find invocation this shape can't confidently parse -
multiple actions, other dangerous flags, trailing content after the
clause, an unsafe target verb - falls through to a real prompt exactly
as before.
"""
import json
import os
import re
import sys


REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))

SETTINGS_PATHS = [
    os.path.expanduser("~/.claude/settings.json"),
    os.path.join(REPO_ROOT, ".claude/settings.json"),
    os.path.join(REPO_ROOT, ".claude/settings.local.json"),
]

# Mirrors the Write/Edit/Read/rm/mkdir/mv scratchpad rules already granted
# in permissions.allow (e.g. "Write(/tmp/claude-1000/-home-j-repos-love/**)").
# Derived, not hardcoded, so it tracks the repo path and uid automatically.
SCRATCHPAD_PREFIX = f"/tmp/claude-{os.getuid()}/{REPO_ROOT.replace(os.sep, '-')}/"

SAFE_SCRATCHPAD_PATH_RE = re.compile(r"^[A-Za-z0-9_./-]+$")

# Same character allowlist as the scratchpad case, applied to the
# relative script path accepted by is_safe_sandboxed_node_script.
SAFE_TEMP_SCRIPT_PATH_RE = re.compile(r"^[A-Za-z0-9_./-]+$")
SCRIPTS_TEMP_PREFIX = "scripts/temp/"

# Directories that only Claude Code's own tooling writes into - never a
# real project path a user would mind losing a file from. Used by
# is_safe_claude_temp_rm below. Deliberately a short fixed list, not a
# broad pattern like "/tmp/claude-*", so this can't be widened by
# accident to some unrelated /tmp/claude-flavored directory a human
# happens to be using for something else.
CLAUDE_TEMP_RM_PREFIXES = (
    SCRATCHPAD_PREFIX,
    "/tmp/claude-code-lock-claude/",
)

RESERVED_WORDS = {
    "for", "in", "do", "done", "if", "then", "elif", "else", "fi",
    "while", "until", "case", "esac", "function", "select", "time",
}

DANGEROUS_CHARS = set("`<{}()")


class Unsupported(Exception):
    """Command doesn't fit the narrow shape this hook parses."""


def is_safe_scratchpad_target(path):
    """True iff `path` is a plain, already-normalized path strictly inside
    this project's scratchpad. Rejects anything containing shell
    metacharacters (so a redirect target can't smuggle in `$(...)`,
    backticks, `<`, spaces, quotes, etc.) and anything that isn't
    byte-for-byte its own os.path.normpath (so `../` traversal and
    `//` collapsing can't escape the prefix even though the raw text
    still starts with it)."""
    if not SAFE_SCRATCHPAD_PATH_RE.match(path):
        return False
    if not path.startswith(SCRATCHPAD_PREFIX):
        return False
    if os.path.normpath(path) != path:
        return False
    return True


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


def load_safe_exact_commands():
    """Exact Bash allow rules with no trailing ':*' verb wildcard, e.g.
    "Bash(node scripts/g.mjs ai)". load_safe_verbs() can't see these - its
    regex only recognizes the "Bash(verb:*)" prefix-wildcard shape - so a
    fully-trusted exact command like this one fails check_simple_commands
    and forces an "ask" the moment it's chained with anything else (e.g.
    "git status && node scripts/g.mjs ai"), even though the native
    permission engine already runs it unprompted on its own. Loading these
    separately and matching a simple command's full word sequence against
    them (see check_simple_commands) lets that same already-granted trust
    apply inside a chain too, without widening what's trusted standalone."""
    commands = set()
    for path in SETTINGS_PATHS:
        try:
            with open(path) as f:
                data = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError, OSError):
            continue
        for rule in data.get("permissions", {}).get("allow", []):
            m = re.match(r"^Bash\((.+)\)$", rule)
            if m and not m.group(1).rstrip().endswith(":*"):
                commands.add(m.group(1).strip())
    return commands


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
                else:
                    k = j
                    while k < n and command[k] == " ":
                        k += 1
                    path_start = k
                    while k < n and not command[k].isspace() and command[k] not in (";", "&", "|", "\n"):
                        k += 1
                    path = command[path_start:k]
                    if path and is_safe_scratchpad_target(path):
                        word.clear()
                        i = k
                        continue
            raise Unsupported(
                "unsupported operator '>' (redirection, except >/dev/null, "
                "fd dup &1/&2, or a path inside this project's scratchpad)"
            )
        if c == "{" and i + 1 < n and command[i + 1] == "}":
            # Bare '{}' - find's placeholder for the matched path in
            # -exec/-execdir clauses (see is_safe_find_exec). Safe to
            # accept as literal text even here in the general tokenizer:
            # with nothing between the braces there is no brace expansion
            # (that requires a comma-list or '..' range inside) and no
            # valid '{ cmd; }' grouping either (grouping requires
            # whitespace after '{' and a command before the closing '}') -
            # bash itself treats standalone '{}' as literal text. Any
            # other use of '{' or '}' still falls through to the
            # DANGEROUS_CHARS check below and is rejected.
            word.append("{}")
            i += 2
            continue
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


TIMEOUT_DURATION_RE = re.compile(r"^\d+(\.\d+)?[smhd]?$")


def verb_of(words):
    if words[0] == "xargs" and len(words) >= 2 and not words[1].startswith("-"):
        return verb_of(words[1:])
    if words[0] == "timeout" and len(words) >= 3 and TIMEOUT_DURATION_RE.match(words[1]):
        return verb_of(words[2:])
    if words[0] == "git":
        idx = 1
        if idx < len(words) and words[idx] == "-C" and idx + 1 < len(words):
            idx += 2
        return f"git {words[idx]}" if idx < len(words) else words[0]
    if words[0] == "node" and len(words) >= 2:
        return f"{words[0]} {words[1]}"
    return words[0]


DANGEROUS_FIND_FLAGS = {
    "-ok", "-okdir",
    "-delete", "-fls", "-fprint", "-fprint0", "-fprintf",
}

FIND_EXEC_FLAGS = {"-exec", "-execdir"}


def is_dangerous_find(words):
    """True iff this is a `find` invocation carrying an action flag that
    executes a command with no visibility into what (-ok/-okdir) or
    deletes/writes files (-delete/-fls/-fprint/-fprint0/-fprintf) - i.e.
    everything find can do beyond read-only querying and the -exec/
    -execdir case handled separately by is_safe_find_exec. `Bash(find:*)`
    in permissions.allow only ever meant "let read-only lookups through
    without a prompt"; without this check, a single unchained command like
    `find / -delete` would auto-approve silently, since verb_of() sees
    only the leading "find" token and that's already in safe_verbs.
    Scanning the token list for these flags (rather than an exact
    allow-shape like is_safe_sed uses) is safe here because, unlike sed's
    e/w which can hide inside arbitrary pattern text, find's action flags
    are always their own separate word once shell-tokenized - the only
    false positive is something like `find . -name -delete`, where
    "-delete" is actually the argument to a preceding flag rather than an
    action in its own right, and that just costs an extra prompt, not a
    missed hole."""
    return words[0] == "find" and any(w in DANGEROUS_FIND_FLAGS for w in words[1:])


def is_safe_find_exec(words, safe_verbs):
    """See module docstring for the full rationale. Requires exactly one
    -exec/-execdir in `words`, no other DANGEROUS_FIND_FLAGS before it, a
    literal '{}' in its clause, and the clause to run to the end of
    `words` - a '+' terminator is only accepted as the literal last word,
    immediately after '{}' (matching find's own syntax rule for that
    form); a '+' appearing anywhere else is rejected outright rather than
    falling through to the no-'+' branch below, since that would let
    further chained flags/actions after it (`find X -exec cat {} +
    -delete`) ride in unexamined. With no '+' at all, '{}' itself must be
    the literal last word - per the module docstring, a real '\\;'
    terminator never survives as its own token this far, so anything
    trailing '{}' here isn't legitimate -exec syntax this function can
    vouch for. The remaining words' own verb (via verb_of, so 'git
    status' style multi-word verbs still work) must be in safe_verbs -
    only plain verb-list trust applies here, not the exact-shape
    exceptions (is_safe_sed etc.), the same posture xargs' target command
    already has."""
    if words[0] != "find":
        return False
    exec_positions = [i for i, w in enumerate(words) if w in FIND_EXEC_FLAGS]
    if len(exec_positions) != 1:
        return False
    idx = exec_positions[0]
    if any(w in DANGEROUS_FIND_FLAGS for w in words[1:idx]):
        return False
    exec_words = words[idx + 1:]
    if not exec_words or "{}" not in exec_words:
        return False
    if "+" in exec_words:
        if exec_words[-1] != "+" or exec_words[-2] != "{}":
            return False
        exec_words = exec_words[:-2]
    else:
        if exec_words[-1] != "{}":
            return False
        exec_words = [w for w in exec_words if w != "{}"]
    if not exec_words:
        return False
    return verb_of(exec_words) in safe_verbs


def is_safe_claude_temp_path(path):
    """True iff `path` is a plain, already-normalized path strictly inside
    one of CLAUDE_TEMP_RM_PREFIXES. Same checks as
    is_safe_scratchpad_target (character allowlist, prefix match,
    normpath-equality to block '../' traversal and '//' collapsing), just
    against a small set of prefixes instead of one."""
    if not SAFE_SCRATCHPAD_PATH_RE.match(path):
        return False
    if not any(path.startswith(prefix) for prefix in CLAUDE_TEMP_RM_PREFIXES):
        return False
    if os.path.normpath(path) != path:
        return False
    return True


RM_SAFE_FLAG_CHARS = set("vf")


def is_safe_claude_temp_rm(words):
    """Exact-shape exception for `rm`, mirroring is_safe_sed's posture:
    file-only removal (no -r/-R/--recursive, no -d, no long options at
    all) where every non-flag argument resolves to a path strictly inside
    a Claude-owned /tmp directory (see CLAUDE_TEMP_RM_PREFIXES) - the
    per-repo scratchpad and this hook's own lock-coordination sentinel
    dirs (.claude/hooks/lock_claude_acquire.mjs et al). Unqualified `rm`
    is deliberately never a blanket-trusted verb elsewhere in this file;
    this narrows that to "single files, inside a directory nothing but
    Claude Code tooling ever writes to" rather than widening it generally.

    Flags are checked one token at a time against RM_SAFE_FLAG_CHARS
    ('v', 'f' only, in any combination, e.g. '-v', '-f', '-vf') - any
    long option ('--force', '--recursive', ...) or any short flag
    carrying a character outside {v, f} (notably 'r'/'R' for recursion,
    or 'd' which removes empty directories) fails closed rather than
    being enumerated as a blacklist, so a flag this list didn't
    anticipate can't slip a wider capability through. At least one
    non-flag argument is required, and every one of them must pass
    is_safe_claude_temp_path - so `rm -rf /` or `rm -v /etc/passwd`
    both fail (wrong flag / wrong path) and fall through to a real
    prompt like any other unrecognized `rm` invocation."""
    if not words or words[0] != "rm":
        return False
    paths = []
    for word in words[1:]:
        if word.startswith("-"):
            flag_chars = word[1:]
            if not flag_chars or any(c not in RM_SAFE_FLAG_CHARS for c in flag_chars):
                return False
            continue
        paths.append(word)
    if not paths:
        return False
    return all(is_safe_claude_temp_path(p) for p in paths)


VERIFY_HTML_DIR = os.path.join(REPO_ROOT, "public") + os.sep
VERIFY_HTML_BASENAME_RE = re.compile(r"^tmp_verify_[A-Za-z0-9_-]+\.html$")


def is_safe_verify_html_path(path):
    """True iff `path` is a plain, already-normalized absolute path to a
    `tmp_verify_<name>.html` scratch file directly inside this repo's
    `public/` directory. Same character-allowlist + normpath-equality
    checks as is_safe_scratchpad_target/is_safe_claude_temp_path, plus a
    basename pattern so this can't be widened to any file under public/."""
    if not SAFE_SCRATCHPAD_PATH_RE.match(path):
        return False
    if not path.startswith(VERIFY_HTML_DIR):
        return False
    if os.path.normpath(path) != path:
        return False
    basename = os.path.basename(path)
    # Must be a direct child of public/, not some/subdir/tmp_verify_x.html -
    # startswith(VERIFY_HTML_DIR) alone doesn't rule out subdirectories.
    if os.path.join(VERIFY_HTML_DIR, basename) != path:
        return False
    return bool(VERIFY_HTML_BASENAME_RE.match(basename))


def is_safe_verify_html_rm(words):
    """Exact-shape exception for `rm`, sibling of is_safe_claude_temp_rm:
    file-only removal (same 'v'/'f'-only flag restriction) where every
    argument passes is_safe_verify_html_path. See module docstring for why
    these files exist under public/ instead of the real scratchpad."""
    if not words or words[0] != "rm":
        return False
    paths = []
    for word in words[1:]:
        if word.startswith("-"):
            flag_chars = word[1:]
            if not flag_chars or any(c not in RM_SAFE_FLAG_CHARS for c in flag_chars):
                return False
            continue
        paths.append(word)
    if not paths:
        return False
    return all(is_safe_verify_html_path(p) for p in paths)


def is_safe_bare_mount(words):
    """True iff this is `mount` invoked with zero arguments - the read-only
    form that just lists currently mounted filesystems (equivalent to
    reading /proc/mounts). No `Bash(mount:*)` entry exists in
    permissions.allow because `mount SRC DST` (or any of mount's other
    argument forms - remount, bind mount, -o options, etc.) actually
    changes system state, the same risk class as why bare `rm` isn't
    blanket-trusted either. This exception is deliberately exact-shape
    (no arguments at all) rather than trying to distinguish "safe" flags
    from "unsafe" ones - mount's flag surface is large enough that a
    blacklist/whitelist of individual options isn't worth trusting."""
    return words == ["mount"]


def is_safe_sandboxed_node_eval(words):
    """Recognize exactly one template: an ad-hoc `node -e` snippet run
    under real OS/runtime sandboxing rather than trusted by verb prefix.
    See the module docstring for why this exists and what it was tested
    against. Any deviation - extra/reordered flags, a relative or
    out-of-repo read path, additional --allow-* grants, trailing args -
    is rejected; this only ever matches the one exact shape that was
    actually verified to block fs write, out-of-scope fs read,
    child_process, and network."""
    if len(words) != 9:
        return False
    if words[0:5] != ["unshare", "--net", "--map-root-user", "--", "node"]:
        return False
    if words[5] != "--permission":
        return False
    if not words[6].startswith("--allow-fs-read="):
        return False
    path = words[6][len("--allow-fs-read="):]
    if not os.path.isabs(path) or os.path.normpath(path) != path:
        return False
    if path != REPO_ROOT and not path.startswith(REPO_ROOT + os.sep):
        return False
    return words[7] == "-e"


def is_safe_temp_script_path(path):
    """True iff `path` is a plain, already-normalized relative path
    strictly inside this project's scripts/temp/ directory, with a
    .mjs extension. Mirrors is_safe_scratchpad_target's checks (no
    shell metacharacters, no ../ traversal) applied to a different
    target directory."""
    if not SAFE_TEMP_SCRIPT_PATH_RE.match(path):
        return False
    if not path.startswith(SCRIPTS_TEMP_PREFIX):
        return False
    if os.path.normpath(path) != path:
        return False
    return path.endswith(".mjs")


def is_safe_sandboxed_node_script(words):
    """Sibling of is_safe_sandboxed_node_eval: same sandboxing template,
    but running a script file under scripts/temp/ instead of an inline
    -e string. See module docstring for the two extra restrictions
    (read-only, path pinned to scripts/temp/) this adds."""
    if len(words) != 8:
        return False
    if words[0:5] != ["unshare", "--net", "--map-root-user", "--", "node"]:
        return False
    if words[5] != "--permission":
        return False
    if not words[6].startswith("--allow-fs-read="):
        return False
    path = words[6][len("--allow-fs-read="):]
    if not os.path.isabs(path) or os.path.normpath(path) != path:
        return False
    if path != REPO_ROOT and not path.startswith(REPO_ROOT + os.sep):
        return False
    return is_safe_temp_script_path(words[7])


# Matches exactly one sed script shape, anchored start-to-end:
#   - a single `s/PATTERN/REPLACEMENT/FLAGS` substitution, where FLAGS is
#     restricted to digits (occurrence number) plus g/p/I/i/M/m - notably
#     excluding `e` (execute) and `w` (write-to-file);
#   - or a single address (line number, `$`, or a `/regex/` - optionally a
#     `,`-separated range of two) followed by only `d` or `p`.
# PATTERN/REPLACEMENT content itself is unrestricted (any char but an
# unescaped `/` or newline) - letters like e/w are only rejected when they'd
# be read as the trailing command/flag, never as literal pattern text, since
# telling those apart in general requires a real sed parser (see module
# docstring). Only `/` is accepted as the s-command delimiter - alternate
# delimiters (`s#..#..#`, `s,..,..,`) are deliberately out of scope and fall
# through to a real prompt rather than being pattern-matched loosely.
_SED_ADDR = r"(?:\d+|\$|/(?:[^/\\\n]|\\.)+/)(?:,(?:\d+|\$|/(?:[^/\\\n]|\\.)+/))?"
SED_SCRIPT_RE = re.compile(
    r"^(?:"
    r"s/(?:[^/\\\n]|\\.)*/(?:[^/\\\n]|\\.)*/[0-9gpIiMm]*"
    r"|" + _SED_ADDR + r"[dp]"
    r")$"
)


def is_safe_sed(words):
    """Narrow allow-shape for `sed`, mirroring the sandboxed-node templates'
    "exact shape or reject" posture rather than blacklisting dangerous
    tokens. See module docstring for the full risk analysis (why plain
    `-i`/`--in-place` isn't the only danger - GNU sed's `e` command/flag is
    arbitrary code execution and `w`/`W` is an arbitrary-file-write
    primitive, independent of -i; `-f`/`--file=` hides the actual script
    from the command string entirely).

    Accepted shape: `sed` [`-n`] then exactly one of (`-e SCRIPT` | bare
    positional SCRIPT), where SCRIPT matches SED_SCRIPT_RE, followed by
    nothing but plain filename arguments (no further `-`-prefixed flags -
    this alone rejects -i, -f/--file, --posix, a second -e, etc.)."""
    if not words or words[0] != "sed":
        return False
    idx = 1
    if idx < len(words) and words[idx] == "-n":
        idx += 1
    if idx >= len(words):
        return False
    if words[idx] == "-e":
        idx += 1
        if idx >= len(words):
            return False
        script = words[idx]
        idx += 1
    else:
        script = words[idx]
        idx += 1
    if not SED_SCRIPT_RE.match(script):
        return False
    return all(not w.startswith("-") for w in words[idx:])


def check_simple_commands(tokens, safe_verbs, safe_exact_commands):
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
        if words[0] == "find" and any(w in FIND_EXEC_FLAGS for w in words[1:]):
            if not is_safe_find_exec(words, safe_verbs):
                return False
            continue
        if is_dangerous_find(words):
            return False
        if " ".join(words) in safe_exact_commands:
            continue
        if (
            verb_of(words) not in safe_verbs
            and not is_safe_sandboxed_node_eval(words)
            and not is_safe_sandboxed_node_script(words)
            and not is_safe_sed(words)
            and not is_safe_bare_mount(words)
            and not is_safe_claude_temp_rm(words)
            and not is_safe_verify_html_rm(words)
        ):
            return False
    return found_command


def check_for_loop(tokens, safe_verbs, safe_exact_commands):
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
    return check_simple_commands(body, safe_verbs, safe_exact_commands)


def is_safe(command, safe_verbs, safe_exact_commands):
    tokens = tokenize(command)
    if not tokens:
        return False
    found_command = False
    for group in split_top_level(tokens):
        if not group:
            continue
        found_command = True
        if group[0] == "for":
            if not check_for_loop(group, safe_verbs, safe_exact_commands):
                return False
        elif group[0] in RESERVED_WORDS:
            raise Unsupported(f"unsupported construct {group[0]!r}")
        elif not check_simple_commands(group, safe_verbs, safe_exact_commands):
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
    safe_exact_commands = load_safe_exact_commands()
    if not safe_verbs and not safe_exact_commands:
        return

    try:
        safe = is_safe(command, safe_verbs, safe_exact_commands)
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
