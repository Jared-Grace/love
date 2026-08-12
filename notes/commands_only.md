## The commands-only switch

**What it does.** While it is on, the file-writing tools (`Edit`, `Write`, `NotebookEdit`, `MultiEdit`) are refused inside this repo, and the refusal names the commands that make the same edit. It is off by default and reverts by being turned back.

**Why.** A text edit sees only the bytes in front of it, so it cannot follow a symbol into the files nobody opened, and it leaves nothing behind that a later edit can reuse. A named transform edits the tree, moves every caller with the definition, and is a unit the next Claude can find. The repo already prefers one. This is what holds the preference when nobody is watching — and, more to the point, it is what turns every gap in the transform vocabulary into a *visible* gap that gets filled, instead of a silent hand-edit.

**The settings** (`commands_only_levels()`), least limiting first:

| setting | refuses |
|---|---|
| `off` | nothing — the way the folder worked before the switch existed |
| `js` | `js/**.mjs` — the repo's own javascript, which is exactly what a transform can change |
| `files` | every file in the repo, prose and data included |

Anything outside the repo folder is never this switch's business — the memory notes and the session scratchpad both keep working without being named as exceptions.

**Turning it:**

```
node scripts/ai.mjs commands_only_level_write js
node scripts/ai.mjs commands_only_level_write off
```

**Deliberately not granted, in either direction.** Turning it on is a decision. Turning it off is the only way out of the restriction, so a Claude that could turn it off would reach for that the first time a transform was missing — which is precisely the moment the missing transform was supposed to get written instead. Both directions prompt the human.

### The way out that is not turning it off

A change no named command can make still has to be possible, or the switch is just a wall. The answer is a new command, and there is one door for writing it:

1. Draft the atom with `Write` at `scripts/temp/<name>.mjs` — that folder stays open at every setting. It is gitignored and runs sandboxed read-only, so nothing written there reaches anybody.
2. `node scripts/ai.mjs function_new_from_temp <name>`

That command is narrow on purpose:

- the **name decides the file**, so nothing can be written outside `js/`;
- the draft must hold **exactly one exported function, named after its own file**, so a second unit cannot ride in beside it;
- the name must be one **the repo does not already answer to**, so an existing function still cannot be rewritten except through a transform;
- the draft is **deleted once it lands**, so a stale second copy cannot be promoted later.

It adds an atom, and it can do nothing else. Its own parameter reads as a file name, so it is not grantable either — every promotion is a refusal the human sees, which is what keeps it a last resort rather than a habit.

### How it is put together

| piece | what it is |
|---|---|
| `commands_only_path()` | where the setting is kept — `data/commands_only.json` |
| `commands_only_level()` | which setting is on right now; a missing file reads as `off` |
| `commands_only_level_write(level)` | turns it, refusing any word that is not a setting |
| `commands_only_write_denied_is(level, path)` | the whole decision, over a path spelled from the repo folder down |
| `commands_only_deny_reason(level)` | what a refused Claude is told |
| `.claude/hooks/commands_only_write_deny.mjs` | the adapter: reads the message, resolves the path, prints the refusal |

Almost nothing is decided in the hook. A decision written inside a hook cannot be *asked* anything — the only way to learn what a hook would say about a case is to arrange for that case to happen, which for a refusal means arranging to be refused. As functions they have a corpus beside them (`commands_only_write_denied_cases`), and both gates are in `q`: `commands_only_write_denied_cases_gate_run` and `commands_only_hook_path_gate_run` (the hook still spells the place the setting is kept — it runs with whatever working directory it is handed, so that one place is spelled twice and must not drift).

**It fails open, three ways** — a setting file that will not read, an import that will not load, a path that does not resolve. A restriction that turned itself *on* because a read failed would stop every Claude in the folder at once with the reason nowhere on screen, and the repo it would be protecting is the same repo whose breakage caused it.

### The half that is not built yet

The switch covers the file-writing tools. It does **not** yet cover `Bash`, and there is no `all` setting, because a setting must not claim more than it does.

The goal there is different in kind from the file half — not a restriction but a **library**: one portable, natural-language API over the operating system's own commands, so a person learns `files_search_text` once instead of `grep` on one machine, `findstr` on another and `Select-String` on a third. The switch would only be what forces the migration to finish.

Most of that library already exists — measured 2026-08-12: 100 `file_*`, 78 `folder_*`, 83 `git_*`, 27 `process_*`. The hole is **search**: `functions_search grep` and `functions_search ripgrep` both come back empty, and `data_texts_search` only reaches a single data folder. That is exactly why `grep` is the command that keeps getting reached for, and it is the first atom to write before a `bash` setting can mean anything.
