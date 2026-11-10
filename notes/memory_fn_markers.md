# Memory: mark live pointers as `$fn name`

A memory note names functions constantly, and most of those names are **narrative** — a build log, or the record of a rename. Those must never be rewritten: "`list_empty` was renamed to `list_clear`" becomes nonsense if either name follows a later rename, and nothing in a name's *shape* tells a stale reference apart from a deliberate record of one.

So a function name in a note is **frozen by default**. When it is a *live pointer* into the code — "the judgment lives in X", "single-sourced in X" — write it `` `$fn X` `` instead:

- `function_rename` **rewrites** every `$fn before` across memory, and **reports** the notes still writing that name bare so a human judges those. Aliases already follow a rename; memory is the other named referrer.
- `memory_fn_reference_gate_run` (in `q`) fails if any `$fn X` names no live function. A marker is a *claim*, so it also catches a name that never existed at all — the failure a rename could never catch.

**Mark the name, not the call:** `` `$fn list_empty_not_is` ``, with arguments given separately. To write *about* a marker rather than use one, put the placeholder in upper case — the reader matches lower case only, so `$fn NAME` is excluded by construction.

**`$<kind> <argument>` is the shape, not just this one marker.** `$` already means "a token for tooling to resolve" in this repo (the `$`-macro system, the `$`-expander in the auto pass), so prose is the same sigil in a new medium — and another kind costs one reader plus one gate rather than a new convention. `$fn` is the only member today; don't add one speculatively.

A dollar cannot occur in a function name, so nothing written in code can spell a marker. That is the reason for the sigil: the earlier bracket form sat one character-class boundary away from real calls like `html_update_latest_promote_deploy_app_fn(app_g)` — correct, but a near-miss. `memory_fn_reference_cases` keeps that call-shaped case as proof.

**Nothing requires you to mark anything** — an unmarked name behaves exactly as it always has. Marking is opt-in and earns its keep by surviving renames.
