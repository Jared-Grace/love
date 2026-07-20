# Working in this repo

**Goal: add quality, useful code fast.** Speed matters — the point of the setup below is to move quickly *and* safely, not to add ceremony.

## You are not alone

Several Claudes and the human all work **in parallel, in this same working directory, on `main`**. There are no feature branches — everyone commits to `main` on purpose. Constantly integrating turns a hidden month-long divergence into an *immediate* signal ("we touched the same code — coordinate"). Fast collision signal beats branch isolation.

Consequences:
- Expect files you didn't create to appear in the tree — that's a peer, not a bug.
- Committing sweeps the whole working tree (see below), so your commit may include a peer's in-flight work. **That's fine and intended.**
- **Don't wait on another Claude.** You can't message them, so blocking on an unseen peer just stalls you. Proceed and integrate. Only pause if you can see *uncommitted* work you'd clobber — and even then, commit your own first, don't wait.

## Editing protocol (optimistic concurrency)

The working directory has **no isolation** — peers' uncommitted edits sit on the same disk you read. Git gives you atomic, serialized, linear commits for free, but not isolation. This protocol covers the gap:

1. **Baseline:** at the start, note `git rev-parse HEAD`.
2. **Track your read-set:** remember which files you read to make your decision (not just the ones you'll write — a peer renaming a function you *call*, in a file you never opened, can still break you).
3. **For a structural edit, reach for a named transform first (see "Editing with transforms" below); fall back to `Edit` for everything else.** When you do use `Edit`, make targeted edits, never full-file overwrites of an existing file — `Edit` (exact-snippet replacement) means a peer's change elsewhere survives, and a same-region conflict fails *loudly* instead of silently clobbering. Full-file `Write` is fine only for brand-new files.
4. **Before committing**, run `git log <baseline>..HEAD -- <read-set>` and reason: *do any of these peer changes break mine?* If yes, reconcile before committing.
5. **Commit** with `node scripts/r.mjs ai_git` (whole tree, message `ai`). This does **add + commit only** — it's local, but since every Claude shares this one repo, your commit is visible to peers immediately. Push to origin is a separate throttled background job (plain fast-forward, ~5-min interval, never force). Peers never diverge from each other (shared repo = linear history); a push only rejects if *origin* diverged externally, which needs a manual pull.

## Editing with transforms (prefer over text `Edit`)

**Why.** A named transform edits the *AST* — it moves a symbol's definition, every import of it, every caller, and its aliases together, in one operation. That makes it **provable by construction** (a rename can't change behavior) and **auto-mergeable** under parallel-Claudes-on-`main` (it touches whole named units, not one text region a peer may have shifted). Text `Edit` sees only the bytes in front of it; it can't follow a symbol across the files you never opened. So for the shapes below, a transform is faster *and* safer. This isn't a global switch — `Edit` stays the right tool for edits no transform covers (logic inside a body, prose, data, one-off tweaks). Adoption grows per-shape.

**How to run one.** `node scripts/r.mjs <fn-or-alias> <arg> <arg> …` — args are positional strings; a list is one comma-joined arg (`a,b,c`). Aliases below are for typing; the **full function name** is the stable identity (aliases can be repointed).

**Find a transform / who-calls-what.** `s <substrings>` (`functions_search`, AND-of-substrings over fn *names* — e.g. `s rename`, `s import`) · `i <name>` (`data_identifiers_search`, find callers of a symbol).

| When you want to… | Use | Full function |
|---|---|---|
| Rename a function everywhere (def + imports + callers + aliases) | `function_rename <before> <after>` | `function_rename` |
| Bulk-rename every fn under a name prefix (namespace migration) | `ri <prefix_before> <prefix_after>` | `functions_rename_if_starts_with` |
| Replace an identifier *inside the current fn* with an expression | `ir <name> <expr>` | `function_identifier_replace` |
| Add the missing relative imports for a file | `imports <file>` | `file_imports_repair` |
| Create a new empty fn file (one fn per file) | `n <name>` / `nj <name>` | `function_new_open` / `function_new_js` |
| Copy a fn to a derived new name | `c <plugin> <args>` | `function_copy_generic_args` |
| Wrap a fn's body in a new wrapper fn | `w <plugin> <args>` | `function_wrap_generic_args` |
| Extract statements between two markers into a new fn | `mf <marker_from> <marker_to> <new_fn>` | `marker_functionize` |
| Add / remove a parameter | `pn <fn> <param> <default>` / `pd <fn> <params>` | `function_param_new` / `function_params_delete` |
| Delete a fn **only if** proven unused (else refuses) | `du <name>` | `function_delete_unused` |

**Don't run `ao` / `js_auto` / the auto-transforms by hand** — the watcher runs the canonicalizer on save; running it manually rewrites imports non-canonically. (See memory `project_do_not_run_auto_or_transforms_manually`.)

## Conventions

- **Refactors get their own commit.** A symbol rename (via `ri` / `function_rename`) is behavior-preserving, so isolate it — a peer can then verify it trivially and it won't entangle with logic changes. Do the refactor first, then build on top.
- **Commit message is always exactly `ai`.**
- **Run `node scripts/r.mjs ai_git` yourself** after a batch of edits (from the repo root). Don't rely on a background watcher to commit — it may be down.

## Throwaway node — never raw `node -e`

Raw `node -e '...'` **always prompts the human** (arbitrary JS can shell out / hit the network / write any file, so the bash guard deliberately never auto-approves it). With many Claudes running in parallel, that's a flood of approval clicks for the human — don't create it. Two zero-prompt alternatives, both auto-approved by the guard because they're sandboxed read-only by construction:

- **One-off computation / inspection** — wrap it:
  ```
  unshare --net --map-root-user -- node --permission --allow-fs-read=/home/j/repos/love -e '<script>'
  ```
  (`--net` blocks network, `--permission --allow-fs-read=<repo>` gives read-only repo access and blocks fs-write + child_process. The read path must be this exact absolute repo path.)
- **Anything bigger, or that you'd rerun** — write `scripts/temp/<name>.mjs` and run it the same sandboxed way:
  ```
  unshare --net --map-root-user -- node --permission --allow-fs-read=/home/j/repos/love scripts/temp/<name>.mjs
  ```

If the task genuinely needs to **write** or **persist** (not just read+print), it isn't a throwaway — add a named alias/function in the `r.mjs` system and commit it (in git = reviewable, reusable, DRY), rather than reaching for raw `node -e`.

**Allow-listing an `r.mjs` function** (so `node scripts/r.mjs <fn> <args>` stops prompting) is a *per-function* grant — `Bash(node scripts/r.mjs <fn>:*)` — never a blanket `node scripts/r.mjs:*` (which wouldn't work anyway; the guard folds the function name into the verb on purpose). Only grant it to a function whose behavior is **fixed regardless of its args** (builds a bundle, runs a named transform, commits). **Never allow-list a function that runs arbitrary code or commands from its arguments** — `command_line_generic`, `eval_console_log_replace`, `firebase_storage_function_run_generic`, or any `*_generic` taking a command/code string. Those are `node -e` wearing a function name. The known ones are hard-**denied by the bash guard even if allow-listed** (a floor that runs before the allow decision), so a stray rule can't reopen the hole; still, don't try — and don't add new direct-invocation eval entry points. Legitimate internal use (a committed function that calls one with *fixed* arguments) is unaffected; only direct `node scripts/r.mjs <evalfn>` invocation is blocked.

**Always name the full function, never an alias** — in the rule *and* in the command you run. A rule is matched as **literal text**, so `Bash(node scripts/r.mjs fb:*)` grants whatever `fb` points to *later*: repoint the alias and the auto-approval silently follows it to a different function, and a freed alias key is claimable by anyone with `a`. (This already happened — `xp` was granted on 2026-07-18 pointing at `examples_page_write`; a day later that function was gone and the grant sat there on an unclaimed name.) Function names are the stable identity — and `function_rename` repoints aliases automatically, so a rename never invalidates a full-name rule. Aliases stay for the human at the keyboard; Claude has no keystroke cost. `permission_gate_run` (part of `q`) fails the build on any rule that names an alias or a dead name.

**To check whether a command would prompt, ask the guard directly:** `node scripts/r.mjs guard_check "<command>"` returns its verdict — `allow` (auto-approved) / `ask` / `deny` / `silent` (guard abstains → native permission engine decides, so `silent` ≠ "won't prompt"). It's the ground truth (runs the real hook on the command as an inert string — never executes it), so prefer it over hand-grepping the allow-list and reasoning about verb-folding yourself.

## Tests (gap)

`q` (`qa_gate_run`) is the repo-wide gate. It runs every gate listed in `qa_gates()` — currently `guard_gate_run` (the bash-guard corpus in `data/guard_cases.json`, checked through the real hook), `examples_gate_run` (the `data/examples` corpus), `permission_gate_run` (allow rules naming a live full function), and `app_shared_prefixes_invalid_assert` (no `app_<part>_` prefix squatting a name that isn't a real app) — and exits nonzero if any fail. Add a new gate by adding its function to `qa_gates()`.

Coverage is still partial: most code has no gate, so reasoning in step 4 remains the main guard. The app-scoped e2e tests for app_replace stay separate: `are` (single), `rv` (verify named), `rva` (verify all).
