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
5. **Commit** with `node scripts/r.mjs ai_git` (add + commit + push, whole tree, message `ai`). If the push is rejected, `pull`, re-run step 4 against the new commits, then re-push.

## Conventions

- **Refactors get their own commit.** A symbol rename (via `ri` / `function_rename`) is behavior-preserving, so isolate it — a peer can then verify it trivially and it won't entangle with logic changes. Do the refactor first, then build on top.
- **Commit message is always exactly `ai`.**
- **Run `node scripts/r.mjs ai_git` yourself** after a batch of edits (from the repo root). Don't rely on a background watcher to commit — it may be down.

## Tests (gap)

There is **no repo-wide test gate yet** — the `q` / `portfolio_qa_tests_run` alias is dangling (no such function). The real automated tests are app-scoped e2e for app_replace: `are` (single), `rv` (verify named), `rva` (verify all). A universal correctness gate is a TODO; until it exists, reasoning in step 4 is the main guard.
