# Working in this repo

**Goal: add quality, useful code fast.** Speed matters — the point of the setup below is to move quickly *and* safely, not to add ceremony.

## You are not alone

Several Claudes and the human all work **in parallel, in this same working directory, on `main`**. There are no feature branches — everyone commits to `main` on purpose. Constantly integrating turns a hidden month-long divergence into an *immediate* signal ("we touched the same code — coordinate"). Fast collision signal beats branch isolation.

Consequences:
- Expect files you didn't create to appear in the tree — that's a peer, not a bug.
- Committing sweeps the whole working tree (see below), so your commit may include a peer's in-flight work. **That's fine and intended.**
- **Don't wait on another Claude.** You can't message them, so blocking on an unseen peer just stalls you. Proceed and integrate. Only pause if you can see *uncommitted* work you'd clobber — and even then, commit your own first, don't wait.

## Don't idle — ask the repo, not the human

The human's reading time is the scarcest thing here, and with ~10 Claudes running it is the **only** real bottleneck. Ending your turn to ask "what next?" spends a reply and buys nothing, because the repo can answer that question itself.

**Three things are always open, so "what next?" is never a question for the human:** a **new transform**, a **new gate**, a **DRY refactor**. Pick one and keep going.

**These are a permission set, not a queue — you choose.** Deliberately unranked, because a ranking freezes one guess, made far from the work, into a constant. You just touched the code: you know which duplication is hot and which edit you kept doing by hand. That beats any order written earlier.

**If you were given a topic, that *is* your choice — work the topic.** A topic scopes you, keeps peers out of each other's files, and makes your commits predictable enough not to need reading. So report when the **topic** is exhausted or turns out to be the wrong thing to spend on, not when a task inside it finishes. An off-topic commit is a signal, so if you leave the topic, say why.

**Topics partition by concern, but DRY doesn't partition by file** — a duplication sweep is global by nature, and the files worth collapsing hardest are the ones peers are editing right now. So split it: a **DRY-topic Claude takes the widest, coldest duplications**, where a sweep can't collide; and **whoever is already editing a hot file collapses the duplication in it there**, as part of that work. Nobody sweeps hot files from the outside.

*(`node scripts/ai.mjs work_options` prints these plus anything a read-only check has already proved is there, each with its count. Useful, not required — the rule above stands on its own.)*

**Choose by how much future usage the work removes.** The human's attention is one scarce resource; the token budget is another, and whichever binds decides. A transform takes the model out of a shape of editing for good; a gate takes out the reading and stops a regression being paid for twice; DRY shrinks what must be read before a later edit. That's investment — it repays in the currency it spends.

**Picking nothing is a real option.** Idling is free and low-value work is not, so usage spent now isn't there for the high-value task that arrives later. Once the budget is tight, **idling beats low-value work** — if nothing on the list clears the bar, stop.

**Freedom over *which*, never over *whether it's safe*.** Every option is behavior-preserving or adds a unit nothing calls yet. That admission test is also the stopping rule: the moment the next step needs a judgment the repo can't make, stop and report rather than picking something to stay busy.

Two rules keep this from backfiring:

- **Admission test.** Only work that's safe to start unasked belongs here: it preserves behavior (a refactor, a rename, a codemod), or it only adds a new named unit nothing calls yet. Total, idempotent, independent — the same bar as an auto transform.
- **Hard stop on judgment.** The moment the next step needs a decision that's genuinely the human's, **stop and report**. Don't guess in order to stay busy — that regenerates exactly the reading load this is removing.

**Report on a macro cadence, commit on a micro one.** Micro-commits stay: one atomic idea per commit, `ao` and `q` between them, refactors isolated. But "check yourself often" was never the same rule as "check *with the human* often" — make many small commits, then report **once**, or immediately on a real interrupt: a decision that's theirs, a peer collision, something broke.

**Silence is the success report.** When a task simply worked, don't narrate it — no file list, no step diary, no "all gates passed", no recap of what was asked. The commit and `q` already record all of that losslessly, and re-telling it costs the one resource that's actually scarce.

**One test decides whether to speak: is progress blocked, and can you unblock yourself?** Only when both fail is it the human's.

- **"Progress" means toward the goal, not motion.** Work that isn't valuable isn't progress, so drifting into busywork counts as blocked — even though nothing stopped you.
- **"Blocked" is not the same as uninformed.** Read the file, run the search, fix the red gate, take the next `work_options` item. A gate you can fix yourself was never the human's business.

That one test absorbs the whole usual list: a decision genuinely theirs, a peer collision you can't reconcile, work you can't do correctly or safely, scope you can't deliver.

**The one thing that isn't a blocker and still gets spoken: a surprise.** A finding that contradicts what the human is assuming doesn't stop *you* — but it makes their *next* instruction wrong, so it has to travel. **Blockers are a pull, surprises are a push.** Both break silence; nothing else does.

**Silence rests on the artifacts, not on trust.** It only means success because the commit and a green `q` prove it independently — so never report silently what you didn't verify. A `*_try` that swallowed a total failure looks exactly like a clean run; check the output, not the exit code.

**The one thing silence must not swallow: how to reach what you built.** A new entry point is unrecoverable without reading source — name it in one line. Its implementation isn't; leave that to the code.

## Editing protocol (optimistic concurrency)

The working directory has **no isolation** — peers' uncommitted edits sit on the same disk you read. Git gives you atomic, serialized, linear commits for free, but not isolation. This protocol covers the gap:

1. **Baseline:** at the start, note `git rev-parse HEAD`.
2. **Track your read-set:** remember which files you read to make your decision (not just the ones you'll write — a peer renaming a function you *call*, in a file you never opened, can still break you).
3. **For a structural edit, reach for a named transform first (see "Editing with transforms" below); fall back to `Edit` for everything else.** When you do use `Edit`, make targeted edits, never full-file overwrites of an existing file — `Edit` (exact-snippet replacement) means a peer's change elsewhere survives, and a same-region conflict fails *loudly* instead of silently clobbering. Full-file `Write` is fine only for brand-new files.
4. **Before committing**, run `git log <baseline>..HEAD -- <read-set>` and reason: *do any of these peer changes break mine?* If yes, reconcile before committing.
5. **Commit** with `node scripts/ai.mjs ai_git` (whole tree, message `ai`). This does **add + commit only** — it's local, but since every Claude shares this one repo, your commit is visible to peers immediately. Push to origin is a separate throttled background job (plain fast-forward, ~5-min interval, never force). Peers never diverge from each other (shared repo = linear history); a push only rejects if *origin* diverged externally, which needs a manual pull.

## Editing with transforms (prefer over text `Edit`)

**Why.** A named transform edits the *AST* — it moves a symbol's definition, every import of it, every caller, and its aliases together, in one operation. That makes it **provable by construction** (a rename can't change behavior) and **auto-mergeable** under parallel-Claudes-on-`main` (it touches whole named units, not one text region a peer may have shifted). Text `Edit` sees only the bytes in front of it; it can't follow a symbol across the files you never opened. So for the shapes below, a transform is faster *and* safer. This isn't a global switch — `Edit` stays the right tool for edits no transform covers (logic inside a body, prose, data, one-off tweaks). Adoption grows per-shape.

**How to run one.** `node scripts/ai.mjs <full_fn_name> <arg> <arg> …` — args are positional strings; a list is one comma-joined arg (`a,b,c`). The alias column below is **for the human at the keyboard**; `ai.mjs` refuses it (see "Two seams" below), so always type the full function name.

**Find a transform / who-calls-what.** `s <substrings>` (`functions_search`, AND-of-substrings over fn *names* — e.g. `s rename`, `s import`) · `i <name>` (`data_identifiers_search`, find callers of a symbol).

| When you want to… | Use | Full function |
|---|---|---|
| Rename a function everywhere (def + imports + callers + aliases) | `function_rename <before> <after>` | `function_rename` |
| Bulk-rename every fn under a name prefix (namespace migration) | `ri <prefix_before> <prefix_after>` | `functions_rename_if_starts_with` |
| Replace an identifier with an expression, inside the fn you name | `ir <name> <expr>` | `function_identifier_replace_named <fn> <name> <expr>` |
| Add the missing relative imports for a file | `imports <file>` | `file_imports_repair` |
| Create a new empty fn file (one fn per file) | `n <name>` / `nj <name>` | `function_new` / `function_new_js` |
| Copy a fn to a derived new name | `c <plugin> <args>` | `function_copy_generic` |
| Wrap a fn's body in a new wrapper fn | `w <plugin> <args>` | `function_wrap_generic` |
| Extract statements between two markers into a new fn | (no alias) | `marker_functionize` |
| Add / remove a parameter | `pn <fn> <param> <default>` / `pd <fn> <params>` | `function_param_new` / `function_params_delete` |
| Delete a fn **only if** proven unused (else refuses) | `du <name>` | `function_delete_unused` |

**Addressing a node inside a fn: use a selector, not the marker cursor.** The `marker_*` family (a persisted current-marker plus `up`/`down`/`enter`/`leave`/`above`/`below` navigation) is **retired** — its 29 alias keys were freed on 2026-07-25 and archived in `marker_aliases_retired()` so they can be restored if it's revived. It cost a multi-command session per edit and carried a shared mutable cursor, which races under parallel Claudes. Selectors are the replacement: a *selector* is any fn `(ast, …args) → node` (`js_statement_find_call_named`, `js_find_return`, `js_call_named_find`, `js_type_find`), and a *transform* is any fn `(ast, selects, …args)` (`js_statement_wrap_if`, `js_statement_if_return_add`, `js_expand_selects`). Keeping the two halves separate is what makes them multiply — every new transform written to that signature pairs with every existing selector. Write new node-level transforms to it. `marker_functionize` still works but needs `marker()` calls placed in the code first.

**Run a selector-and-transform pair with one command:**
```
node scripts/ai.mjs function_select_apply_args <fn> <selector> <selector_args> <transform> <transform_args>
```
Each half's args are one comma-joined word; pass `""` for none. Example — wrap the statement calling `ready_is` in an `if`, then add a `return` inside it:
```
node scripts/ai.mjs function_select_apply_args my_fn js_statement_find_call_named ready_is js_statement_wrap_if ""
node scripts/ai.mjs function_select_apply_args my_fn js_statement_find_call_named ready_is js_statement_if_return_add ""
```
It holds **no selection between commands**, which is the point: the older `function_node_select` / `function_current_selects_apply` path persists the selection in shared state, so under parallel Claudes the second command can act on a peer's selection with no way to tell. Prefer this one. It **dispatches functions named in its arguments**, so it used to be un-grantable — a grant would have covered every function, not one. It is now fenced instead: `function_callee_seam_assert` refuses, **on Claude's seam only**, any selector or transform that can reach a command-running function (`functions_command_seams`), following imports but skipping the install plumbing every function sits on (`functions_import_ignored`). With the fence in place `function_select_apply_args`, `function_select_multiple_apply_args` and `function_transform_single` are allow-listed. Ask `function_command_seams_reached <fn>` yourself — an empty list is the clean answer.

**Selecting more than one node** — `selects` is a list on purpose: extracting a span into its own function needs a *first* and a *last*. `function_select_multiple_apply_args` runs one selector once per word in its selection list and hands the transform everything found, so the picks accumulate inside a single command instead of in shared state:
```
node scripts/ai.mjs function_select_multiple_apply_args my_fn js_statement_find_call_named first_step,middle_step js_selects_functionize helper_name
```
That extracts the statements from the one calling `first_step` through the one calling `middle_step` into `helper_name`, inferring its parameters. It replaces the last thing `marker_functionize` was needed for, so nothing requires placing `marker()` calls in the code any more. Same allow-listing rule as above: **never**.

**Run `ao` yourself after editing a `js/*.mjs` file** — `node scripts/ai.mjs function_auto <fn_name>` (`ao` = `function_auto`). The save-time watcher is **retired**, so nothing else canonicalizes your file. `ao` runs the full normalize pipeline (operators→calls, atomize, add/repair imports, add arg-asserts). It does **not** commit when Claude runs it via `ai.mjs` — canonicalize-only. (When the *human* types `ao` it commits, but that's their interactive prompt harness committing per-command, not `function_auto`; Claude's `ai.mjs` invocations bypass that harness. Confirmed 2026-07-25: after `ao`, the tree stayed ` M` until an explicit `ai_git`.) So **always run `node scripts/ai.mjs ai_git` after `ao`**, and verify with `git status --short`. (This reverses an older rule: the import-mangling bug that made manual `ao` unsafe is gone — verified 2026-07-20.)

Two `ao` gotchas, both worth designing around:

- **`ao` strips `//` comments.** The AST round-trip drops them. Use **bare string-literal statements** as comments instead — they're real AST nodes and survive (`ao` renders them as `("...")`). This is why the codebase comments that way.
- **Keep underscore fn-name tokens OUT of string-literal comments.** A bare `js_fold` inside a comment string gets rewritten to `js_fold.name`, mangling the prose into a sequence expression. Say "the fold pass" instead.

`+` is intentionally **not** converted to `add(...)` (ambiguous with string concat).

## Conventions

- **Refactors get their own commit.** A symbol rename (via `ri` / `function_rename`) is behavior-preserving, so isolate it — a peer can then verify it trivially and it won't entangle with logic changes. Do the refactor first, then build on top.
- **Commit message is always exactly `ai`.**
- **Run `node scripts/ai.mjs ai_git` yourself** after a batch of edits (from the repo root) — including after `ao`, which does **not** commit when Claude runs it via `ai.mjs` (canonicalize-only; see the `ao` note above). Don't rely on a background watcher or on `ao` to commit: the save-time watcher is retired.

## Two seams: `ai.mjs` for Claude, `r.mjs` for the human

Same dispatcher, two audiences. **Claude runs `node scripts/ai.mjs <full_fn_name>`** — every permission rule names that seam. The bash guard **hard-denies every other `node scripts/…` for Claude** (`r.mjs`/`rl.mjs`/`g.mjs` and the human's utilities alike) — a floor before the allow decision, so no rule can reopen it. This constrains only Claude: the human's own terminal never passes through the hook. The one carve-out is the sandboxed throwaway (`scripts/temp` via the `unshare … --permission` form below), which stays allowed.

- **Full names only.** `ai.mjs` refuses both shorthands — an alias key (`fb`) and an auto-derived acronym (`hud`) — and the error names the function it would have run. A permission rule is matched as *literal text*, so a rule can only ever name what actually runs; shorthand would let a repointed alias silently redirect a granted rule. The human keeps shorthand on `r.mjs`, where keystrokes cost something.
- **Never the `_open` twin.** A `_open` suffix means *and then show it to the human in VS Code* — a real feature of the human's workflow, and meaningless from Claude's seam. So **`ai.mjs` marks the process** (`process_ai_seam_set`) and **`file_open` refuses** (`file_open_seam_assert`), naming the twin to call instead. Call the twin without the suffix: **`function_new`** not `function_new_open`, **`function_copy`** not `function_copy_open`, **`function_rename`** not `function_rename_open`, **`functions_search`** not `functions_search_open`. `permission_open_suffix_gate_run` (in `q`) fails the build on any allow rule naming an `_open` function, since such a grant only buys a guaranteed error.

  Each `_open` is a **thin wrapper over the plain one** — `function_copy_open` is `function_copy` then `function_copy_result_open`; `function_new_open_transform` is `function_new_transform` then `function_open`; `function_new_js_open` is `function_new_js` then `function_open`. The work lives in one place and the wrapper only adds the showing, so the two can't drift.
- **Results print as JSON.** `r.mjs` prints through `console.log`, whose `util.inspect` silently abbreviates — `[Object]` past depth 2, `... N more items` past 100, truncated strings — and you cannot tell elision from data. (Real case: `folder_read_files js` shows 100 entries and hides `... 5416 more items`.) `ai.mjs` prints lossless JSON.

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

**Allow-listing a function** (so `node scripts/ai.mjs <fn> <args>` stops prompting) is a *per-function* grant — `Bash(node scripts/ai.mjs <fn>:*)` — never a blanket `node scripts/ai.mjs:*` (which wouldn't work anyway; the guard folds the function name into the verb on purpose). Only grant it to a function whose behavior is **fixed regardless of its args** (builds a bundle, runs a named transform, commits). **Never allow-list a function that runs arbitrary code or commands from its arguments** — `command_line_generic`, `eval_console_log_replace`, `firebase_storage_function_run_generic`, or any `*_generic` taking a command/code string. Those are `node -e` wearing a function name. The known ones are hard-**denied by the bash guard even if allow-listed** (a floor that runs before the allow decision), so a stray rule can't reopen the hole; still, don't try — and don't add new direct-invocation eval entry points. Legitimate internal use (a committed function that calls one with *fixed* arguments) is unaffected; only direct command-line invocation is blocked — **on every dispatcher**, `ai.mjs` / `r.mjs` / `rl.mjs` / `g.mjs` alike, so none of them routes around the floor.

**Always name the full function, never an alias** — in the rule *and* in the command you run (`ai.mjs` enforces the command half). A rule is matched as **literal text**, so `Bash(node scripts/ai.mjs fb:*)` grants whatever `fb` points to *later*: repoint the alias and the auto-approval silently follows it to a different function, and a freed alias key is claimable by anyone with `a`. (This already happened — `xp` was granted on 2026-07-18 pointing at `examples_page_write`; a day later that function was gone and the grant sat there on an unclaimed name.) Function names are the stable identity — and `function_rename` repoints aliases automatically, so a rename never invalidates a full-name rule. Aliases stay for the human at the keyboard; Claude has no keystroke cost. `permission_gate_run` (part of `q`) fails the build on any rule that names an alias or a dead name.

**To check whether a command would prompt, ask the guard directly:** `node scripts/ai.mjs guard_check "<command>"` returns its verdict — `allow` (auto-approved) / `ask` / `deny` / `silent` (guard abstains → native permission engine decides, so `silent` ≠ "won't prompt"). It's the ground truth (runs the real hook on the command as an inert string — never executes it), so prefer it over hand-grepping the allow-list and reasoning about verb-folding yourself.

## Memory: write it by realpath, not through `~/.claude/`

Your memory dir `~/.claude/projects/-home-j-repos-love/memory` is a **symlink** to `/home/j/backup/love_claude_memory/memory` (its own git repo). **Always spell the realpath** in `Read`/`Edit`/`Write` calls. The `~/.claude/…` spelling lands inside Claude Code's own config directory and trips a **built-in self-settings guard** — the prompt offers "allow Claude to edit its own settings *for this session*". No allow rule overrides that guard, `acceptEdits` doesn't either, and the grant it offers dies with the session, so the human gets re-prompted forever. The realpath reaches the identical files and never prompts.

## Tests (gap)

`q` (`qa_gate_run`) is the repo-wide gate. It runs every gate listed in `qa_gates()` and exits nonzero if any fail. Current members (the list grows — read `js/qa_gates.mjs` for the live set, don't trust this enumeration blindly): `guard_gate_run` (the bash-guard corpus in `data/guard_cases.json`, checked through the real hook), `examples_gate_run` (the `data/examples` corpus) + `examples_orphan_gate_run` (no orphaned example files), `permission_gate_run` + `permission_reachable_gate_run` (allow rules name a live, reachable full function), `app_shared_prefixes_invalid_assert` (no `app_<part>_` prefix squatting a name that isn't a real app), `function_imports_gate_run` (no missing relative imports), `bundle_size_gate_run` (small-by-design client pages stay under their `bundle_size_ceilings()` KiB caps), `ebible_book_divisions_canon_assert` (Bible book divisions stay canonical), plus `memory_hook_gate_run`, `daemons_gate_run`, `dispatcher_scripts_python_assert`, and `function_worker_pool_run_try`. Add a new gate by adding its function to `qa_gates()`.

PROBE `node scripts/ai.mjs zzz_no_such_function` and `node scripts/ai.mjs q` PROBE

Coverage is still partial: most code has no gate, so reasoning in step 4 remains the main guard. The app-scoped e2e tests for app_replace stay separate: `are` (single), `rv` (verify named), `rva` (verify all).
