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
understands a deliberately narrow shape: a chain of statements joined by
any mix of ';', '|', '&&', '||', where each statement is a plain simple
command, a 'for VAR in LIST; do CMDS; done' loop, or an
'if COND; then CMDS; [elif COND; then CMDS;]* [else CMDS;] fi' conditional.
for/if blocks may nest inside one another's bodies to any depth - the body
of a loop or a branch is itself just another such statement chain,
validated by the same recursion (see check_statements / check_for_loop /
check_if). Every simple command's verb, wherever it appears - in the
top-level chain, inside a loop body, or inside any condition or branch of
an if - must independently be in permissions.allow; conditional vs.
unconditional execution doesn't matter, since the check is about which
verbs can run, not when. The loop-control builtins break and continue are
also allowed inside a body (they run no external command; see
SAFE_BUILTINS). Anything outside that grammar (redirection, subshells,
backgrounding, other control flow such as while/until/case) is deliberately
left unparsed and falls through to a real prompt.

Two constructs that once fell in that "left unparsed" bucket are now
parsed, because doing so extends the exact same verb-allowlist guarantee
rather than weakening it:

  - Leading `VAR=...` assignments on a simple command are stripped before
    the verb check (a simple command that is *only* assignments runs no
    verb at all and is safe on its own). Any `$(...)` in an assignment's
    right-hand side is validated the same way as anywhere else. The one
    carve-out is assignments to execution-influencing names (PATH, LD_*,
    DYLD_*, IFS, GLOBIGNORE, CDPATH, BASH_ENV/ENV, PROMPT_COMMAND, PS4,
    BASH_FUNC_*, SHELLOPTS/BASHOPTS - see DANGEROUS_ASSIGN_NAMES): those
    fail closed to a real prompt, since they could change how a following
    trusted verb is resolved or what it loads.
  - `$(...)` command substitution is parsed by extracting its inner command
    and requiring *that* command to be entirely trusted verbs too (see
    tokenize / _scan_substitution / is_safe's subst_validator), then
    collapsing the whole substitution to an opaque placeholder. Running the
    substitution is thus trusted exactly as much as running its inner
    command standalone; the text it *produces* is never trusted, so a
    command whose verb comes from a substitution (`$(echo grep) x`) still
    prompts. Backtick substitution stays rejected - only `$(...)` is
    parsed.

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
etc.), so e.g. `timeout 60 node scripts/r.mjs ai_git` still isn't auto-approved
even though `node scripts/r.mjs ai_git` alone is - only plain verb-list rules
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

Beyond merely not auto-approving it, a raw `node -e`/`--eval`/`-p`/`--print`
that is NOT this exact sandboxed template is actively DENIED (see
find_raw_node_eval / main), rather than left to fall through to a human
approval prompt. The reasoning: with several agents sharing one human
approver, a stream of un-vettable `node -e` prompts (often referencing a
script the prompt text doesn't even show) has negative value - the human
can't realistically review each one, so a rubber-stamped prompt is just
cost. The guard therefore refuses it outright and points the caller at the
two supported paths instead: the sandboxed read-only template above, or a
committed `scripts/r.mjs` function invoked as `node scripts/r.mjs <fn>
<args>` (allow-listed once per function via a `Bash(node scripts/r.mjs
<fn>:*)` rule, after which args flow through freely). Detection is
tokenizer-based and quote-aware, so a literal `node -e` inside a quoted
argument (`grep 'node -e' file`) is never mistaken for an actual
invocation, and any command the tokenizer can't parse falls through to
normal handling rather than being force-denied on a guess.

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

An eighth exception, `is_safe_git_rm_tmp`, covers `git rm <files...>`
where every argument's basename matches the user's own `_tmp_` scratch
naming convention (e.g. `_tmp_codemod.mjs`). `git rm` isn't in
permissions.allow at all otherwise - it removes a tracked file from both
the working tree and the index, the same destructive-operation class as
bare `rm`. Unlike the other rm exceptions above, this one isn't scoped to
a fixed Claude-owned directory - it trusts a basename convention instead,
which is a strictly weaker guarantee (nothing stops some other real file
in the repo from coincidentally starting with `_tmp_`), so it's kept
stricter than those in every other respect: no flags are accepted at all
(not even 'v'/'f' - notably no -r/-R, so a same-prefixed directory can
never be removed this way, and no -f/--cached, so git's own refusal to
touch a file that has uncommitted local modifications stays intact as a
real safety net rather than being bypassed), plus the same no-absolute-
path, no-`../`-traversal checks used everywhere else in this file.

A ninth exception, `is_safe_curl_status_check`, is the first one in this
file for a tool capable of outbound network requests at all - no
`Bash(curl:*)` rule exists, since beyond networking, curl can also write
arbitrary files (-o/-O) or upload local file contents to a remote host
(-T/--upload-file, -d/--data, -F). Rather than a flag blacklist, this
recognizes exactly one 7-word template: `curl -s -o /dev/null -w FORMAT
URL`, where the URL's host is pinned to localhost/127.0.0.1 (never a real
network destination - this can't become a general-purpose fetch tool),
`-o /dev/null` is required verbatim (the response body is always
discarded, so nothing the server returns can escape via a written file),
and FORMAT may only reference a small whitelist of curl's own read-only
post-transfer metadata fields (is_safe_curl_write_out) - curl never
shell-interprets that string, it only prints it, so this last check is
narrowness for its own sake rather than a real risk closed. Any deviation
- extra or reordered flags, a non-localhost URL, a different scheme -
falls through to a real prompt exactly like the sandboxed-node templates.

A tenth exception, `is_safe_scripts_temp_rm`, is the same shape as
`is_safe_verify_html_rm` applied to this repo's `scripts/temp/` throwaway
directory: file-only `rm` (same 'v'/'f'-only flag restriction) where every
argument is an absolute path to a direct child of `<repo>/scripts/temp/`.
That directory is gitignored (`/scripts/temp/`) and is the sanctioned home
for disposable one-off scripts (see the sandboxed-node-script template,
which only ever runs files from there), so anything directly inside it is
as disposable as the scratchpad - no basename pattern is needed the way
`is_safe_verify_html_rm` needs one for `public/` (which also holds real,
served files). Path validation reuses the same character-allowlist +
normpath-equality + direct-child checks as everywhere else, so `../`
traversal, a nested subdirectory, or a glob character all fail closed to a
real prompt.

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
    "while", "until", "case", "esac", "function", "select",
}
# `time` is deliberately NOT reserved here. Alone among bash's keywords it
# introduces no structure - `time CMD` runs exactly CMD and prints a duration
# to stderr - so it gets the same transparent unwrapping as xargs/timeout in
# verb_of, and the inner command is still checked entirely on its own merits.
# Leaving it in RESERVED_WORDS would make check_simple_commands raise
# Unsupported at the reserved-word floor before verb_of ever saw it.

# Loop-control builtins. They run no external command and touch nothing on
# disk or the network - `break`/`continue` only alter control flow within an
# enclosing loop - so they're always safe as a simple command's verb, even
# though no Bash(break:*)/Bash(continue:*) rule exists (and shouldn't: these
# words have no meaning outside a loop body). A numeric argument (`break 2`)
# is inert; a `$(...)` argument was already validated by tokenize like
# anywhere else.
#
# `true`/`false` are here for the same reason: they run nothing and only set
# an exit status. They are also what makes `while true; do …; done` reachable
# at all - the loop condition is verb-checked like any other command, so
# without them the most common loop header would always prompt no matter how
# trusted the body.
SAFE_BUILTINS = {"break", "continue", "true", "false"}

# Block-structure keywords this hook parses (in addition to plain simple
# commands): `for … done` / `while … done` / `until … done` loops and
# `if … fi` conditionals, which may nest freely inside one another's bodies.
# split_blocks() keeps each such block together as one statement via
# opener/closer depth tracking; check_for_loop / check_while / check_if then
# validate its exact shape and recurse into its body via check_statements.
#
# `case … esac` is deliberately NOT modelled: its patterns need `)` and `;;`,
# and `(`/`)` are in DANGEROUS_CHARS, so a case statement is rejected during
# tokenize before any block parsing could see it. Supporting it means
# loosening the tokenizer on a fail-closed path - a much larger change than
# adding a block shape. It keeps falling through to a real prompt.
BLOCK_OPENERS = {"for", "while", "until", "if"}
BLOCK_CLOSERS = {"done", "fi"}

DANGEROUS_CHARS = set("`<{}()")

# A single command-substitution `$(...)` collapses to this placeholder word
# once its inner command has been recursively validated (see tokenize /
# _scan_substitution). It is deliberately a value that can never itself be a
# trusted verb or a valid assignment name, so a command whose verb *comes
# from* a substitution (`$(echo grep) foo`) still falls through to a prompt -
# only the already-validated act of running the inner command is trusted, not
# whatever text it prints.
SUBSTITUTION_PLACEHOLDER = "\x00"

# Real statement separators are emitted as sentinel tokens prefixed with \x1e
# (ASCII record separator), a control char that never appears in a command or
# a word. This keeps a QUOTED separator char - `tr ';'`, `tr '|'`, whose word
# value is exactly ";"/"|" - distinguishable from a real separator, so it is
# NOT mis-split into a new statement. The prefix guarantees no collision: a
# word token can only ever contain \x00 (a substitution placeholder), never
# \x1e. Fails closed regardless - a misread separator would only over-split
# into an untrusted fragment (ask), never merge two statements (which could
# hide a command).
_SEP = "\x1e"
SEP_SEMI = _SEP + ";"
SEP_PIPE = _SEP + "|"
SEP_AND = _SEP + "&&"
SEP_OR = _SEP + "||"

ASSIGN_RE = re.compile(r"^([A-Za-z_][A-Za-z0-9_]*)=")

# Variable names whose assignment can change how the *following* command is
# located (PATH/CDPATH), which code it loads before running (LD_*/DYLD_*),
# how the shell splits/globs its arguments (IFS/GLOBIGNORE), or what runs
# implicitly (BASH_ENV/ENV/PROMPT_COMMAND/PS4, BASH_FUNC_* exported
# functions). An assignment to any of these is NOT stripped as a harmless
# env-set; it fails closed to a real prompt, so e.g. `LD_PRELOAD=./evil.so
# grep x` can never ride in on grep's verb trust. Plain data assignments
# (apps=..., imp=$(...)) are unaffected.
DANGEROUS_ASSIGN_NAMES = {
    "PATH", "CDPATH", "IFS", "GLOBIGNORE", "ENV", "BASH_ENV",
    "SHELLOPTS", "BASHOPTS", "PS4", "PROMPT_COMMAND",
    # An interpreter's own options variable is the same hole as LD_PRELOAD,
    # one level up: it names code to load BEFORE the script runs. NODE_OPTIONS
    # is the sharp one here, because `node scripts/ai.mjs <fn>` is the most
    # granted verb in the repo - so `NODE_OPTIONS="--require /tmp/evil.js"
    # node scripts/ai.mjs <any granted fn>` was auto-approved arbitrary code
    # execution, with the trust coming from the granted function that never
    # got to run first. Found 2026-07-27 while working out why a CPU-profiling
    # command prompted; it did not, and that was the bug.
    #
    # Named explicitly rather than by a "NODE_" prefix on purpose: NODE_ENV=
    # production is an everyday, harmless assignment, and a prefix that
    # prompted on it would push people to write commands the guard can't read
    # at all. The other interpreters are listed for the same reason they would
    # be if they were the main one - being second-choice is not a safety
    # property.
    "NODE_OPTIONS", "NODE_REPL_EXTERNAL_MODULE",
    "PYTHONPATH", "PYTHONSTARTUP", "PYTHONHOME",
    "PERL5OPT", "PERL5LIB", "RUBYOPT", "RUBYLIB",
}
DANGEROUS_ASSIGN_PREFIXES = ("LD_", "DYLD_", "BASH_FUNC_")


def is_dangerous_assignment_name(name):
    if name in DANGEROUS_ASSIGN_NAMES:
        return True
    return any(name.startswith(p) for p in DANGEROUS_ASSIGN_PREFIXES)


class Unsupported(Exception):
    """Command doesn't fit the narrow shape this hook parses."""


def _scan_substitution(command, i):
    """Given `command` and an index `i` pointing at the first character
    *inside* a `$(` command substitution, return (inner, end) where `inner`
    is the raw substring between the parentheses and `end` is the index just
    past the matching `)`. Quote-aware (single/double quotes suspend paren
    counting; a backslash escapes the next char) and paren-depth-aware so
    nested `$(...)` / subshells find their true close. Backticks are rejected
    outright - only `$(...)` substitution is ever parsed. Raises Unsupported
    if the substitution is unterminated. The returned `inner` is handed back
    to tokenize's caller for its own recursive is_safe() check - this scanner
    only finds the boundary, it makes no trust decision itself."""
    depth = 1
    quote = None  # None | "'" | '"'
    n = len(command)
    start = i
    while i < n:
        c = command[i]
        if quote == "'":
            if c == "'":
                quote = None
            i += 1
            continue
        if quote == '"':
            if c == "\\" and i + 1 < n:
                i += 2
                continue
            if c == '"':
                quote = None
            elif c == "`":
                raise Unsupported("backtick command substitution")
            i += 1
            continue
        # unquoted
        if c == "'":
            quote = "'"
        elif c == '"':
            quote = '"'
        elif c == "\\":
            i += 2
            continue
        elif c == "`":
            raise Unsupported("backtick command substitution")
        elif c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0:
                return command[start:i], i + 1
        i += 1
    raise Unsupported("unterminated command substitution")


def _scan_arithmetic(command, i):
    """Given `command` and index `i` pointing at the first character *inside*
    a `$((` arithmetic expansion (i.e. just past both opening parens), return
    (body, end) where `body` is the text between `$((` and its matching `))`
    and `end` is the index just past that closing `))`. Paren-depth- and
    quote-aware, starting at depth 2 for the two opening parens.

    Arithmetic is pure integer math with no side effects, so the caller can
    collapse the whole span to an inert placeholder - BUT only after scanning
    `body` for a nested `$(`/backtick, which WOULD run a command; this scanner
    finds the boundary and makes no trust decision. Raises Unsupported if
    unterminated."""
    depth = 2
    quote = None  # None | "'" | '"'
    n = len(command)
    start = i
    while i < n:
        c = command[i]
        if quote == "'":
            if c == "'":
                quote = None
            i += 1
            continue
        if quote == '"':
            if c == "\\" and i + 1 < n:
                i += 2
                continue
            if c == '"':
                quote = None
            i += 1
            continue
        if c == "'":
            quote = "'"
        elif c == '"':
            quote = '"'
        elif c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0:
                return command[start:i - 1], i + 1
        i += 1
    raise Unsupported("unterminated arithmetic expansion")


def _arithmetic_is_inert(body):
    """True iff an arithmetic-expansion body is pure math with no embedded
    command execution. A bare `$var`/`${var}` reference is inert, but these
    force a fall-through to Unsupported: a `$(` command substitution or backtick
    (runs a command), and an array subscript `[` (bash re-evaluates a subscript
    as an arithmetic expression, the known indirect-injection vector where a
    variable's value like `a[$(payload)]` executes). Conservative by design - a
    nested arithmetic `$((` also contains `$(` and is refused, and plain array
    math `a[i]` is refused too; both are rare and safe to send to `ask`."""
    return "$(" not in body and "`" not in body and "[" not in body


def _is_network_pseudo_device(path):
    """True for bash's `/dev/tcp/*` and `/dev/udp/*` redirect specials, which
    open a NETWORK connection instead of reading a file - so they are NOT
    equivalent to handing the path to the trusted verb as an argument (a plain
    file open), and must not ride the read-only input-redirect allowance."""
    return path.startswith("/dev/tcp/") or path.startswith("/dev/udp/")


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
    "Bash(node scripts/r.mjs ai_git)". load_safe_verbs() can't see these - its
    regex only recognizes the "Bash(verb:*)" prefix-wildcard shape - so a
    fully-trusted exact command like this one fails check_simple_commands
    and forces an "ask" the moment it's chained with anything else (e.g.
    "git status && node scripts/r.mjs ai_git"), even though the native
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


LEADING_LITERAL_ASSIGN_RE = re.compile(
    r"(?:^|[;&|\n])[ \t]*([A-Za-z_][A-Za-z0-9_]*)=([A-Za-z0-9_./+@:%-]+)(?=[ \t]|$|[;&|\n])"
)


def _literal_var_map(command):
    """Capture `VAR=<literal path>` assignments (value restricted to a plain
    path charset - no $, quotes, or shell metacharacters) so that a later
    `> $VAR/f` redirect target can be resolved and checked against the
    scratchpad allowance. Safe by construction: resolution only ever ADDS
    recognition - the resolved target must still pass is_safe_scratchpad_target,
    so a non-scratchpad value (like /etc), a value built from `$(...)`, or a
    value the guard misreads all stay blocked, never leaked. Not quote-aware,
    which is fine for the same reason - a spurious capture can't widen what the
    scratchpad check accepts."""
    return {
        m.group(1): m.group(2)
        for m in LEADING_LITERAL_ASSIGN_RE.finditer(command)
    }


VAR_PREFIX_RE = re.compile(r"^\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?(.*)$")


def _resolve_leading_var(path, var_map):
    """If `path` starts with `$VAR` or `${VAR}` for a captured literal VAR,
    substitute its value for that prefix; else return path unchanged. The
    caller re-validates the result against the scratchpad allowance."""
    m = VAR_PREFIX_RE.match(path)
    if m and m.group(1) in var_map:
        return var_map[m.group(1)] + m.group(2)
    return path


def tokenize(command, subst_validator=None, outer_vars=None):
    """Quote-aware tokenizer. Emits word tokens (quotes stripped) and a
    single ';' token for each unquoted ';' or newline. Raises Unsupported
    for any redirection (except the narrow cases below), subshell/group,
    backgrounding, or pipe/&&/|| operator found outside single quotes
    (inside single quotes everything is always literal in POSIX shell).

    A `$(...)` command substitution is parsed rather than rejected when
    `subst_validator` is supplied: its inner command is extracted (see
    _scan_substitution) and passed to subst_validator, which returns True
    only if that inner command is itself entirely made of already-trusted
    verbs. On success the whole `$(...)` collapses to a single
    SUBSTITUTION_PLACEHOLDER character in the current word - so running the
    substitution is trusted exactly as much as running its inner command
    standalone would be, and nothing about the text it *produces* is
    trusted. On failure (or when subst_validator is None) it raises
    Unsupported, the same as any other unparsed construct. Backtick
    substitution is always rejected - only `$(...)` is ever parsed."""
    tokens = []
    word = []
    quote = None  # None | "'" | '"'
    i, n = 0, len(command)
    var_map = dict(outer_vars or {})
    var_map.update(_literal_var_map(command))

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
            if c == "$" and i + 2 < n and command[i + 1] == "(" and command[i + 2] == "(":
                body, end = _scan_arithmetic(command, i + 3)
                if not _arithmetic_is_inert(body):
                    raise Unsupported("command substitution inside arithmetic")
                word.append(SUBSTITUTION_PLACEHOLDER)
                i = end
                continue
            if c == "$" and i + 1 < n and command[i + 1] == "(":
                inner, end = _scan_substitution(command, i + 2)
                if subst_validator is None or not subst_validator(inner):
                    raise Unsupported("command substitution")
                word.append(SUBSTITUTION_PLACEHOLDER)
                i = end
                continue
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
                tokens.append(SEP_OR)
                i += 2
                continue
            flush_word()
            tokens.append(SEP_PIPE)
            i += 1
            continue
        if c == "&":
            if i + 1 < n and command[i + 1] == "&":
                flush_word()
                tokens.append(SEP_AND)
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
                else:
                    # A space is allowed before a /dev/null target: `> /dev/null`
                    # and `2> /dev/null` are the same harmless redirect as the
                    # glued `>/dev/null` (bash accepts the space). fd-dup &1/&2
                    # stays glued, matching how bash requires `>&1`.
                    j_dev_null = j
                    while j_dev_null < n and command[j_dev_null] == " ":
                        j_dev_null += 1
                    if command[j_dev_null:j_dev_null + len("/dev/null")] == "/dev/null":
                        j = j_dev_null
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
                    path = _resolve_leading_var(path, var_map)
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
        if c == "<":
            # Input redirection from a file (`< path`, or `N< path`) is
            # read-only: it feeds an existing file to the command's stdin,
            # which the already-trusted verb could equally read by taking that
            # path as an argument - so any plain-path target is safe and the
            # redirect is simply dropped (like >/dev/null). The target must be
            # a metacharacter-free path (SAFE_SCRATCHPAD_PATH_RE charset) so a
            # `< $(cmd)`/`< \`cmd\`` can't smuggle in command execution. A
            # leading `$VAR` is resolved first, exactly as on the output side -
            # a read is strictly safer than the write that already allows it,
            # and an unresolved `$VAR` still fails the charset and is rejected.
            # Excluded, all still Unsupported: `<<`/`<<<` (heredoc/here-string),
            # `<>` (opens for WRITE too), and `<(` (process substitution - runs
            # a command).
            is_fd_prefix = bool(word) and all(ch.isdigit() for ch in word)
            if (is_fd_prefix or not word) and i + 1 < n and command[i + 1] not in ("<", ">", "("):
                k = i + 1
                while k < n and command[k] == " ":
                    k += 1
                path_start = k
                while k < n and not command[k].isspace() and command[k] not in (";", "&", "|", "\n", "<", ">"):
                    k += 1
                path = command[path_start:k]
                path = _resolve_leading_var(path, var_map)
                if path and SAFE_SCRATCHPAD_PATH_RE.match(path) and not _is_network_pseudo_device(path):
                    word.clear()
                    i = k
                    continue
            raise Unsupported(
                "unsupported operator '<' (input redirection needs a plain "
                "file-path target; <<, <>, <( are not accepted)"
            )
        if c in DANGEROUS_CHARS:
            raise Unsupported(f"unsupported operator {c!r}")
        if c == "$" and i + 2 < n and command[i + 1] == "(" and command[i + 2] == "(":
            body, end = _scan_arithmetic(command, i + 3)
            if not _arithmetic_is_inert(body):
                raise Unsupported("command substitution inside arithmetic")
            word.append(SUBSTITUTION_PLACEHOLDER)
            i = end
            continue
        if c == "$" and i + 1 < n and command[i + 1] == "(":
            inner, end = _scan_substitution(command, i + 2)
            if subst_validator is None or not subst_validator(inner):
                raise Unsupported("command substitution")
            word.append(SUBSTITUTION_PLACEHOLDER)
            i = end
            continue
        if c in (";", "\n"):
            flush_word()
            tokens.append(SEP_SEMI)
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
        if t == SEP_SEMI and collapsed and collapsed[-1] == SEP_SEMI:
            continue
        collapsed.append(t)
    while collapsed and collapsed[0] == SEP_SEMI:
        collapsed.pop(0)
    while collapsed and collapsed[-1] == SEP_SEMI:
        collapsed.pop()
    return collapsed


SEPARATORS = {SEP_SEMI, SEP_PIPE, SEP_AND, SEP_OR}


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


def split_blocks(tokens):
    """Split a token sequence into statements on any mix of ';', '|', '&&',
    '||', except that a 'for … done' loop or an 'if … fi' conditional is kept
    together as one statement - including all its internal separators and any
    blocks nested inside it - via opener/closer depth tracking (see
    BLOCK_OPENERS/BLOCK_CLOSERS). Without this a naive split would slice a
    block apart at its first internal ';'. This is what lets a block be
    chained with plain commands via any separator (e.g. 'cd X && for … done')
    and lets blocks nest, while every other control-flow keyword
    (while/until/case/…) is left intact for check_statements to reject as an
    unparsed construct. A block whose closer is missing raises Unsupported.

    A block opener only starts a block when it's the first word of a statement
    (`not current`); an opener keyword appearing mid-statement is treated as a
    plain word, the same posture the previous for-only splitter had."""
    groups, current = [], []
    i, n = 0, len(tokens)
    while i < n:
        t = tokens[i]
        if t in SEPARATORS:
            groups.append(current)
            current = []
            i += 1
            continue
        if t in BLOCK_OPENERS and not current:
            depth, j, closed = 0, i, False
            while j < n:
                if tokens[j] in BLOCK_OPENERS:
                    depth += 1
                elif tokens[j] in BLOCK_CLOSERS:
                    depth -= 1
                    if depth == 0:
                        j += 1
                        closed = True
                        break
                j += 1
            if not closed:
                raise Unsupported("malformed block: missing closer ('done'/'fi')")
            groups.append(tokens[i:j])
            current = []
            i = j
            continue
        current.append(t)
        i += 1
    groups.append(current)
    return groups


TIMEOUT_DURATION_RE = re.compile(r"^\d+(\.\d+)?[smhd]?$")

# node scripts that are subcommand dispatchers (like git): the real operation
# is the *third* word (`node scripts/r.mjs app_shared_dev_build`), not the
# script itself, so a per-subcommand allow rule
# (Bash(node scripts/r.mjs app_shared_dev_build:*)) can only match if verb_of
# carries that third word. Every other node invocation keeps the 2-word verb.
# Imported, not duplicated: dispatcher_scripts.py is GENERATED from
# js/dispatcher_scripts.mjs (the source of truth), and dispatcher_scripts_python_assert
# fails `q` if the two drift. Deliberately an import of a literal rather than a
# runtime JSON read - the deny floor below is keyed on this set, so a read that
# could fail would fail OPEN. A missing module raises here instead, loudly.
from dispatcher_scripts import NODE_DISPATCHER_SCRIPTS

# Also generated, from js/dispatcher_commands_fn_named.mjs; drift fails `q` via
# dispatcher_commands_python_assert. The verb fold reads it to know when the
# function being granted is the fourth word rather than the third.
from dispatcher_commands import DISPATCHER_COMMANDS_FN_NAMED


def dispatcher_script_is(word):
    """True when `word` (the second word of `node <script> <fn>`) names one of
    NODE_DISPATCHER_SCRIPTS, given relative or absolute. Every dispatcher takes
    a function name as its third word, so anything keyed on "which function is
    being run" must accept all of them - keying on one script only would let
    the others route around it."""
    for script in NODE_DISPATCHER_SCRIPTS:
        if word == script or word.endswith("/" + script):
            return True
    return False


def dispatcher_script_canonical(word):
    """The repo-relative spelling of whichever dispatcher script `word` names,
    when `word` is either that spelling already or THIS repo's own absolute
    path to it; otherwise `word` unchanged.

    An allow rule is matched as literal text, so Bash(node scripts/ai.mjs
    <fn>:*) never matched `node /home/j/repos/love/scripts/ai.mjs <fn>` - the
    same program running the same function with the same arguments, spelled
    the other way. Every such call fell through to a prompt. Folding the two
    spellings together here is what lets one generated rule cover both,
    instead of generating a second copy of all 500-odd rules.

    Pinned to REPO_ROOT rather than reusing dispatcher_script_is's
    endswith("/" + script): `/anywhere/else/scripts/ai.mjs` is a DIFFERENT
    checkout whose functions are not the ones the human granted. Pinned this
    way the fold is strictly NARROWER than the relative spelling it folds
    onto, which resolves against whatever the working directory happens to
    be and so already names any checkout you care to stand in."""
    for script in NODE_DISPATCHER_SCRIPTS:
        if word == script:
            return script
        if word == os.path.join(REPO_ROOT, script):
            return script
    return word


# The one dispatcher Claude runs. ai.mjs refuses shorthand (full names only)
# and prints lossless JSON; r.mjs/rl.mjs/g.mjs are the human's seams. Claude
# invoking any of the others directly is denied below - not because they are
# unsafe, but so the safety properties of ai.mjs can't be routed around and so
# every permission rule keeps naming exactly one seam. See CLAUDE.md "Two seams".
AI_DISPATCHER_SCRIPT = "scripts/ai.mjs"


def ai_script_is(word):
    """True when `word` names scripts/ai.mjs, relative or absolute."""
    return word == AI_DISPATCHER_SCRIPT or word.endswith("/" + AI_DISPATCHER_SCRIPT)


def scripts_path_is(word):
    """True when `word` is a path into the repo's scripts/ directory (relative
    `scripts/x` or absolute `.../scripts/x`). Used to fence the whole directory
    to ai.mjs; the leading-slash boundary keeps it from matching `myscripts/`."""
    return word.startswith("scripts/") or "/scripts/" in word

# git global options that take NO argument and cannot inject an executable or
# change how a subcommand is resolved - so skipping them before reading the
# subcommand (see verb_of) never widens trust beyond the subcommand's own
# allow rule. Value-taking globals (-c, -C, --exec-path, --git-dir,
# --work-tree, --namespace, --config-env) are deliberately excluded: those
# are the ones that can point the pager/alias/exec-path at an arbitrary
# command, so they must keep falling through to a real prompt.
GIT_SAFE_GLOBAL_FLAGS = {
    "--no-pager", "-P", "--paginate", "-p",
    "--bare", "--no-replace-objects", "--no-optional-locks",
    "--literal-pathspecs", "--glob-pathspecs", "--noglob-pathspecs",
    "--icase-pathspecs",
}


def transparent_wrapper_skip(words):
    """How many leading words a transparent wrapper occupies, or 0 if this
    command doesn't start with one.

    A transparent wrapper runs the rest of the word list as its own command
    and grants no trust of its own, so the inner command is what actually
    needs checking - both verb_of and _strip_command_prefixes look straight
    through it. Each shape is deliberately exact: any flag form (`xargs
    -I{}`, `timeout -k 5 30`, `time -p`) fails the check and falls through
    to a real prompt, because a flag can change what actually gets run.

    Single source of truth on purpose - these three shapes were previously
    spelled out in both callers, where they could drift apart and silently
    widen one path but not the other."""
    if words[0] == "xargs" and len(words) >= 2 and not words[1].startswith("-"):
        return 1
    if words[0] == "timeout" and len(words) >= 3 and TIMEOUT_DURATION_RE.match(words[1]):
        return 2
    if words[0] == "time" and len(words) >= 2 and not words[1].startswith("-"):
        return 1
    skip = time_wrapper_skip(words)
    if skip:
        return skip
    return 0


# /usr/bin/time's flags, split by whether they can write anywhere. `-f`/
# `--format` only shapes the line it prints to stderr, and `-p`/`-v`/`-q` and
# friends take no argument at all - none can name a file or run anything. The
# excluded ones are exactly the writers: `-o`/`--output` names a file to write
# the report into, and `-a`/`--append` decides how. Those must keep prompting,
# because a wrapper that can write a caller-named file is not transparent -
# `/usr/bin/time -o ~/.bashrc true` is a file write wearing a timer's name.
TIME_SAFE_VALUELESS_FLAGS = {"-p", "--portability", "-v", "--verbose", "-q", "--quiet"}
TIME_SAFE_FORMAT_FLAGS = {"-f", "--format"}


def time_wrapper_skip(words):
    """How many leading words `/usr/bin/time [flags]` occupies, or 0.

    Split out from the bare `time` case above because the shapes differ in
    two ways at once: the binary is spelled as an absolute path, and it is
    almost always carrying `-f "<format>"`, since a format string is the only
    reason to reach for /usr/bin/time over the shell builtin. Both had to be
    accepted together or neither was worth accepting.

    Flags are an explicit allowlist, never "skip anything starting with -",
    for the same reason git's globals are (see GIT_SAFE_GLOBAL_FLAGS): the
    value-taking ones are precisely the dangerous ones. `-f` is allowed with
    its value because a format string is printed, not executed."""
    if words[0] not in ("/usr/bin/time", "/bin/time"):
        return 0
    index = 1
    while index < len(words):
        word = words[index]
        if word in TIME_SAFE_VALUELESS_FLAGS:
            index += 1
            continue
        if word in TIME_SAFE_FORMAT_FLAGS and index + 1 < len(words):
            index += 2
            continue
        if word.startswith("--format="):
            index += 1
            continue
        break
    # A wrapper with nothing left to wrap is not a wrapper, and a next word
    # that is still a flag is one this allowlist did not recognise.
    if index >= len(words) or words[index].startswith("-"):
        return 0
    return index


def verb_of(words):
    skip = transparent_wrapper_skip(words)
    if skip:
        return verb_of(words[skip:])
    if words[0] == "git":
        idx = 1
        # Skip git's value-less global options before reading the subcommand,
        # so `git --no-pager diff` resolves to the already-trusted `git diff`
        # verb (same spirit as the -C skip below). Every flag here takes no
        # argument and cannot inject an executable or redirect how a
        # subcommand is resolved. This is deliberately an explicit allowlist,
        # NOT a blanket "skip anything starting with -": the value-taking
        # globals are exactly the dangerous ones and must keep prompting -
        # `-c <name=value>` can set core.pager/alias.* to an arbitrary command
        # (code execution), and `--exec-path`/`--git-dir`/`--work-tree`/
        # `--namespace`/`--config-env`/`-C` redirect where git runs or what it
        # touches. None of those are skipped here, so a git invocation
        # carrying one still falls through to a real prompt.
        while idx < len(words) and words[idx] in GIT_SAFE_GLOBAL_FLAGS:
            idx += 1
        if idx < len(words) and words[idx] == "-C" and idx + 1 < len(words):
            idx += 2
        return f"git {words[idx]}" if idx < len(words) else words[0]
    if words[0] == "node" and len(words) >= 2:
        # For a dispatcher script, fold the subcommand into the verb (see
        # NODE_DISPATCHER_SCRIPTS) so per-subcommand `:*` rules can match.
        # Only when the third word is an actual subcommand, not a flag: a
        # leading '-' keeps the 2-word verb so a flag can never masquerade as
        # a trusted subcommand. This only ever makes the verb *more* specific,
        # so it can't widen trust - it just enables a narrower allow rule.
        # Recognised via dispatcher_script_is, NOT bare set membership, so an
        # absolute path folds too. Bare membership left `node
        # /abs/path/scripts/r.mjs <fn>` as the 2-word verb `node
        # /abs/path/scripts/r.mjs`, which a `:*` rule on that path would have
        # matched for EVERY function - the opposite of the per-function grant
        # this fold exists to enable.
        if (
            dispatcher_script_is(words[1])
            and len(words) >= 3
            and not words[2].startswith("-")
        ):
            # A handful of commands take the function they act on as their
            # FOURTH word (DISPATCHER_COMMANDS_FN_NAMED). For those the third
            # word is the same for every call, so a 3-word verb collapses them
            # all together and a rule can only grant the command for every
            # function at once - giving back exactly what the per-function
            # grants exist to withhold. Folding one word further is what makes
            # `<command> <fn>` grantable one function at a time.
            # Both spellings of this repo's own dispatcher fold to the
            # relative one, so a rule naming it matches either - see
            # dispatcher_script_canonical.
            script = dispatcher_script_canonical(words[1])
            if (
                words[2] in DISPATCHER_COMMANDS_FN_NAMED
                and len(words) >= 4
                and not words[3].startswith("-")
            ):
                return f"{words[0]} {script} {words[2]} {words[3]}"
            return f"{words[0]} {script} {words[2]}"
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
    -delete`) ride in unexamined. With no '+' at all, a trailing ';'
    terminator (from `\\;` or `';'`, which now survives as its own literal
    ';' token since the separator-sentinel change) is accepted and dropped
    only when it immediately follows '{}'; after that '{}' must be the
    literal last word, so anything else trailing '{}' isn't legitimate
    -exec syntax this function can vouch for. The remaining words' own verb (via verb_of, so 'git
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
        # find's -exec terminator ';' (written `\;` or `';'`) now survives as
        # its own literal ';' word token (the separator-sentinel change means a
        # quoted/escaped ';' is no longer mis-classified as a statement
        # separator). Accept and drop it, but only immediately after '{}' -
        # find's own syntax rule - so nothing else can trail the clause
        # unexamined.
        if exec_words[-1] == ";":
            if len(exec_words) < 2 or exec_words[-2] != "{}":
                return False
            exec_words = exec_words[:-1]
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


MKDIR_SAFE_FLAG_CHARS = set("pv")


def is_safe_claude_temp_mkdir(words):
    """Exact-shape exception for `mkdir`, same posture as
    is_safe_claude_temp_rm: every non-flag argument must resolve to a path
    strictly inside a Claude-owned /tmp directory
    (CLAUDE_TEMP_RM_PREFIXES). Flags are checked a token at a time against
    MKDIR_SAFE_FLAG_CHARS ('p', 'v' only) and any long option fails closed,
    so an unanticipated flag can't widen this - notably `-m <mode>`, which
    takes a value and would let a permission mode ride along.

    Creating a directory writes no file content and destroys nothing, so
    this is the mildest of the scratchpad exceptions - but `mkdir` is still
    never a blanket-trusted verb, because outside the scratchpad it can
    litter arbitrary paths (and `mkdir -p /a/b/c` silently creates a whole
    chain). Trust is earned by the path, exactly as for rm.

    Why this exists: `Bash(mkdir -p /tmp/claude-<uid>/<repo>/:*)` sat in
    permissions.allow but could never match, because verb_of() returns only
    words[0] ('mkdir') for a non-git/non-node command - so the multi-word
    verb the rule names is not a key any lookup ever produces, and every
    scratchpad mkdir prompted anyway."""
    if not words or words[0] != "mkdir":
        return False
    paths = []
    for word in words[1:]:
        if word.startswith("-"):
            flag_chars = word[1:]
            if not flag_chars or any(
                c not in MKDIR_SAFE_FLAG_CHARS for c in flag_chars
            ):
                return False
            continue
        paths.append(word)
    if not paths:
        return False
    return all(is_safe_claude_temp_path(p) for p in paths)


MV_SAFE_FLAG_CHARS = set("vfn")


def is_safe_claude_temp_mv(words):
    """Exact-shape exception for `mv`, same posture as
    is_safe_claude_temp_rm - with the extra requirement that there be at
    least TWO non-flag arguments and that EVERY one of them (sources and
    destination alike) sit strictly inside a Claude-owned /tmp directory.
    That two-sided check is the whole point: a one-sided version would let
    `mv <scratchpad file> /etc/cron.d/x` plant a file anywhere, or
    `mv /home/j/repos/love/js/bible.mjs <scratchpad>` quietly remove real
    source from the repo. Requiring both ends keeps the move contained to
    a directory nothing but Claude Code tooling writes to.

    Flags are checked a token at a time against MV_SAFE_FLAG_CHARS ('v',
    'f', 'n') and any long option fails closed - notably `-t <dir>`, which
    takes the destination as a flag value and would move the destination
    out of the positional list this function checks.

    Same origin as is_safe_claude_temp_mkdir: the
    `Bash(mv /tmp/claude-<uid>/<repo>/:*)` rule was unreachable through
    verb_of, so scratchpad moves prompted despite the rule."""
    if not words or words[0] != "mv":
        return False
    paths = []
    for word in words[1:]:
        if word.startswith("-"):
            flag_chars = word[1:]
            if not flag_chars or any(c not in MV_SAFE_FLAG_CHARS for c in flag_chars):
                return False
            continue
        paths.append(word)
    if len(paths) < 2:
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


SCRIPTS_TEMP_DIR = os.path.join(REPO_ROOT, "scripts", "temp") + os.sep


SCRIPTS_TEMP_RELATIVE_DIR = os.path.join("scripts", "temp") + os.sep

# One plain name inside scripts/temp, glob characters allowed. The shell's
# own rule is what makes this safe rather than a guess about what the pattern
# matches: a glob with no '/' in it expands only within the one directory it
# sits in, so every file this can name is already inside scripts/temp - the
# same set the literal form was confined to. '/' is deliberately absent from
# the class, which is simultaneously what blocks scripts/temp/nested/x and
# what stops a pattern reaching out of the directory.
SAFE_TEMP_BASENAME_RE = re.compile(r"^[A-Za-z0-9_.*?\[\]-]+$")

GLOB_CHARS = "*?["


def safe_temp_basename_is(basename):
    """True iff `basename` is one name inside scripts/temp that no shell can
    expand outside it.

    Two refusals on top of the character class, both closing near-misses
    rather than real holes - `rm` itself declines to remove `.`/`..` and
    declines a directory without -r, so neither reached a deletion. They are
    refused here anyway, because the property this function is supposed to
    guarantee should be true on its own terms and not by leaning on what the
    command it is guarding happens to do next:

    - A pattern must not begin with '.'. The one exception to "globs never
      match '.' or '..'" is a pattern that starts with a dot itself, so `.*`
      and `..*` both name the PARENT directory. A literal dotfile is still
      fine; only a pattern is refused.
    - '**' is refused, so "direct child only" stays literally true. Under
      globstar `scripts/temp/**` descends into subdirectories - harmless,
      since everything down there is equally disposable, but it would quietly
      make the stated invariant false, and an invariant nobody can trust is
      worse than a narrower rule."""
    if not SAFE_TEMP_BASENAME_RE.match(basename):
        return False
    globbed = any(c in basename for c in GLOB_CHARS)
    if globbed and basename.startswith("."):
        return False
    if "**" in basename:
        return False
    return True


def is_safe_scripts_temp_path(path):
    """True iff `path` is a plain, already-normalized path to a file directly
    inside a `scripts/temp/` throwaway directory - written either as this
    repo's own absolute path or as the bare relative `scripts/temp/<file>`.
    Same character-allowlist + normpath-equality checks as
    is_safe_verify_html_path (blocking '../' traversal and '//' collapsing),
    plus a direct-child check so this can't reach a nested subdirectory.
    Unlike is_safe_verify_html_path there's no basename pattern: scripts/temp/
    is gitignored and holds nothing but disposable scratch files, so the
    directory confinement is itself the whole safety boundary.

    The relative spelling is accepted because it is the one a command run
    from a repo root actually uses, and requiring the absolute form bought no
    safety - it only bought a prompt. What the relative form gives up is
    knowing WHICH repo's scripts/temp is meant, since it resolves against the
    working directory; that is worth nothing here, because scripts/temp is
    gitignored scratch space in every repo by convention, so any directory
    this can name holds only disposable files. What it does NOT give up is
    the confinement: normpath equality still refuses `scripts/temp/../../x`,
    and the direct-child check still refuses a nested subdirectory."""
    if os.path.normpath(path) != path:
        return False
    if path.startswith(SCRIPTS_TEMP_DIR):
        directory = SCRIPTS_TEMP_DIR
    elif path.startswith(SCRIPTS_TEMP_RELATIVE_DIR):
        directory = SCRIPTS_TEMP_RELATIVE_DIR
    else:
        return False
    # Everything after the fixed directory prefix must be one plain name.
    # Checking the remainder rather than the whole path is what lets the
    # basename carry glob characters while the prefix stays literal - and it
    # is also the direct-child check, since a '/' is not in the class, so
    # scripts/temp/nested/x.mjs fails here rather than needing a separate
    # test. The prefix itself is a constant, never caller text.
    basename = path[len(directory):]
    return safe_temp_basename_is(basename)


def is_safe_scripts_temp_rm(words):
    """Exact-shape exception for `rm`, sibling of is_safe_verify_html_rm:
    file-only removal (same 'v'/'f'-only flag restriction) where every
    argument passes is_safe_scripts_temp_path. Cleans up the disposable
    one-off scripts that live under scripts/temp/."""
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
    return all(is_safe_scripts_temp_path(p) for p in paths)


GIT_RM_TMP_BASENAME_RE = re.compile(r"^(?:_tmp_|claude_tmp_)[A-Za-z0-9_.-]+$")


def is_safe_git_rm_tmp(words):
    """Exact-shape exception for `git rm <files...>`, matching either of
    two disposable-scratch-script naming conventions: the user's own
    '_tmp_' (e.g. '_tmp_codemod.mjs') or Claude's 'claude_tmp_' (e.g.
    'claude_tmp_deasync_test_leaf.mjs') - the latter exists specifically
    because a leading underscore trips a real, pre-existing crash in
    function_name_to_acronym (its own code comment documents the failure:
    empty first segment when a name starts with '_') the moment such a
    file round-trips through function_transform, so Claude-created scratch
    files use a prefix without one instead. Unlike is_safe_claude_temp_rm/is_safe_verify_html_rm,
    this doesn't trust a fixed Claude-owned directory - it trusts a
    basename convention instead, which is a weaker guarantee (a real file
    anywhere in the repo could coincidentally start with '_tmp_'), so this
    is kept deliberately stricter than those in every other dimension: no
    flags at all are accepted (not even 'v'/'f' - notably no -r/-R, so this
    can never remove a directory, and no -f/--cached, so `git rm`'s own
    refusal to touch a file with uncommitted local modifications stays
    intact as a real safety net rather than being bypassed), no absolute
    paths, and no '../' traversal, applied to every argument's basename.

    Traversal is checked by rejecting any '..' path *segment* directly,
    not just via normpath-equality like the other rm exceptions in this
    file - those all additionally require an absolute-path prefix match
    against a fixed directory, which by itself already rules out a
    leading '..' (an absolute path can't start with one). Paths here are
    relative (that's how `git rm` is actually invoked), so a leading
    '../_tmp_x.mjs' is already in normalized form - normpath() leaves it
    unchanged since there's nothing before the '..' for it to cancel
    against - and would otherwise slip through unnoticed."""
    if len(words) < 3 or words[0] != "git" or words[1] != "rm":
        return False
    paths = words[2:]
    for p in paths:
        if p.startswith("-"):
            return False
        if not SAFE_SCRATCHPAD_PATH_RE.match(p):
            return False
        if os.path.isabs(p):
            return False
        if os.path.normpath(p) != p:
            return False
        if any(part == ".." for part in p.split("/")):
            return False
        if not GIT_RM_TMP_BASENAME_RE.match(os.path.basename(p)):
            return False
    return True


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


# A query string and a fragment are allowed after the path: the dev pages are
# addressed that way (`?chapter=MRK01`, `#c=JAS01,v=3`), and neither can turn a
# status probe into a general fetch - the scheme is still fixed to plain http
# and the host still pinned to localhost, which is what bounds this template.
CURL_LOCALHOST_URL_RE = re.compile(
    r"^http://(localhost|127\.0\.0\.1)(:[0-9]{1,5})?(/[A-Za-z0-9_./-]*)?"
    r"(\?[A-Za-z0-9_.,=&%/+-]*)?(#[A-Za-z0-9_.,=&%/+-]*)?$"
)

CURL_WRITE_OUT_VAR_RE = re.compile(r"%\{[a-z_]+\}")
CURL_WRITE_OUT_ALLOWED_VARS = {
    "http_code", "time_total", "size_download", "url_effective",
}
CURL_WRITE_OUT_LITERAL_RE = re.compile(r"^[A-Za-z0-9_ :./\\-]*$")


def is_safe_curl_write_out(fmt):
    """True iff `fmt` (curl's -w/--write-out format string) only
    references curl's own read-only, post-transfer metadata fields
    (CURL_WRITE_OUT_ALLOWED_VARS - none of which curl can populate from
    anything other than the completed request/response it already made,
    so none of them are a channel for exfiltrating anything beyond what
    is_safe_curl_status_check already establishes is safe to request) plus
    plain literal text. There's no code-execution or file-access risk in
    the literal text itself either way - curl only ever prints this
    string, it never shell-interprets it - so this check exists for
    tidiness/narrowness rather than being load-bearing the way the URL and
    flag-shape checks in is_safe_curl_status_check are."""
    remainder = CURL_WRITE_OUT_VAR_RE.sub("", fmt)
    if not CURL_WRITE_OUT_LITERAL_RE.match(remainder):
        return False
    return all(
        v[2:-1] in CURL_WRITE_OUT_ALLOWED_VARS
        for v in CURL_WRITE_OUT_VAR_RE.findall(fmt)
    )


def is_safe_curl_status_check(words):
    """Recognize exactly one template: `curl -s -o /dev/null -w FORMAT
    URL`, used to probe the HTTP status of this project's own local dev
    server rather than trusted by verb prefix - `curl` otherwise grants no
    trust at all (no Bash(curl:*) rule exists), since it's the first tool
    in this file capable of outbound network requests and, with other
    flags, arbitrary file write (-o/-O) or upload (-T/--upload-file,
    -d/--data, -F). This template closes all of those off instead of
    trying to blacklist them individually:

      - the URL (last word) must match CURL_LOCALHOST_URL_RE - scheme
        fixed to plain http, host fixed to localhost/127.0.0.1 only
        (never a real network destination), so this can never be turned
        into a general-purpose fetch tool;
      - '-o /dev/null' must appear verbatim - the response body is always
        discarded, so nothing the server returns can be written to a real
        file or otherwise escape via the response;
      - '-w FORMAT' must appear with FORMAT passing is_safe_curl_write_out;
      - '-s' (silent - suppresses curl's own progress meter) must appear;
      - no other words are permitted at all - this is an exact 7-word
        shape (curl, -s, -o, /dev/null, -w, FORMAT, URL), not a flag scan,
        so any additional or reordered flag (-X, --data, -T,
        --upload-file, -F, -K, a second -o pointing at a real file, etc.)
        falls through to a real prompt rather than being pattern-matched
        loosely."""
    if len(words) != 7:
        return False
    if words[0:5] != ["curl", "-s", "-o", "/dev/null", "-w"]:
        return False
    if not is_safe_curl_write_out(words[5]):
        return False
    return bool(CURL_LOCALHOST_URL_RE.match(words[6]))


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


def sandbox_read_path_near_miss(words):
    """A command that clearly ATTEMPTS the sandboxed-node throwaway - it opens
    with the exact `unshare --net --map-root-user -- node --permission
    --allow-fs-read=<...>` intent-prefix - but is NOT one of the two sanctioned
    forms (is_safe_sandboxed_node_eval / is_safe_sandboxed_node_script). Returns
    the --allow-fs-read value so main() can DENY with the canonical template
    instead of letting a correctable slip fall through to a human prompt (a
    `silent` verdict). This catches every near-miss in one net: a parent/other
    read path, an ABSOLUTE script path (recognizer wants a relative
    scripts/temp/<name>.mjs), a non-normalized path, a stray extra arg.

    Returns None when it isn't this template at all (so a totally different
    command is left to normal handling) and when it IS a sanctioned form (those
    are already allowed by is_safe before main() reaches here, and excluded here
    too so this never shadows them). The `--net` requirement is part of the
    prefix, so the no-`--net` variant - a real sandbox weakening, not a typo -
    is deliberately NOT treated as a simple near-miss."""
    if len(words) < 7:
        return None
    if words[0:6] != ["unshare", "--net", "--map-root-user", "--", "node", "--permission"]:
        return None
    if not words[6].startswith("--allow-fs-read="):
        return None
    if is_safe_sandboxed_node_eval(words) or is_safe_sandboxed_node_script(words):
        return None
    return words[6][len("--allow-fs-read="):]


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
        # Strip leading `VAR=...` assignment words. An assignment executes no
        # verb of its own - it just sets a shell/environment variable; any
        # `$(...)` in its right-hand side was already validated during
        # tokenize. A simple command that is *only* assignments
        # (apps="...", imp=$(...)) is therefore safe on its own. Assignments
        # to execution-influencing names (PATH, LD_*, IFS, ...) are the one
        # exception - they fail closed so they can't quietly change how a
        # following trusted verb is resolved or what it loads.
        while words:
            m = ASSIGN_RE.match(words[0])
            if not m:
                break
            if is_dangerous_assignment_name(m.group(1)):
                return False
            words = words[1:]
        if not words:
            continue
        if words[0] in RESERVED_WORDS:
            raise Unsupported(f"unsupported nested keyword {words[0]!r}")
        if words[0] in SAFE_BUILTINS:
            continue
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
            and not is_safe_claude_temp_mkdir(words)
            and not is_safe_claude_temp_mv(words)
            and not is_safe_verify_html_rm(words)
            and not is_safe_scripts_temp_rm(words)
            and not is_safe_git_rm_tmp(words)
            and not is_safe_curl_status_check(words)
        ):
            return False
    return found_command


def check_for_loop(tokens, safe_verbs, safe_exact_commands):
    """Validate a single `for VAR in LIST ; do BODY done` loop. The body may
    itself contain nested for/if blocks (and break/continue), so it's handed
    to check_statements, which recurses - this no longer rejects nested
    control flow. It only verifies the header shape and locates the matching
    'done' (depth-aware over nested openers/closers so a nested block's own
    'done'/'fi' isn't mistaken for this loop's), then every simple command in
    BODY still has its verb checked by that recursion."""
    if len(tokens) < 5 or tokens[1] in RESERVED_WORDS or tokens[2] != "in":
        raise Unsupported("malformed for-loop")
    i = 3
    list_words = []
    while i < len(tokens) and tokens[i] != SEP_SEMI:
        list_words.append(tokens[i])
        i += 1
    if not list_words or i >= len(tokens) or tokens[i] != SEP_SEMI:
        raise Unsupported("malformed for-loop: missing separator before do")
    i += 1
    if i >= len(tokens) or tokens[i] != "do":
        raise Unsupported("malformed for-loop: expected 'do'")
    i += 1
    body_start = i
    depth = 1  # the open 'for'
    while i < len(tokens):
        t = tokens[i]
        if t in BLOCK_OPENERS:
            depth += 1
        elif t in BLOCK_CLOSERS:
            depth -= 1
            if depth == 0:
                break
        i += 1
    if i >= len(tokens) or tokens[i] != "done":
        raise Unsupported("malformed for-loop: missing 'done'")
    if i + 1 != len(tokens):
        raise Unsupported("trailing content after 'done'")
    return check_statements(tokens[body_start:i], safe_verbs, safe_exact_commands)


def check_while(tokens, safe_verbs, safe_exact_commands):
    """Validate a single `while COND ; do BODY done` loop (`until` too - the
    shapes are identical and only the exit sense differs, which is irrelevant
    to whether the commands inside are trusted).

    COND is checked exactly like BODY: it is a command list that really runs,
    so `while rm -rf /; do ls; done` must not ride in on a trusted body. Both
    are handed to check_statements, which recurses, so nested blocks work the
    same as inside a for-loop."""
    i = 1
    depth = 1  # the open 'while'/'until'
    cond_start = i
    while i < len(tokens):
        t = tokens[i]
        if t in BLOCK_OPENERS:
            depth += 1
        elif t in BLOCK_CLOSERS:
            depth -= 1
        elif t == "do" and depth == 1:
            break
        i += 1
    if i >= len(tokens) or tokens[i] != "do":
        raise Unsupported("malformed while-loop: expected 'do'")
    cond = tokens[cond_start:i]
    while cond and cond[-1] == SEP_SEMI:
        cond = cond[:-1]
    if not cond:
        raise Unsupported("malformed while-loop: empty condition")
    i += 1
    body_start = i
    depth = 1
    while i < len(tokens):
        t = tokens[i]
        if t in BLOCK_OPENERS:
            depth += 1
        elif t in BLOCK_CLOSERS:
            depth -= 1
            if depth == 0:
                break
        i += 1
    if i >= len(tokens) or tokens[i] != "done":
        raise Unsupported("malformed while-loop: missing 'done'")
    if i + 1 != len(tokens):
        raise Unsupported("trailing content after 'done'")
    if not check_statements(cond, safe_verbs, safe_exact_commands):
        return False
    return check_statements(tokens[body_start:i], safe_verbs, safe_exact_commands)


def check_if(tokens, safe_verbs, safe_exact_commands):
    """Validate an `if … fi` conditional:
        if COND ; then BODY [ elif COND ; then BODY ]* [ else BODY ] fi
    The tokens between 'if' and 'fi' are split at the depth-0 'then'/'elif'/
    'else' keywords (depth-aware over nested for/if blocks, so a nested
    block's own then/else/do don't count as this if's), the keyword sequence
    is checked to form a well-formed conditional, and every condition and
    every branch is validated with check_statements. Conditions run real
    commands just like branches do, so their verbs are checked the same way;
    break/continue in a branch are trusted via SAFE_BUILTINS. Any malformed
    shape - or an untrusted verb anywhere - falls through (Unsupported / a
    False return) to a real prompt."""
    if len(tokens) < 4 or tokens[0] != "if" or tokens[-1] != "fi":
        raise Unsupported("malformed if: missing 'if'/'fi'")
    segments = []  # (keyword, [tokens]) in source order
    current_kw, current, depth = "if", [], 0
    for t in tokens[1:-1]:
        if t in BLOCK_OPENERS:
            depth += 1
            current.append(t)
        elif t in BLOCK_CLOSERS:
            depth -= 1
            current.append(t)
        elif depth == 0 and t in ("then", "elif", "else"):
            segments.append((current_kw, current))
            current_kw, current = t, []
        else:
            current.append(t)
    segments.append((current_kw, current))

    # Keyword sequence must be: if, then, (elif, then)*, [else].
    i, n = 0, len(segments)
    branches = []  # condition/body token lists to validate, in order
    if segments[i][0] != "if":
        raise Unsupported("malformed if")
    branches.append(segments[i][1])
    i += 1
    if i >= n or segments[i][0] != "then":
        raise Unsupported("malformed if: expected 'then'")
    branches.append(segments[i][1])
    i += 1
    while i < n and segments[i][0] == "elif":
        branches.append(segments[i][1])
        i += 1
        if i >= n or segments[i][0] != "then":
            raise Unsupported("malformed if: expected 'then' after 'elif'")
        branches.append(segments[i][1])
        i += 1
    if i < n and segments[i][0] == "else":
        branches.append(segments[i][1])
        i += 1
    if i != n:
        raise Unsupported("malformed if: unexpected keyword sequence")

    found_command = False
    for seg in branches:
        if not seg:
            raise Unsupported("malformed if: empty condition or branch")
        if not check_statements(seg, safe_verbs, safe_exact_commands):
            return False
        found_command = True
    return found_command


def check_statements(tokens, safe_verbs, safe_exact_commands):
    """Validate a statement sequence - either a whole top-level command line
    or the body of a for/if block. split_blocks() breaks it into statements
    (splitting on ';'/'|'/'&&'/'||', but keeping each 'for … done' loop and
    'if … fi' conditional whole); each statement is then a for-loop, an
    if-conditional, or a single simple command. for/if bodies recurse back
    into this function, so blocks nest to any depth while every simple
    command's verb, wherever it sits, is still independently checked. Returns
    True iff at least one command was found and all are trusted; returns False
    the moment an untrusted verb appears; raises Unsupported for any construct
    outside this grammar."""
    found_command = False
    for group in split_blocks(tokens):
        if not group:
            continue
        found_command = True
        if group[0] == "for":
            if not check_for_loop(group, safe_verbs, safe_exact_commands):
                return False
        elif group[0] in ("while", "until"):
            if not check_while(group, safe_verbs, safe_exact_commands):
                return False
        elif group[0] == "if":
            if not check_if(group, safe_verbs, safe_exact_commands):
                return False
        elif group[0] in RESERVED_WORDS:
            raise Unsupported(f"unsupported construct {group[0]!r}")
        elif not check_simple_commands(group, safe_verbs, safe_exact_commands):
            return False
    return found_command


def is_safe(command, safe_verbs, safe_exact_commands, outer_vars=None):
    # A `VAR=<literal path>` assignment belongs to the whole command line, so
    # the map is carried INTO each `$(...)` as well: `S=/tmp/...; echo "$(wc -c
    # < $S/f)"` reads the same file whether or not a substitution wraps it, and
    # validating the inner text alone would leave $S unresolved and prompt.
    # Resolution only ever adds recognition - a resolved path still has to pass
    # the same charset and scratchpad checks, so nothing widens.
    vars_here = dict(outer_vars or {})
    vars_here.update(_literal_var_map(command))

    def subst_validator(inner):
        # A `$(...)` is trusted iff its inner command is itself entirely
        # made of already-trusted verbs - exactly the same requirement every
        # other link in a chain must meet. An inner command this hook can't
        # confidently parse (Unsupported) is treated as untrusted rather than
        # letting the exception propagate, so the enclosing command falls
        # through to a real prompt.
        try:
            return is_safe(inner, safe_verbs, safe_exact_commands, vars_here)
        except Unsupported:
            return False

    tokens = tokenize(command, subst_validator, vars_here)
    if not tokens:
        return False
    return check_statements(tokens, safe_verbs, safe_exact_commands)


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


NODE_EVAL_FLAGS = ("-e", "--eval", "-p", "--print")


def is_node_eval_flag(word):
    """True iff `word` is a node flag that evaluates a script string given on
    the command line (`-e`/`--eval`) or evaluates-and-prints one
    (`-p`/`--print`), including the glued `--eval=CODE`/`--print=CODE` forms.
    This is the arbitrary-code surface `node` exposes with no script file -
    see find_raw_node_eval."""
    return word in NODE_EVAL_FLAGS or word.startswith("--eval=") or word.startswith("--print=")


def _strip_command_prefixes(words):
    """Drop leading `VAR=...` assignments and transparent `xargs`/`timeout
    <dur>`/`time` wrappers from a simple command's word list - the same
    unwrapping verb_of applies, via the same transparent_wrapper_skip - so
    the real command word lands at words[0]."""
    while words:
        if ASSIGN_RE.match(words[0]):
            words = words[1:]
            continue
        skip = transparent_wrapper_skip(words)
        if skip == 0:
            break
        words = words[skip:]
    return words


def find_raw_node_eval(command):
    """True iff `command` runs a raw (un-sandboxed) `node` with an eval flag,
    so main() can DENY it with an instructive message instead of letting it
    fall through to a human approval prompt. The one sandboxed template that
    IS allowed (is_safe_sandboxed_node_eval) never reaches here - is_safe()
    has already returned "allow" for it before main() calls this.

    Detection reuses the same quote-aware tokenizer, so a literal 'node -e'
    inside a quoted argument (e.g. `grep 'node -e' file`) is NOT matched -
    only an actual `node` command word carrying an eval flag is. Leading
    `VAR=...` assignments and transparent `xargs`/`timeout <dur>` prefixes are
    unwrapped the same way verb_of does. Any command the tokenizer can't parse
    (redirection, subshells, `$(...)`, backgrounding) raises Unsupported and is
    reported as "not detected" - it falls through to normal handling rather
    than being force-denied on a guess."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return False
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if words and words[0] == "node" and any(is_node_eval_flag(w) for w in words[1:]):
            return True
    return False


NODE_EVAL_DENY_REASON = (
    "Raw `node -e` can't be approved here - please don't hand the human a "
    "prompt to rubber-stamp. Two supported paths instead:\n"
    "  - read-only one-off (auto-approved, no prompt):\n"
    "    unshare --net --map-root-user -- node --permission "
    f"--allow-fs-read={REPO_ROOT} -e '<script>'\n"
    "  - anything that writes, or that you'd run more than once: add a "
    "committed function to scripts/r.mjs and run it as `node scripts/r.mjs "
    "<fn> <args>` (ask the human to allow-list that one function once via a "
    "Bash(node scripts/r.mjs <fn>:*) rule; after that, any args flow through "
    "with no prompt).\n"
    "See CLAUDE.md - 'Throwaway node - never raw `node -e`'."
)


PYTHON_PROGRAMS = ("python", "python2", "python3")


def find_python_eval(command):
    """True iff `command` runs `python`/`python2`/`python3` with a `-c` flag -
    arbitrary code from the command line, the exact analog of a raw `node -e`
    (find_raw_node_eval) and floored the same way so main() can DENY it with a
    redirect instead of handing the human a prompt. Without this floor, a `-c`
    is merely `silent` and becomes a bypass: blocked on `node -e`, a Claude
    could pivot to `python -c` and only get a prompt. python invoked on a script
    FILE (`python3 foo.py`) is a different surface and is deliberately left
    alone - the hook itself runs that way.

    Same quote-aware tokenizer and prefix-unwrapping as the node-eval floor, so
    a literal 'python3 -c' inside a quoted argument (e.g. `grep 'python3 -c'
    file`) is NOT matched, and a leading VAR=.../timeout wrapper is unwrapped.
    An unparseable command raises Unsupported. It used to fall through to
    normal handling rather than being force-denied on a guess, but a heredoc is
    exactly what makes a command unparseable, so that left the stdin spellings
    of the same eval uncovered - see find_stdin_program_unparsed, which is what
    that case is now asked."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return find_stdin_program_unparsed(command)
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if words and words[0] in PYTHON_PROGRAMS and "-c" in words[1:]:
            return True
        if words and words[0] in STDIN_PROGRAMS and "-" in words[1:]:
            return True
        if words and words[0] in SHELL_PROGRAMS and "-c" in words[1:]:
            return True
        if words and words[0] in SCRIPT_EVAL_PROGRAMS and "-e" in words[1:]:
            return True
    return False


# A shell handed `-c` is the widest arbitrary-execution seam there is: every
# floor above it - the dispatcher floor, the eval floors, the raw-git refusal -
# is a statement about a command line, and `sh -c '<anything>'` writes a fresh
# command line the guard never sees. It is floored with the rest rather than
# left to prompt, on the rule that anything which executes freely has to be
# narrowed to a safe shape first. A shell reached through `find -exec` is a
# different word position and keeps its existing answer; only a shell invoked
# as the command itself is caught here.
SHELL_PROGRAMS = ("sh", "bash", "zsh", "dash", "ksh")

# The same seam wearing two more names. Enumerating the interpreters matters
# more than covering any one of them: a floor that names a single program is a
# signpost to the next program, and the pivot from a blocked node to an
# unblocked python is the reason this family exists at all.
SCRIPT_EVAL_PROGRAMS = ("perl", "ruby")


# An interpreter reads its program from standard input in three spellings:
# an explicit `-` in place of a script name, a heredoc (`<<`), and a
# herestring (`<<<`). All three are `-c` with the code moved off the argument
# list, so the floor has to cover them or it only blocks the spelling it
# happens to name. This was a live bypass, not a theoretical one:
# `python3 - <<PY ... PY` was used to rewrite a repo file and reached the
# human as a prompt, because `<<` makes the command unparseable and an
# unparseable command was reported as "nothing found here".
STDIN_PROGRAMS = PYTHON_PROGRAMS + ("node",)

STDIN_PROGRAM_TEXT = re.compile(
    r"(?:^|[;&|]|\bxargs\b|\btimeout\s+\S+)\s*"
    r"(?:python3?|python2|node)\b"
    r"[^;&|]*?(?:<<<|<<|(?<=\s)-(?=\s|$))"
)


def find_stdin_program_unparsed(command):
    """True iff a command the tokenizer gave up on nonetheless shows an
    interpreter being handed its program on standard input.

    It is deliberately a text match, and deliberately reachable only after
    Unsupported. A command that parses is answered by tokens, where a quoted
    'python3 <<EOF' inside a grep pattern is plainly not an invocation; this
    fallback sees no such difference. Restricting it to what already failed to
    parse keeps that bluntness away from every command that could be read
    properly, and what it does reach was heading for a human prompt anyway, so
    the worst it can do is turn one prompt into a message Claude can act on."""
    return bool(STDIN_PROGRAM_TEXT.search(command))


# A heredoc whose output lands in a file is the shell writing a file, and the
# tools already do that better: Write for a new file, Edit for a change to an
# existing one. The difference that matters is failure. Edit names the text it
# expects to replace and fails loudly when a peer has moved it; a heredoc
# append is blind, so under several Claudes sharing one working directory it
# silently doubles a section or lands in a file that has moved on. It also
# always prompts, because a heredoc is unparseable, and the same append shape
# recurs constantly (sermon logs, memory notes) - a standing prompt for the one
# operation the tools were built for.
HEREDOC_FILE_WRITE_TEXT = re.compile(
    r"(?:(?:>>?\s*\S+|\btee\b)[^\n]*<<)|(?:<<[^\n]*>>?\s*\S+)"
)

QUOTED_SPAN_TEXT = re.compile(r"'[^']*'?|\"[^\"]*\"?")

HEREDOC_FILE_WRITE_DENY_REASON = (
    "Writing a file through a heredoc can't be approved here - use the Write "
    "tool for a new file, or the Edit tool to change an existing one.\n"
    "  - Edit states the text it is replacing, so when a peer has already "
    "changed that region it fails loudly instead of appending a second copy. "
    "A heredoc append cannot tell the difference.\n"
    "  - Several Claudes share this one working directory, so a blind append "
    "is how a memory note or a sermon log quietly ends up with the same entry "
    "twice.\n"
    "  - The tools never prompt for this; a heredoc always does, because a "
    "heredoc is not parseable, and this exact append shape recurs constantly.\n"
    "Redirecting a COMMAND's output to a file is untouched - this is only "
    "about a heredoc, where the text being written is already in your hands. "
    "See CLAUDE.md - 'Create that file with the `Write` tool, never "
    "`cat > ... <<EOF`'."
)


def find_heredoc_file_write(command):
    """True iff `command` feeds a heredoc into a file - `cat > f <<EOF`,
    `cat >> f <<EOF`, `tee f <<EOF`.

    Text-matched for the same reason as find_stdin_program_unparsed: a heredoc
    is what makes a command unparseable, so tokens are not available to answer
    with. Both halves are required - a redirect into a file AND a heredoc - so
    a bare `cat <<EOF` with nowhere to land keeps its existing answer, and so
    does an ordinary `<cmd> > file` with no heredoc in it.

    Two narrowings stand in for the tokenizer, and both are needed. Only the
    FIRST line is read, because that is where a heredoc's operator and its
    redirect must both appear, while the body below can say anything at all -
    including, in this repo, sermon text full of apostrophes. And quoted spans
    in that line are blanked first, so a command that merely quotes this shape
    (`grep 'cat >> f << EOF' notes.txt`, or a test loop passing the shape as an
    argument) is not mistaken for performing it. An unterminated quote is
    blanked to end of line, which is the safe direction: it hides a mention
    rather than inventing one."""
    first_line = command.split("\n")[0]
    unquoted = QUOTED_SPAN_TEXT.sub(" ", first_line)
    return bool(HEREDOC_FILE_WRITE_TEXT.search(unquoted))


PYTHON_EVAL_DENY_REASON = (
    "An interpreter handed code on the command line can't be approved here. "
    "That is one seam wearing many names, and all of them are floored the same "
    "way: `python -c`, `node -e`, `perl -e`, `ruby -e`, a shell's `sh -c` / "
    "`bash -c`, and the same code moved onto standard input instead "
    "(`python3 - <<PY`, `node -`, `python3 <<< '...'`). Each can shell out, "
    "write files, and reach the network, so none is ever auto-trusted - "
    "anything that executes freely has to be narrowed to a safe shape first. "
    "Four supported paths instead, best first:\n"
    "  - EDITING A FILE: use the Edit tool (or Write for a brand-new file). "
    "A script that rewrites a file is the wrong instrument for it - Edit fails "
    "loudly on a conflict where a scripted replace silently does nothing.\n"
    "  - WORK THE REPO SHOULD KNOW HOW TO DO: add a committed JS function and "
    "run it as `node scripts/ai.mjs <fn> <args>`. Repo functions beat scripting, "
    "and this repo's language is JS, not Python.\n"
    "  - inspecting or parsing text/JSON: use trusted verbs (grep, wc, head, "
    "sort) - e.g. a decision field is `grep -o '\"decision\": \"[a-z]*\"'`.\n"
    "  - a read-only one-off (auto-approved, no prompt): the sandboxed node "
    "throwaway, unshare --net --map-root-user -- node --permission "
    f"--allow-fs-read={REPO_ROOT} -e '<script>'.\n"
    "If none of those fit a genuine one-off, ask the human. See CLAUDE.md - "
    "'Throwaway node - never raw `node -e`'."
)


# Library functions that run arbitrary code/commands from their own
# arguments - shell-out (command_line_generic), `new Function` eval
# (eval_console_log_replace), or download-and-run remote code
# (firebase_storage_function_run_generic). Invoked *directly* as
# `node <dispatcher> <fn> <args>` they're `node -e` by another name, so they
# get the same floor treatment: denied even if allow-listed (the check runs
# before the allow decision in main). This does NOT touch internal use - a
# committed function that imports one and calls it with fixed arguments never
# reaches the command line, so it's unaffected.
#
# Imported, not duplicated: denied_dispatcher_functions.py is GENERATED from
# js/functions_command_seams.mjs (the source of truth), which is the same list
# the JS side fences its dispatchers against. Two hand-kept copies could only
# ever be checked for agreement after the fact; one source cannot disagree with
# itself. Regenerate with `node scripts/r.mjs python_mirrors_write`; drift fails
# `q` via python_mirrors_assert. An import of a literal rather than a runtime
# read, for the same reason as NODE_DISPATCHER_SCRIPTS above - a read that could
# fail would fail OPEN, and this is the floor. A missing module raises here.
from denied_dispatcher_functions import DENIED_DISPATCHER_FUNCTIONS


def find_denied_dispatcher_function(command):
    """If `command` directly invokes `node <dispatcher> <fn>` (any script in
    NODE_DISPATCHER_SCRIPTS, relative or absolute path) with <fn> in
    DENIED_DISPATCHER_FUNCTIONS, return that fn name so
    main() can DENY it; else None. Quote-aware like find_raw_node_eval, and
    leading assignments / xargs / timeout prefixes are unwrapped the same way;
    an unparseable command returns None and falls through to normal handling."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return None
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if (
            len(words) >= 3
            and words[0] == "node"
            and dispatcher_script_is(words[1])
            and words[2] in DENIED_DISPATCHER_FUNCTIONS
        ):
            return words[2]
    return None


# A function's own full name: lower snake_case, the shape every file under
# js/ is named. Anything else in the function-name slot (a $variable, a glob, a
# path) is a name this guard cannot resolve, so the dead-name floor abstains on
# it rather than guessing.
FUNCTION_NAME_TEXT = re.compile(r"^[a-z][a-z0-9_]*$")


def repos_function_names():
    """Every live function name across the sibling repos - one function per
    file, <repo>/js/<name>.mjs. The repos folder is REPO_ROOT's parent and the
    layout is functions_path(), so this reads the same set repos_names() and
    function_name_to_path_search() do, without running node. Returns None when
    nothing can be read, so the caller fails open instead of denying blind."""
    repos_folder = os.path.dirname(REPO_ROOT)
    try:
        repo_names = os.listdir(repos_folder)
    except OSError:
        return None
    names = set()
    for repo_name in repo_names:
        if repo_name == ".vscode":
            continue
        try:
            entries = os.listdir(os.path.join(repos_folder, repo_name, "js"))
        except OSError:
            continue
        for entry in entries:
            if entry.endswith(".mjs"):
                names.add(entry[: -len(".mjs")])
    if not names:
        return None
    return names


def alias_full_name(name):
    """The full function name an alias key points at, or None. ai.mjs refuses
    shorthand, so an alias arriving at this seam is a dead name whose fix is
    exact - name the function the alias currently points at."""
    try:
        with open(os.path.join(REPO_ROOT, "data", "aliases.json")) as handle:
            aliases = json.load(handle).get("aliases") or {}
    except (OSError, ValueError, AttributeError):
        return None
    full = aliases.get(name)
    if isinstance(full, str) and full:
        return full
    return None


def function_name_near_misses(name, live_names):
    """Up to three live names sharing at least two underscore-separated words
    with `name`, closest first (most words shared, then fewest words differing).
    A dead name is nearly always a real function misremembered, so the neighbours
    are the correction - naming them is what makes the deny self-serviceable."""
    words = set(name.split("_"))
    scored = []
    for live in live_names:
        live_words = set(live.split("_"))
        shared = len(words & live_words)
        if shared < 2:
            continue
        scored.append((-shared, len(live_words ^ words), live))
    scored.sort()
    return [live for _, _, live in scored[:3]]


def find_dead_dispatcher_function(command):
    """If `command` runs `node scripts/ai.mjs <fn>` for a plain function name no
    repo defines, return that name so main() can DENY it; else None.

    A dead name cannot succeed - the dispatcher throws on it - so a prompt costs
    the human a click and still fails. Denying instead hands the correction back
    into the agent loop, where the near-miss live names can actually be used.
    Safe as a floor: it only ever fires on a command that was going to fail, and
    a dangling allow rule (a grant left behind by a deleted function) should not
    outrank that. Fails open everywhere - unparseable command, unresolvable
    name, unreadable repos folder all return None."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return None
    candidates = []
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if (
            len(words) >= 3
            and words[0] == "node"
            and ai_script_is(words[1])
            and FUNCTION_NAME_TEXT.match(words[2])
        ):
            candidates.append(words[2])
    if not candidates:
        return None
    live_names = repos_function_names()
    if live_names is None:
        return None
    for name in candidates:
        if name not in live_names:
            return name
    return None


def dead_dispatcher_deny_reason(name, live_names):
    aliased = alias_full_name(name)
    if aliased:
        return (
            f"`{name}` is an alias key, not a function name, and scripts/ai.mjs "
            f"takes full names only. It currently points at `{aliased}` - run "
            f"`node scripts/ai.mjs {aliased} <args>` instead. (Aliases are for "
            "the human at the keyboard; a permission rule is matched as literal "
            "text, so granting an alias would follow it wherever it is later "
            "repointed. See CLAUDE.md - 'Two seams'.)"
        )
    near = function_name_near_misses(name, live_names or set())
    suggestion = (
        "Closest live names: " + ", ".join(near) + "."
        if near
        else "Find the real name with `node scripts/ai.mjs functions_search "
        "<substrings>` (AND-of-substrings over function names)."
    )
    return (
        f"No function named `{name}` exists in any repo, so this command would "
        f"throw rather than do anything. {suggestion} If you meant to create it, "
        f"run `node scripts/ai.mjs function_new {name}` first - and if you "
        "already did, run the create as its own call so the file exists before "
        "this one is checked."
    )


def find_non_ai_scripts_invocation(command):
    """If `command` directly runs `node scripts/<X>` for any script under the
    repo's scripts/ directory other than ai.mjs, return that path so main() can
    DENY it; else None. The whole directory is fenced to ai.mjs: r.mjs/rl.mjs/
    g.mjs are the human's function seams, and p.mjs/u.mjs/the config files are
    the human's utilities - Claude runs repo work only through ai.mjs.

    Matches the same `node <script> ...` shape as the eval floor: the script in
    word position 1 after the usual prefix-strip (assignments, time/timeout/
    xargs). This deliberately does NOT catch the sanctioned sandboxed throwaway
    (`unshare ... node --permission ... scripts/temp/x.mjs`), whose script arg
    is not in position 1 - that path stays allowed by is_safe_sandboxed_node_*.
    An unparseable command returns None and falls through to normal handling."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return None
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if (
            len(words) >= 2
            and words[0] == "node"
            and scripts_path_is(words[1])
            and not ai_script_is(words[1])
        ):
            return words[1]
    return None


def non_ai_scripts_deny_reason(script):
    return (
        f"`node {script}` is refused: Claude runs the repo only through "
        "scripts/ai.mjs, which takes full function names (no alias/acronym) and "
        "prints lossless JSON. Everything else under scripts/ - r.mjs/rl.mjs/"
        "g.mjs and the human's utilities - is the human's, not Claude's. If this "
        "was going to run a repo function, run `node scripts/ai.mjs "
        "<full_function_name> <args>` instead. (Throwaway node goes through the "
        "sandboxed unshare form in CLAUDE.md.) See CLAUDE.md - 'Two seams: "
        "ai.mjs for Claude, r.mjs for the human'."
    )


def find_sandbox_path_near_miss(command):
    """True (returns the offending --allow-fs-read value) iff any statement in
    `command` attempts the sandboxed-node throwaway but isn't a sanctioned form
    (see sandbox_read_path_near_miss), so main() can DENY it with the canonical
    template; else None. Quote-aware and prefix-unwrapping like the other floor
    finders; an unparseable command returns None and falls through to normal
    handling. Returns "" (still not None) if the flag value is empty - the deny
    still fires; main() only tests `is not None`."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return None
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        path = sandbox_read_path_near_miss(words)
        if path is not None:
            return path
    return None


def sandbox_path_near_miss_deny_reason():
    return (
        "Sandboxed node: this opens like the throwaway sandbox but isn't the "
        "exact sanctioned shape, so the guard won't auto-approve it. The read "
        f"path must be exactly {REPO_ROOT} (not a parent or other dir), and a "
        "script must be a RELATIVE scripts/temp/<name>.mjs path (not absolute), "
        "run from the repo root. Rewrite as exactly one of:\n"
        f"  unshare --net --map-root-user -- node --permission --allow-fs-read={REPO_ROOT} -e '<script>'\n"
        f"  unshare --net --map-root-user -- node --permission --allow-fs-read={REPO_ROOT} scripts/temp/<name>.mjs\n"
        "Both auto-approve with no prompt. If you genuinely need a different "
        "sandbox, ask the human. See CLAUDE.md - 'Throwaway node - never raw `node -e`'."
    )


# Words that make a command a structure rather than a sequence. A ';' inside a
# loop or a conditional separates parts of ONE command, so splitting there
# produces fragments that mean nothing on their own - `do node ...` is not a
# command. Seeing any of these is the signal to leave the command whole.
SHELL_STRUCTURE_WORDS = {
    "for", "while", "until", "do", "done",
    "if", "then", "elif", "else", "fi",
    "case", "esac", "function", "select",
}

STATEMENT_SEPARATORS = (";", "&&", "||")


def split_top_level_statements_text(command):
    """Split `command` at top-level ';', '&&' and '||', outside quotes, and
    return the pieces. Returns None when the command should be left whole - it
    contains a shell structure word, a subshell, or a substitution, where a
    separator is part of one command rather than between two.

    Pipes are deliberately NOT split points: `a | b` is a single command whose
    halves have no meaning apart, and the guard already answers a pipe of
    trusted verbs on its own."""
    if any(ch in command for ch in "()`"):
        return None
    if "$(" in command or "\n" in command:
        return None
    pieces = []
    current = ""
    quote = ""
    index = 0
    while index < len(command):
        ch = command[index]
        if quote:
            current += ch
            if ch == quote:
                quote = ""
            index += 1
            continue
        if ch in "'\"":
            quote = ch
            current += ch
            index += 1
            continue
        two = command[index:index + 2]
        if two in ("&&", "||"):
            pieces.append(current)
            current = ""
            index += 2
            continue
        if ch == ";":
            pieces.append(current)
            current = ""
            index += 1
            continue
        current += ch
        index += 1
    if quote:
        return None
    pieces.append(current)
    stripped = [p.strip() for p in pieces]
    kept = [p for p in stripped if p]
    for piece in kept:
        first = piece.split()[0] if piece.split() else ""
        if first in SHELL_STRUCTURE_WORDS:
            return None
    return kept


TIME_SUBSHELL_RE = re.compile(r"^\s*time\s+\(\s*(.+?)\s*\)\s*$", re.DOTALL)

# Constructs whose effect a subshell deliberately contains. `cd` and a
# variable assignment both outlive the command when the parentheses go, and
# the working directory persists between Bash calls here - so for these the
# parentheses are load-bearing and stripping them is a behaviour change, not
# a reword. They keep falling through to a real prompt.
SUBSHELL_LOAD_BEARING_RE = re.compile(r"(^|[\s;&|])(cd\s|[A-Za-z_][A-Za-z0-9_]*=)")


def time_subshell_stripped(command, safe_verbs, safe_exact_commands):
    """For `time ( CMD )` where the parentheses are pure grouping, the same
    command without them; otherwise None.

    A subshell is not a shape this hook parses, so `time (timeout 900 node
    scripts/ai.mjs <granted fn> > /dev/null 2>&1)` fell through to a prompt
    even though every verb in it was trusted - and the human was asked to
    approve a command that differs from an approved one by two characters.
    Answering that with a deny naming the stripped form costs no human
    click: the caller reads the reason and reissues.

    Deliberately the narrowest shape that is provably identical. `time` runs
    a subshell either way, so the measurement does not change, and the whole
    command must be the wrapper - `( time CMD ) 2>&1 | grep real` is
    excluded, because there the parentheses decide whose stderr the
    redirect catches and stripping them would silently measure something
    else. A `cd` or an assignment inside means the subshell is containing
    something, so that is excluded too.

    Only offered when the stripped form actually passes: a deny must always
    leave a way forward, or it is worse than the prompt it replaced."""
    match = TIME_SUBSHELL_RE.match(command)
    if not match:
        return None
    inner = match.group(1)
    if "(" in inner or ")" in inner:
        return None
    if SUBSHELL_LOAD_BEARING_RE.search(inner):
        return None
    stripped = "time " + inner
    try:
        if not is_safe(stripped, safe_verbs, safe_exact_commands):
            return None
    except Unsupported:
        return None
    return stripped


def splittable_statements(command, safe_verbs, safe_exact_commands):
    """If `command` is a chain that would be better run as separate Bash calls,
    return (trusted_pieces, the_one_blocked_piece); else None.

    The condition is deliberately narrow, because splitting can make things
    worse. Asking Claude to split a chain with THREE untrusted pieces turns one
    prompt into three - the opposite of the point. So a split is proposed only
    when exactly one piece is not already allowed and at least one is: the
    human's prompt count stays at one and that one prompt becomes a single
    plain command instead of an opaque chain. That matters beyond legibility -
    a lone `node scripts/ai.mjs <fn>` can be granted by name and never asked
    about again, while a chain can never be granted at all.

    Two further conditions, both learned from the regression corpus rather than
    reasoned out in advance, and both about not giving advice this branch is
    not entitled to give:

    The blocked piece must BE a dispatcher call. `ls; rm -rf /` also has one
    untrusted piece, and telling Claude to run that one on its own is advice
    nobody should hand out. Restricting the branch to the one shape it can
    honestly recommend keeps every other command on the answer it had.

    And nothing may carry a variable. `S=/etc; ls > $S/passwd` is not two
    commands that happen to be adjacent - the second reads what the first set,
    so splitting it does not preserve it, and this is exactly where the guard
    means to fail closed."""
    if "$" in command:
        return None
    pieces = split_top_level_statements_text(command)
    if pieces is None or len(pieces) < 2:
        return None
    for piece in pieces:
        head = piece.split()[0] if piece.split() else ""
        if "=" in head:
            return None
    trusted = []
    blocked = []
    for piece in pieces:
        try:
            ok = is_safe(piece, safe_verbs, safe_exact_commands)
        except Unsupported:
            ok = False
        if ok:
            trusted.append(piece)
        else:
            blocked.append(piece)
    if len(blocked) != 1 or not trusted:
        return None
    if not ai_dispatcher_call_is(blocked[0]):
        return None
    return trusted, blocked[0]


def ai_dispatcher_call_is(piece):
    """True iff `piece` is a plain `node scripts/ai.mjs <fn> ...` call, the one
    blocked shape this branch is entitled to recommend running on its own -
    it is read-only until the function says otherwise, it is what a permission
    rule can name, and a wrapper or a pipe around it does not change either."""
    try:
        tokens = tokenize(piece)
    except Unsupported:
        return False
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if len(words) >= 3 and words[0] == "node" and words[1] == AI_DISPATCHER_SCRIPT:
            return True
    return False


GIT_WRITE_COMMIT_SUBCOMMANDS = {"add", "commit"}

# Subcommands that throw work away rather than record it. In a normal checkout
# that is a personal undo; here it is not. Several Claudes and the human share
# ONE working directory, so `git checkout .claude/settings.json` discards every
# peer's uncommitted edit to that file along with your own, and neither you nor
# the human approving the prompt can see what was in flight. That is what makes
# a prompt the wrong answer and a deny the right one: the question "may I throw
# away whatever other people have not committed yet?" has no informed approver.
GIT_DISCARD_SUBCOMMANDS = {"checkout", "restore", "reset", "stash", "clean"}

# `git stash` alone moves the whole working tree into a stash; `git stash list`
# and `git stash show` only read. The reading pair is already granted, and a
# floor runs before the allow decision, so without this exception the floor
# would silently revoke a rule the human wrote.
GIT_STASH_READ_ONLY = {"list", "show"}


def find_git_commit_write(command):
    """If any statement in `command` is a bare `git add`/`git commit` - the
    commit flow Claude must run through the sanctioned commit function instead
    of raw git - return that git subcommand so main() can DENY it with a
    redirect (turning what would be a human prompt into a self-correction
    Claude can act on). Else None.

    Quote-aware and prefix-unwrapping like the other floor finders, so
    `grep 'git commit' f` is NOT matched and a leading timeout/xargs prefix is
    unwrapped; an unparseable command returns None and falls through to normal
    handling. Only the bare `git <sub>` shape is caught - a `git -C <dir> ...`
    form is deliberately left alone so this floor never overrides an exact
    `git -C ...` allow rule the human may have granted."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return None
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if len(words) >= 2 and words[0] == "git" and words[1] in GIT_WRITE_COMMIT_SUBCOMMANDS:
            return words[1]
        if len(words) >= 2 and words[0] == "git" and words[1] in GIT_DISCARD_SUBCOMMANDS:
            if words[1] == "stash" and words[2:3] and words[2] in GIT_STASH_READ_ONLY:
                continue
            return words[1]
        directed = git_repo_root_directed_subcommand(words)
        if directed in GIT_DISCARD_SUBCOMMANDS:
            return directed
    return None


def snapshot_detached_checkout_is(command):
    """True iff the whole command is `git -C <dir under /dev/shm> checkout
    --detach <ref>` and nothing else.

    This one shape is auto-approved because it is provably harmless, and it
    recurs: a snapshot worktree in tmpfs is advanced to a commit every time the
    gates are run there. Detaching moves no branch, so nothing another Claude
    could be standing on is touched, and the only state it overwrites belongs
    to that scratch worktree.

    Being in /dev/shm is NOT by itself the reason, and assuming it would be a
    mistake worth naming: a worktree's .git points back at the real
    repository, so a commit or a branch checkout made from tmpfs writes to the
    same objects and refs everyone else is using. Volatile storage says
    nothing about what a git command can reach from inside it. `--detach`
    does, which is why the check insists on it rather than on the path alone.
    Any extra word makes it a different command and it falls through."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return False
    statements = list(split_statements(tokens))
    if len(statements) != 1:
        return False
    words = _strip_command_prefixes(statements[0])
    if len(words) != 6:
        return False
    shape = [words[0], words[1], words[3], words[4]]
    if shape != ["git", "-C", "checkout", "--detach"]:
        return False
    directory = os.path.normpath(words[2])
    inside = directory.startswith("/dev/shm/")
    return inside


def git_repo_root_directed_subcommand(words):
    """The subcommand of a `git -C <dir> <sub>` aimed at THIS repo's root, or
    None.

    The `-C` form is otherwise left alone, so that a floor can never override an
    exact `git -C ...` rule the human granted. That reasoning holds for the
    commit subcommands and fails for the discarding ones: no such rule exists,
    and `git -C /home/j/repos/love checkout .` throws away every peer's
    uncommitted work exactly as the bare spelling does - the `-C` only changes
    where it is typed from. Only this repo's root is named, so a worktree
    somewhere else, which is a throwaway by construction, keeps the answer it
    had."""
    if len(words) < 4 or words[0] != "git" or words[1] != "-C":
        return None
    directory = os.path.normpath(words[2])
    if directory != os.path.normpath(REPO_ROOT):
        return None
    return words[3]


def git_commit_write_deny_reason(subcommand):
    if subcommand in GIT_DISCARD_SUBCOMMANDS:
        return (
            f"`git {subcommand}` is refused: it throws away uncommitted work, "
            "and the working directory is shared. Several Claudes and the "
            "human edit these same files at once, so this discards whatever "
            "THEY have in flight too - and nobody, including the human "
            "approving a prompt, can see what that was. A prompt cannot make "
            "that call, so it is refused here instead.\n"
            "  - undoing your OWN edit: use the Edit tool to put the text "
            "back. It is the only undo that touches just your change.\n"
            "  - wanting a clean tree to re-test something: commit first with "
            "`node scripts/ai.mjs ai_git`, which is cheap and keeps the "
            "history linear. A commit you regret is recoverable; a discard is "
            "not.\n"
            "  - reading what changed: `git diff` and `git status` are "
            "already trusted and change nothing.\n"
            "If a genuine revert is really needed, ask the human - they can "
            "see which peers are running. See CLAUDE.md - 'Editing protocol "
            "(optimistic concurrency)'."
        )
    return (
        f"`git {subcommand}` is refused: Claude commits through the sanctioned "
        "function, never raw git - it does add+commit as one atomic step with "
        "the fixed 'ai' message. Use `node scripts/ai.mjs ai_git` for the love "
        "repo (whole tree, message 'ai'), or `node scripts/ai.mjs "
        "git_ac_call_folder_try <folder> ai` for another repo like the memory "
        "dir. See CLAUDE.md - 'Editing protocol (optimistic concurrency)'."
    )


AWK_TEXT_TOOLS = {"awk", "gawk", "mawk", "nawk"}


def find_awk_text_tool(command):
    """If any statement/pipe segment in `command` invokes awk (or a gawk/mawk/
    nawk variant), return that program name so main() can DENY it with a rewrite
    hint - turning what would be a human prompt (awk is never auto-trusted) into
    a self-correction Claude can act on. Else None.

    awk is Turing-complete and can exec (`system(...)`) and write files
    (`print > "file"`), so it's the same eval/write seam as `sed -i`/`node -e` -
    never safe to blanket-allow. In this repo's inspection idiom (extract a
    column, count, sum) it's always rewritable with an already-trusted verb
    (wc/cut/grep -o/sort), which the deny reason names; genuine field logic goes
    in a committed JS fn or the sandboxed throwaway, and a true one-off escapes
    to the human.

    Quote-aware and prefix-unwrapping like the other floor finders; an
    unparseable command returns None and falls through. Safe as a floor: awk is
    never in the allow-list, so this only ever converts an 'ask' into a
    self-correcting 'deny', never blocks something that would have auto-approved."""
    try:
        tokens = tokenize(command)
    except Unsupported:
        return None
    for words in split_statements(tokens):
        words = _strip_command_prefixes(words)
        if words and words[0] in AWK_TEXT_TOOLS:
            return words[0]
    return None


def awk_text_tool_deny_reason(program):
    return (
        f"`{program}` is refused: it's Turing-complete and can exec "
        "(`system(...)`) and write files (`print > \"file\"`), so - like "
        "`sed -i`/`node -e` - it's never auto-trusted. For the usual inspection "
        "one-liners rewrite with an already-allowed verb: a byte/line count -> "
        "`wc -c`/`wc -l`; a column -> `cut -d<sep> -f<n>` or `grep -oE`; "
        "sort/dedup/first/last -> `sort`/`uniq`/`head`/`tail`. For real field "
        "logic put it in a committed JS fn (see CLAUDE.md - 'Scripting in JS, "
        "not bash') or the sandboxed throwaway. If none of these fit a genuine "
        "one-off, ask the human to approve the awk."
    )


def dispatcher_deny_reason(fn):
    return (
        f"Running {fn} from the command line is refused: {fn} runs arbitrary "
        "code/commands from its arguments - it's `node -e` wearing a function "
        "name, so it's denied even if allow-listed. Internal use (a committed "
        "function that calls it with fixed arguments) is fine; what's blocked "
        "is invoking it directly as a command-line escape hatch. If you need a "
        "shell/eval step, put it inside reviewed, committed repo code. See "
        "CLAUDE.md - 'Throwaway node - never raw `node -e`'."
    )


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

    # Hard floor, evaluated BEFORE any allow decision so that no allow-list
    # rule (mistaken or deliberate) can re-enable it: un-sandboxed
    # arbitrary-code execution. Two shapes, both `node -e` by another name - a
    # raw `node -e`/`--eval`/`-p`/`--print`, and a direct `node <dispatcher>
    # <fn>` to a function that runs arbitrary code/commands from its args. Deny
    # with a redirect message rather than prompting (a flood of un-vettable
    # prompts) or, worse, auto-approving.
    denied_fn = find_denied_dispatcher_function(command)
    if denied_fn or find_raw_node_eval(command):
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": (
                    dispatcher_deny_reason(denied_fn) if denied_fn else NODE_EVAL_DENY_REASON
                ),
            }
        }))
        return

    # Same hard-floor category as the node-eval block above: `python -c` is
    # arbitrary command-line code, the analog of `node -e`. Floored (not just
    # left to prompt) so it can't be a bypass and so the reflex is handed back
    # to Claude as a redirect. Safe as a floor: python -c is never allow-listed,
    # so this only ever converts a 'silent'/'ask' into a self-correcting 'deny'.
    if find_python_eval(command):
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": PYTHON_EVAL_DENY_REASON,
            }
        }))
        return

    # Same floor-instead-of-prompt reasoning, applied to the shell writing a
    # file from a heredoc: the Write and Edit tools do it without a prompt and
    # fail loudly on a conflict, which a blind append cannot. See
    # find_heredoc_file_write.
    if find_heredoc_file_write(command):
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": HEREDOC_FILE_WRITE_DENY_REASON,
            }
        }))
        return

    # Also a hard floor (before any allow decision, so a stray allow rule can't
    # re-enable it): Claude runs the repo only through scripts/ai.mjs. Every
    # other scripts/ file - the human's r.mjs/rl.mjs/g.mjs seams and utilities -
    # is denied, so nothing routes around ai.mjs's full-name refusal and JSON
    # output. The human's own terminal never passes through this hook, so this
    # constrains only Claude. The sandboxed throwaway (scripts/temp via unshare)
    # is unaffected - its script is not in word position 1.
    non_ai_script = find_non_ai_scripts_invocation(command)
    if non_ai_script:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": non_ai_scripts_deny_reason(non_ai_script),
            }
        }))
        return

    # Correctness floor rather than a safety one: a dispatcher call naming a
    # function no repo defines is guaranteed to throw, so a prompt spends the
    # human's attention on a command that fails either way. Deny with the
    # near-miss live names so the correction happens in the agent loop. Sits
    # before the allow decision on purpose - a dangling grant (left behind by a
    # deleted function) must not outrank "this name does not exist". Placed
    # after the seam floor so `node scripts/r.mjs <fn>` keeps its own message.
    dead_fn = find_dead_dispatcher_function(command)
    if dead_fn:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": dead_dispatcher_deny_reason(
                    dead_fn, repos_function_names()
                ),
            }
        }))
        return

    # Near-miss on the sandboxed throwaway: the exact sandbox shape but with an
    # --allow-fs-read path outside the repo. Rather than fall through to a human
    # prompt (silent), hand the correction back to Claude - narrow the path to
    # REPO_ROOT - so the common over-broad-path mistake self-corrects in the
    # agent loop; only a genuine cross-repo read has to escalate to the human.
    # Safe to sit before the allow decision: the detector excludes in-repo paths,
    # so it never shadows the sanctioned (allowed) form.
    near_miss_path = find_sandbox_path_near_miss(command)
    if near_miss_path is not None:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": sandbox_path_near_miss_deny_reason(),
            }
        }))
        return

    # Raw `git add`/`git commit`: Claude commits only through the sanctioned
    # function (ai_git / git_ac_call_folder_try), so deny with that redirect
    # rather than prompting the human (an 'ask') - the reason goes back to
    # Claude, which reruns the correct form on its own. Bare `git <sub>` only;
    # a `git -C ...` form is left to normal handling so an exact `git -C` allow
    # rule still wins. Safe as a floor: bare git add/commit is never in the
    # allow-list, so this only ever converts an 'ask' into a self-correcting
    # 'deny', never blocks something that would have auto-approved.
    git_write = find_git_commit_write(command)
    if git_write is not None:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": git_commit_write_deny_reason(git_write),
            }
        }))
        return

    # awk (or a gawk/mawk/nawk variant) in any segment: Turing-complete, can
    # exec (`system(...)`) and write files, so never auto-trusted - but in this
    # repo's inspection idiom always rewritable with a trusted verb. Deny with
    # that rewrite hint rather than prompting the human (an 'ask'), so Claude
    # self-corrects in the loop; a genuine one-off still escapes to the human.
    # Safe as a floor: awk is never allow-listed, so this only ever converts an
    # 'ask' into a self-correcting 'deny', never blocks an auto-approve.
    awk_tool = find_awk_text_tool(command)
    if awk_tool is not None:
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": awk_text_tool_deny_reason(awk_tool),
            }
        }))
        return

    safe_verbs = load_safe_verbs()
    safe_exact_commands = load_safe_exact_commands()
    if not safe_verbs and not safe_exact_commands:
        return

    if snapshot_detached_checkout_is(command):
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "allow",
                "permissionDecisionReason": (
                    "Auto-approved: a detached checkout of a scratch worktree "
                    "under /dev/shm, which moves no branch and discards only "
                    "that worktree's own state."
                ),
            }
        }))
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

    split = splittable_statements(command, safe_verbs, safe_exact_commands)
    if split is not None:
        trusted, blocked = split
        print(json.dumps({
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": (
                    "Run this as separate Bash calls instead of one chain - "
                    "it splits cleanly, so there is no need to ask the human "
                    "about the whole thing.\n"
                    + "".join(f"  already allowed: {t}\n" for t in trusted)
                    + f"  needs its own call: {blocked}\n"
                    "The allowed parts run with no prompt at all. The last "
                    "one is then a single plain command rather than a chain, "
                    "which is both easier to approve and, if it is a "
                    "`node scripts/ai.mjs <fn>` call, something that can be "
                    "granted once by name and never asked about again - a "
                    "chain never can be."
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
                    f"This starts with the allowed verb {verb!r} but also "
                    "carries chained or unparsed content (a pipe, ';', "
                    "'$(...)', redirection, or a not-yet-trusted verb) that "
                    "can't inherit that verb's trust, so it needs a real "
                    "look. If it splits cleanly, prefer rewording into "
                    "separate Bash calls with one already-allowed verb each "
                    "(or chain only allow-listed verbs with '&&'/';'); "
                    "otherwise it's fine to approve."
                ),
            }
        }))
        return


if __name__ == "__main__":
    main()
