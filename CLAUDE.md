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
3. **Make targeted edits, never full-file overwrites of an existing file.** Use `Edit` (exact-snippet replacement): a peer's change elsewhere survives, and a same-region conflict fails *loudly* instead of silently clobbering. Full-file `Write` is fine only for brand-new files.
4. **Before committing**, run `git log <baseline>..HEAD -- <read-set>` and reason: *do any of these peer changes break mine?* If yes, reconcile before committing.
5. **Commit** with `node scripts/r.mjs ai_git` (whole tree, message `ai`). This does **add + commit only** — it's local, but since every Claude shares this one repo, your commit is visible to peers immediately. Push to origin is a separate throttled background job (plain fast-forward, ~5-min interval, never force). Peers never diverge from each other (shared repo = linear history); a push only rejects if *origin* diverged externally, which needs a manual pull.

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

## Tests (gap)

There is **no repo-wide test gate yet** — the `q` / `portfolio_qa_tests_run` alias is dangling (no such function). The real automated tests are app-scoped e2e for app_replace: `are` (single), `rv` (verify named), `rva` (verify all). A universal correctness gate is a TODO; until it exists, reasoning in step 4 is the main guard.
