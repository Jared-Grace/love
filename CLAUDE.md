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
5. **Commit** with `node scripts/ai.mjs ai_git_command_args <full_fn_name> <arg,arg,arg>` (**only the files that command changed**, message = that command; see "Conventions" below) — or `node scripts/ai.mjs ai_git` (message `ai`, **whole tree**) when no named unit made the change, which is also the one to use when you hand-edited anything. Either does **add + commit only** — it's local, but since every Claude shares this one repo, your commit is visible to peers immediately. Push to origin is a separate throttled background job (plain fast-forward, ~5-min interval, never force). Peers never diverge from each other (shared repo = linear history); a push only rejects if *origin* diverged externally, which needs a manual pull.

## Editing with transforms (prefer over text `Edit`)

**Why.** A named transform edits the *AST* — it moves a symbol's definition, every import of it, every caller, and its aliases together, in one operation. That makes it **provable by construction** (a rename can't change behavior) and **auto-mergeable** under parallel-Claudes-on-`main` (it touches whole named units, not one text region a peer may have shifted). Text `Edit` sees only the bytes in front of it; it can't follow a symbol across the files you never opened. So for the shapes below, a transform is faster *and* safer. This isn't a global switch — `Edit` stays the right tool for edits no transform covers (logic inside a body, prose, data, one-off tweaks). Adoption grows per-shape.

**How to run one.** `node scripts/ai.mjs <full_fn_name> <arg> <arg> …` — args are positional strings; a list is one comma-joined arg (`a,b,c`). The alias column below is **for the human at the keyboard**; `ai.mjs` refuses it (see "Two seams" below), so always type the full function name.

**Find a transform / who-calls-what.** `s <substrings>` (`functions_search`, AND-of-substrings over fn *names* — e.g. `s rename`, `s import`) · `i <name>` (`data_identifiers_search`, find callers of a symbol).

| When you want to… | Use | Full function |
|---|---|---|
| Rename a function everywhere (def + imports + callers + aliases) | `function_rename <before> <after>` | `function_rename` |
| Bulk-rename every fn under a name prefix (namespace migration) | `ri <prefix_before> <prefix_after>` | `functions_rename_if_starts_with` |
| Replace an identifier with an expression, inside the fn you name | `ir <name> <expr>` | `function_identifier_replace <fn> <name> <expr>` |
| Add the missing relative imports for a file | `imports <file>` | `file_imports_repair` |
| Create a new empty fn file (one fn per file) | `n <name>` / `nj <name>` | `function_new` / `function_new_js` |
| Copy a fn to a derived new name | `c <plugin> <args>` | `function_copy_generic` |
| Wrap a fn's body in a new wrapper fn | `w <plugin> <args>` | `function_wrap_generic` |
| Extract statements between two markers into a new fn | (no alias) | `marker_functionize` |
| Add / remove a parameter | `pn <fn> <param> <default>` / `pd <fn> <params>` | `function_param_new` / `function_params_delete` |
| Delete a fn **only if** proven unused (else refuses) | `du <name>` | `function_delete_unused` |

**Addressing a node inside a fn: use a selector, not the marker cursor.** The `marker_*` family (a persisted current-marker plus `up`/`down`/`enter`/`leave`/`above`/`below` navigation) is **retired** — its 29 alias keys were freed on 2026-07-25 and archived in `marker_aliases_retired()` so they can be restored if it's revived. It cost a multi-command session per edit and carried a shared mutable cursor, which races under parallel Claudes. Selectors are the replacement: a *selector* is any fn `(ast, …args) → node` (`js_statement_find_call_named`, `js_find_return`, `js_call_named_find`, `js_type_find`), and a *transform* is any fn `(ast, selects, …args)` (`js_statement_wrap_if`, `js_statement_if_return_add`, `js_selects_call_add_after`, `js_expand_selects`). Keeping the two halves separate is what makes them multiply — every new transform written to that signature pairs with every existing selector. Write new node-level transforms to it. `marker_functionize` still works but needs `marker()` calls placed in the code first.

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

**Authoring a whole new function without touching an editor.** This is the point of the vocabulary, and it works today — `js_find_statement_after` and `js_find_body_block` were both written this way, with no `Write` and no `Edit`:

**Write it from names, never from code — then nothing on the path ever prompts.** Every argument below is a *function name* or a *variable name*, and every command is `function_select_apply_args`, which is already granted:

```
node scripts/ai.mjs function_new_js nameonly_probe                              # the file
node scripts/ai.mjs function_param_new js_nameonly_probe wanted ""              # a parameter
node scripts/ai.mjs function_select_apply_args js_nameonly_probe js_find_body_block "" js_block_call_add js_flo_body
node scripts/ai.mjs function_select_apply_args js_nameonly_probe js_call_named_find js_flo_body js_call_argument_named_identifier_set ast,ast
node scripts/ai.mjs function_select_apply_args js_nameonly_probe js_find_body_block "" js_block_return_identifier_add last
node scripts/ai.mjs function_auto js_nameonly_probe                             # imports, atomize, asserts
```

`js_block_call_add <fn>` **writes the call itself** from the callee's own parameters, so a step costs one function name. The generated call arrives with those parameter names in it, and the uniquifier renames any that collide (`ast` → `ast2`) — `js_call_argument_named_identifier_set <param> <local>` is how those get pointed at what you meant. Identifiers never contain commas or dots, so the `_args` splitter carries them fine.

**Why this shape and not a `code` argument.** A grant names a function and covers **every argument it will ever be handed**, so a parameter holding source text can never be granted — `permission_grant_words_unsafe()` refuses `code`, `command`, `path`, `file` and friends by name, and it is right to. A parameter that must be one bare name says exactly one thing, and `js_identifier_expression` **enforces** that rather than hoping (`danger_call()` is refused). That is what makes the whole path approvable once instead of every time.

**`function_select_apply_code` is the escape hatch, and it prompts every time by design.** Reach for it only when what goes in genuinely has to be worked out — a literal, an operator, a nested expression. It exists because the `_args` splitter breaks on **commas and dots**, so `f(a, b)` and `fn.name` are unpassable there; it hands the last argument over whole. If you find yourself using it to write ordinary steps, the missing thing is a name-only atom, so write that instead.

**Address the body with `js_find_body_block`, not `js_type_find BlockStatement`.** The latter works only while the function has exactly one block, so it starts failing the moment the body contains an `if`, a loop, or an inner function — which is to say, as soon as the function is worth writing.

**Adding a unit to a register is `js_object_shorthand_add <name>`, never `js_statement_replace_code`.** Every register here — what an example may name, what a gate must run — is a set of settings whose key and value are the same word, and `js_array_text_add <word>` is its ordered twin. Use them:

```
node scripts/ai.mjs function_select_apply_args example_transforms js_find_declaration_named transforms js_object_shorthand_add js_selects_unwrap
```

**`js_statement_replace_code` replaces the *whole* statement**, so aiming it at a `let notes = { … }` of forty entries replaces all forty with whatever you typed. That silently cost forty-five of them once. Adding one entry is the only shape that cannot do this.

**But `js_array_text_add` writes a *word*, and an ordered register of functions holds *references*.** Point it at `qa_gates()` and the entry arrives as the string `"my_gate_run"`, which the auto pass then rewrites to `my_gate_run.name` — a live-looking line that runs nothing, in the one list whose job is to run things. **`js_array_identifier_add <name>` is the twin for those**, so the rule is: a reading order takes the word, a register of functions takes the name.

**The atom vocabulary — every address × every verb.** These two lists are the whole seam, and they *multiply*: adding one member to either list adds a row or a column, not a cell. That is the reason to write the next atom rather than the next convenience combination. Anything not on these lists is still a text `Edit`; **the gaps are the work**, so check here before reaching for `Edit`.

| Address (selector) | names |
|---|---|
| `js_find_declaration_named <name>` | the line that binds `<name>` — the only address a line that calls nothing has |
| `js_statement_find_call_named <fn>` | the whole statement that calls `<fn>` |
| `js_call_named_find <fn>` | the call expression itself, not its statement |
| `js_find_return` | the `return` |
| `js_type_find <NodeType>` | the one node of that type |
| `js_find_call_name_includes <part>` | the call whose name contains `<part>` |
| `js_function_node_find_named_node <name>` | a named inner function — the whole of it, addressed by its name. **Not** `js_function_node_find_named`, which hands back the walker's record rather than the node, so a verb paired with it cannot find where the node lives |
| `js_find_string_starting_with <prefix>` | the line a bare-string comment sits on — prose is real nodes here, so it works as a bookmark that says what it means |
| `js_find_statement_last` | the last line — takes no argument, and is the one end of a block no neighbour can name |
| `js_find_statement_index <n>` | the *n*-th line, counting from 0 — the address of last resort, and the most fragile (every insert above moves it) |
| `js_find_statement_after <name>` | the line *after* the one binding `<name>` — the only relative address, so it reaches lines that are themselves unnameable |
| `js_find_body_block` | the function's own body block — use this to append lines, not `js_type_find BlockStatement` |
| `js_find_object_containing_text <word>` | one record out of a list of them, found by a word written directly in it (a group by its heading) |

| Verb (transform) | does |
|---|---|
| `js_statement_replace_code <code>` | swap the selected statement for written code |
| `js_statement_delete` | remove it |
| `js_statement_duplicate` | copy it below, uniquifying the copy's binding |
| `js_selects_call_add_before <fn>` / `_after <fn>` | call an existing fn on the line above / below |
| `js_block_call_add <fn>` | call an existing fn at the end of a selected block |
| `js_block_body_add_code <code>` / `_first <code>` | written code at the end / start of a selected block |
| `js_statement_wrap_if` / `js_statement_if_return_add` | build a guard clause in two steps |
| `js_statement_wrap_for_of <name> <list>` | put the line inside a loop over `<list>`, binding each item to `<name>` |
| `js_selects_unwrap` | take the lines back out of a wrapper — the inverse of both wraps |
| `js_call_argument_named_identifier_set <param> <local>` | point one argument of a call at a local, both named — **prefer this**, it needs no code and so stays grantable |
| `js_block_return_identifier_add <local>` | hand back a local at the end of a selected block |
| `js_object_shorthand_add <name>` / `js_object_shorthand_remove <name>` | add / take out one entry of a register (key and value the same word) — never rewrite the whole set |
| `js_array_text_add <word>` / `js_array_text_remove <word>` | add / take out one written word in an ordered register — both refuse a word the list doesn't hold rather than doing nothing quietly |
| `js_array_identifier_add <name>` | add one **name** to an ordered register of functions — what `qa_gates()` and its kind hold, where a written word would read as live and run nothing |
| `js_call_callee_set <fn>` | point one call at a different function, keeping its arguments — refuses if the two take different numbers. **Not** a rename: the old function stays and its other callers keep it |
| `js_object_text_add <key> <sentence>` | add a `key: "sentence"` entry — the shape a note or a label takes. **The sentence must contain no comma or full stop**, or the `_args` splitter tears it into extra arguments |
| `js_object_property_text_add <key> <word>` / `_remove <key> <word>` | add / take out one word in a list held **inside** a record — the two-levels-deep pair |
| `js_call_argument_named_set <param> <code>` | the same, when the value has to be worked out rather than named — needs the prompting `_code` command |
| `js_statement_return_argument_set <code>` | set what a selected return hands back |
| `js_selects_move_after` | move the first selected line to sit after the second — **guarded**, refuses a move that would cross a line it reads or that reads it (needs `function_select_multiple_apply_args`) |
| `js_selects_functionize <new_fn>` | extract first-through-last selection (needs `function_select_multiple_apply_args`) |

**A function joins that second list by taking `(ast, selects, …)` — the shape is a shape, not a naming convention.** `js_statement_delete` and `js_statement_duplicate` predate the seam and were already usable through it, unnoticed, because their second parameter was always a list of nodes. Before writing an atom, check whether one already fits: `s js_,<verb>`.

**Registering a new example now needs no hand editing at all** — list it, group it, and describe it, three commands:

```
node scripts/ai.mjs function_select_apply_args examples_groups js_find_object_containing_text "Single edits" js_object_property_text_add examples,example_my_new_one
node scripts/ai.mjs function_select_apply_args examples_notes js_find_declaration_named notes js_object_text_add example_my_new_one,"what it is there to show"
node scripts/ai.mjs function_auto_multiple examples_groups,examples_notes
```

**Run `ao` after a command edit or the imports are missing.** A command adds the entry; only `ao` adds the `import` the entry now needs. Skipping it fails at run time, not at edit time.

**Known holes:** **add an entry at a chosen position** — every register verb appends, so anything that must sit in a particular place (a rung of a reading order, a gate that runs after another) arrives at the end and is then moved by hand; that is the commonest hand `Edit` left, and `js_array_text_remove` only halves it · rename a local within one node rather than the whole fn · address more than one match at a time (every selector answers exactly one node, and says so when it can't) · reach a record by *position* rather than by a word in it.

**Two things deliberately not built, so nobody builds them by mistake.** **Adding or removing an argument at one call site** — every call here targets a repo function, and `function_param_new` / `function_params_delete` change the definition *and* every caller together; a single-site arity change writes a call that disagrees with its callee. Use those, then `js_call_argument_named_set` to set the one site's value. **Wrapping in `try`** — the generated `catch` would have to be empty, which is the shape that swallows a total failure and reads as success; this repo writes a named `*_try` wrapper instead.

**A verb that reads a node at one depth pairs with only half the addresses.** Two selectors answer at different depths for the same call — `js_call_named_find` hands back the call, `js_statement_find_call_named` hands back the line holding it — so a call-level verb that assumes one of them refuses the other. `js_node_call_get` resolves either to the call; use it at the top of any new call-level verb, and the whole address column stays available.

**Wiring a new function in is a transform too — don't hand-write the call.** The edit after every `n`/`nj`: the helper exists, and it has to be called at one particular point in an existing function. `js_selects_call_add_after` / `js_selects_call_add_before` put the call on the line under or over a selected statement:
```
node scripts/ai.mjs function_select_apply_args my_fn js_statement_find_call_named ready_is js_selects_call_add_after my_helper
```
The only arguments are an address and a **function name** — never a line of code — because the call writes itself: the arguments come from `my_helper`'s own parameters, the result is bound to a local when there is one to bind, and `my_fn` is made `async` if the helper is. `js_block_call_add` is the older relative and can only append at a block's end, which is the wrong place whenever order matters. Both directions exist because a gap has two neighbours and only one of them may be nameable — the last statement of a block has no line after it to select.

**Selecting more than one node** — `selects` is a list on purpose: extracting a span into its own function needs a *first* and a *last*. `function_select_multiple_apply_args` runs one selector once per word in its selection list and hands the transform everything found, so the picks accumulate inside a single command instead of in shared state:
```
node scripts/ai.mjs function_select_multiple_apply_args my_fn js_statement_find_call_named first_step,middle_step js_selects_functionize helper_name
```
That extracts the statements from the one calling `first_step` through the one calling `middle_step` into `helper_name`, inferring its parameters. It replaces the last thing `marker_functionize` was needed for, so nothing requires placing `marker()` calls in the code any more. Same allow-listing rule as above: **never**.

**Run `ao` yourself after editing a `js/*.mjs` file** — `node scripts/ai.mjs function_auto <fn_name>` (`ao` = `function_auto`). The save-time watcher is **retired**, so nothing else canonicalizes your file. `ao` runs the full normalize pipeline (operators→calls, atomize, add/repair imports, add arg-asserts). It does **not** commit when Claude runs it via `ai.mjs` — canonicalize-only. (When the *human* types `ao` it commits, but that's their interactive prompt harness committing per-command, not `function_auto`; Claude's `ai.mjs` invocations bypass that harness. Confirmed 2026-07-25: after `ao`, the tree stayed ` M` until an explicit `ai_git`.) So **always commit yourself after `ao`** (`ai_git_command_args <full_fn_name> <args…>`, naming the transform that made the change — not `ao`, which only canonicalized it), and verify with `git status --short`. (This reverses an older rule: the import-mangling bug that made manual `ao` unsafe is gone — verified 2026-07-20.)

**To sanity-check that a function still loads and normalizes, run `function_auto_check <fn_name>`** — it answers `{name, ok, error_message}` without writing anything, and it is allow-listed. Do **not** call the function bare (`node scripts/ai.mjs js_fold_call_statement`) to "see what it reports": with no arguments it either throws something unrelated to the question or silently does nothing, and the verb prompts the human because no individual transform is granted.

Two `ao` gotchas, both worth designing around:

- **`ao` strips `//` comments.** The AST round-trip drops them. Use **bare string-literal statements** as comments instead — they're real AST nodes and survive (`ao` renders them as `("...")`). This is why the codebase comments that way.
- **Keep underscore fn-name tokens OUT of string-literal comments.** A bare `js_fold` inside a comment string gets rewritten to `js_fold.name`, mangling the prose into a sequence expression. Say "the fold pass" instead.

`+` is intentionally **not** converted to `add(...)` (ambiguous with string concat).

## Conventions

- **Refactors get their own commit.** A symbol rename (via `ri` / `function_rename`) is behavior-preserving, so isolate it — a peer can then verify it trivially and it won't entangle with logic changes. Do the refactor first, then build on top.
- **Never hide a name that is already in scope.** Two ways to break it, one bug behind both: an inner scope rebinding a name an enclosing scope already binds, and a local binding taking the name of a repo function. Pasted-in code brings its own declaration, and every line under it that reads that name silently gets the pasted value instead of the one it was written against. Two scopes *side by side* may reuse a name freely — neither can see the other, so nothing is hidden. `functions_shadowing_gate_run` (in `q`) enforces it against a shrink-only baseline of what the repo already carried, so only new hiding fails; `functions_shadowing_report` lists everything, and `functions_shadowing_baseline_write` re-writes the baseline after a cleanup (it refuses to grow it). Rule two used to cost more than readability: `ao`'s import repair subtracted only the imports and the file's own name, so a local sharing a function's name read as a missing import, and the import it added then read as *used* ever after, because the local's own mentions were what counted it. Both halves are fixed — `js_imports_missing_specify` now asks `js_free_names`, and `js_imports_shadowed_remove` (in the same pass) drops an import that nothing reads because a local stands in front of it. That cleared 74 dead imports across 72 files.
- **Commit message is the command that made the change** — `node scripts/ai.mjs ai_git_command_args <full_fn_name> <arg,arg,arg>` commits the tree with `<full_fn_name> <args…>` as the message. **The arguments are one comma-joined word**, the same shape every other transform takes a list in — because a command line hands each word over as a separate parameter, so a two-parameter function silently keeps the first two words and drops the rest. So a rename lands as `function_rename before after`, not as `ai`. Read back, the log is then a record of *how the repo was built from named commands* rather than an undifferentiated run of one word, and each entry is a `fn` + `args` + `before` + `after` quadruple — the same shape as `data/examples/*.mjs`, so real usage accumulates into a corpus for free.
- **`node scripts/ai.mjs ai_git` (message `ai`) is the honest fallback, not the default.** Use it when no named unit made the change — prose, data, sermon text, logic inside a body. A bare `ai` is then a *signal*: nothing named could do this, so it was hand-edited. That signal is the point, so don't reach for it to save typing; it's the one measurement of how much of the repo the transforms actually cover, and inflating it makes the atoms look less necessary than they are.
- **The args must be the command's real arguments — never a description.** `love` is a **public** repo and the human does **not** read commit messages, so anything in one reaches the public unreviewed. `function_rename before after` is safe because every word is repo content that is already public; a hand-written phrase like `"tidied up the login flow"` is exactly the unreviewed prose the always-`ai` rule existed to prevent, and putting it in the args slot smuggles it back in. If you cannot name a command and its real arguments, that *is* the case for `ai` — take the fallback rather than inventing a description.
- **One command per change — a loop of invocations is a missing command.** If you are about to run the same transform over a list of files or names, stop: **the loop is the specification of the command you should build instead.** Running it N times leaves nothing behind, and it also breaks the message, because a batch has no single command and so forces a *description* into the one place a description must never go. Two shapes, and the first is strictly better: a command that **finds its own set** (`functions_imports_missing_repair` asks `functions_imports_missing`, repairs exactly those, then asks again to prove it worked) needs no list from the caller and cannot drift from what is actually broken; a command that **takes a set** (`function_auto_multiple <a,b,c>`) is for when the set is a real choice rather than something derivable. A *sequence of different* commands is not one command — don't invent a composite for a one-off, take the `ai` fallback and move on.
- **`ai_git_command_args` commits only what the command changed; `ai_git` sweeps the tree.** Every write and every delete that goes through the repo's own file functions is noted, per conversation, in `gitignore/files_to_commit/<session>.txt` (`file_to_commit_add_try`, called from `file_overwrite_uncached` and `file_delete`). `ai_git_command_args` spends that note — `files_to_commit_take` empties it as it reads — and commits exactly the noted paths that git still reports as changed. So `function_rename a b` now labels *a's and b's files* and nothing else, and re-running the command reproduces the commit. `ai_git` deliberately ignores the note and sweeps everything, because **a hand-made edit leaves no note of itself** and committing only the command's files would step straight over the change you called it for.

  **A command that does N independent things commits each one as it lands** — not the batch at the end. Wrap the unit in `function_call_commit(<fn>, [<arg>, …])` and the step commits itself, messaged with its own name and its own real arguments; call `ai_git_noted()` once before the loop, which commits anything already noted as `ai` so the first step can't file someone else's leftovers under its name. `functions_imports_missing_repair` and `functions_rename_generic` (so every `ri`) work this way: a prefix migration now lands as one `function_rename before after` commit per rename. **Committing sooner cannot fix provenance; only committing smaller can** — a sweep measured at 11 minutes lost 31 of its 32 files to a peer's `ai_git`, and no start time avoids that. The line to hold: per-step commits are for **N independent changes**, never for **one change spread over N files** (`function_rename` itself rewrites every caller — that is one commit, correctly). The unit's arguments become the message, so they must be real, nameable, already-public repo content; if the unit takes a derived object, it isn't a replayable command and shouldn't claim to be one.

  Two consequences worth holding onto. **Hand edits plus a transform in one batch: run `ai_git` first**, or the targeted commit leaves your hand edits sitting uncommitted (a peer's sweep will pick them up later, labelled `ai`). And **a targeted commit races peers' sweeps** — a sweep that lands first takes your files, and yours then finds nothing to do. That is now *visible* rather than silent: both commands **return what they committed** (`{swept, repos:[{folder, committed, files}]}`), so `committed: false` everywhere means a peer got there first, not that the commit worked. Never read a commit's success off the exit code — `git_commit_folder` still wraps the commit in `catch_null_async`.
- **Message text is made safe where it's built, not by the caller.** `git_call_message` routes every message through `git_message_safe`, which turns `"` and shell operators into spaces. Without it a quote in an argument silently becomes extra arguments to `git`, and an operator makes the commit throw — where `catch_null_async` swallows it and the commit is simply lost, quietly. Don't hand-escape at a call site; add to the one function if a case is missing.
- **Run the commit yourself** after a batch of edits (from the repo root) — including after `ao`, which does **not** commit when Claude runs it via `ai.mjs` (canonicalize-only; see the `ao` note above). Don't rely on a background watcher or on `ao` to commit: the save-time watcher is retired.

## Two seams: `ai.mjs` for Claude, `r.mjs` for the human

Same dispatcher, two audiences. **Claude runs `node scripts/ai.mjs <full_fn_name>`** — every permission rule names that seam. The bash guard **hard-denies every other `node scripts/…` for Claude** (`r.mjs`/`rl.mjs`/`g.mjs` and the human's utilities alike) — a floor before the allow decision, so no rule can reopen it. This constrains only Claude: the human's own terminal never passes through the hook. The one carve-out is the sandboxed throwaway (`scripts/temp` via the `unshare … --permission` form below), which stays allowed.

- **Full names only.** `ai.mjs` refuses both shorthands — an alias key (`fb`) and an auto-derived acronym (`hud`) — and the error names the function it would have run. A permission rule is matched as *literal text*, so a rule can only ever name what actually runs; shorthand would let a repointed alias silently redirect a granted rule. The human keeps shorthand on `r.mjs`, where keystrokes cost something.
- **Never the `_open` twin.** A `_open` suffix means *and then show it to the human in VS Code* — a real feature of the human's workflow, and meaningless from Claude's seam. So **`ai.mjs` marks the process** (`process_ai_seam_set`) and **`file_open` refuses** (`file_open_seam_assert`), naming the twin to call instead. Call the twin without the suffix: **`function_new`** not `function_new_open`, **`function_copy`** not `function_copy_open`, **`function_rename`** not `function_rename_open`, **`functions_search`** not `functions_search_open`. `permission_editor_open_gate_run` (in `q`) fails the build on any allow rule naming a function that opens an editor, since such a grant only buys a guaranteed error.

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
  **Create that file with the `Write` tool, never `cat > … <<'EOF'`.** `Write`/`Edit` on `scripts/temp/**` are allow-listed (the folder is gitignored, and `scripts_temp_delete` clears it), so the write costs nothing — while a heredoc has no bash-guard parse at all and prompts the human every single time. Both halves are then prompt-free.

If the task genuinely needs to **write** or **persist** (not just read+print), it isn't a throwaway — add a named alias/function in the `r.mjs` system and commit it (in git = reviewable, reusable, DRY), rather than reaching for raw `node -e`.

**Allow-listing a function** (so `node scripts/ai.mjs <fn> <args>` stops prompting) is a *per-function* grant — `Bash(node scripts/ai.mjs <fn>:*)` — never a blanket `node scripts/ai.mjs:*` (which wouldn't work anyway; the guard folds the function name into the verb on purpose). Only grant it to a function whose behavior is **fixed regardless of its args** (builds a bundle, runs a named transform, commits). **Never allow-list a function that runs arbitrary code or commands from its arguments** — `command_line_generic`, `eval_console_log_replace`, `firebase_storage_function_run_generic`, or any `*_generic` taking a command/code string. Those are `node -e` wearing a function name. The known ones are hard-**denied by the bash guard even if allow-listed** (a floor that runs before the allow decision), so a stray rule can't reopen the hole; still, don't try — and don't add new direct-invocation eval entry points. Legitimate internal use (a committed function that calls one with *fixed* arguments) is unaffected; only direct command-line invocation is blocked — **on every dispatcher**, `ai.mjs` / `r.mjs` / `rl.mjs` / `g.mjs` alike, so none of them routes around the floor.

**Never write an allow rule by hand — `.claude/settings.json`'s allow list is generated.** The one source is `permission_grant_names()`; `permission_allow_generated` derives *both* rule families from it (the plain `node scripts/ai.mjs <fn>` form and the one-per-function `<command> <fn>` form), `permission_settings_allow_write` renders the file, and `permission_settings_allow_assert` (in `q`) fails if the file and the list disagree. Editing the JSON directly just makes that gate red.

**Adding a grant is one command: `permission_grant_add <full_fn_name>`.** It asks `permission_grant_refusals` **first and refuses to write the rule at all** if the answer is non-empty — an alias, a dead name, an `_open` twin, a function on the guard's deny floor, one that reaches a command-running function, or one whose parameter reads as a command or a path. So an unsafe grant is now unconstructible rather than written and then caught by `permission_grants_gate_run` afterwards. Naming a function that already holds a rule changes nothing and says so, so it is safe to re-run. It writes the names list, normalizes it, and regenerates the settings file in one go; `permission_grant_names_rewrite` renders the list from itself and must leave the file byte-identical, which is how you check the generator and the file still agree. **It is deliberately not itself allow-listed** — a command that writes allow rules must never be auto-approved, so the human sees and approves each new grant by name.

**Always name the full function, never an alias** — in the rule *and* in the command you run (`ai.mjs` enforces the command half). A rule is matched as **literal text**, so `Bash(node scripts/ai.mjs fb:*)` grants whatever `fb` points to *later*: repoint the alias and the auto-approval silently follows it to a different function, and a freed alias key is claimable by anyone with `a`. (This already happened — `xp` was granted on 2026-07-18 pointing at `examples_page_write`; a day later that function was gone and the grant sat there on an unclaimed name.) Function names are the stable identity — and `function_rename` repoints aliases automatically, so a rename never invalidates a full-name rule. Aliases stay for the human at the keyboard; Claude has no keystroke cost. `permission_gate_run` (part of `q`) fails the build on any rule that names an alias or a dead name.

**To check whether a command would prompt, ask the guard directly:** `node scripts/ai.mjs guard_check "<command>"` returns its verdict — `allow` (auto-approved) / `ask` / `deny` / `silent` (guard abstains → native permission engine decides, so `silent` ≠ "won't prompt"). It's the ground truth (runs the real hook on the command as an inert string — never executes it), so prefer it over hand-grepping the allow-list and reasoning about verb-folding yourself.

## Memory: write it by realpath, not through `~/.claude/`

Your memory dir `~/.claude/projects/-home-j-repos-love/memory` is a **symlink** to `/home/j/backup/love_claude_memory/memory` (its own git repo). **Always spell the realpath** in `Read`/`Edit`/`Write` calls. The `~/.claude/…` spelling lands inside Claude Code's own config directory and trips a **built-in self-settings guard** — the prompt offers "allow Claude to edit its own settings *for this session*". No allow rule overrides that guard, `acceptEdits` doesn't either, and the grant it offers dies with the session, so the human gets re-prompted forever. The realpath reaches the identical files and never prompts.

## Memory: mark live pointers as `$fn name`

A memory note names functions constantly, and most of those names are **narrative** — a build log, or the record of a rename. Those must never be rewritten: "`list_empty` was renamed to `list_clear`" becomes nonsense if either name follows a later rename, and nothing in a name's *shape* tells a stale reference apart from a deliberate record of one.

So a function name in a note is **frozen by default**. When it is a *live pointer* into the code — "the judgment lives in X", "single-sourced in X" — write it `` `$fn X` `` instead:

- `function_rename` **rewrites** every `$fn before` across memory, and **reports** the notes still writing that name bare so a human judges those. Aliases already follow a rename; memory is the other named referrer.
- `memory_fn_reference_gate_run` (in `q`) fails if any `$fn X` names no live function. A marker is a *claim*, so it also catches a name that never existed at all — the failure a rename could never catch.

**Mark the name, not the call:** `` `$fn list_empty_not_is` ``, with arguments given separately. To write *about* a marker rather than use one, put the placeholder in upper case — the reader matches lower case only, so `$fn NAME` is excluded by construction.

**`$<kind> <argument>` is the shape, not just this one marker.** `$` already means "a token for tooling to resolve" in this repo (the `$`-macro system, the `$`-expander in the auto pass), so prose is the same sigil in a new medium — and another kind costs one reader plus one gate rather than a new convention. `$fn` is the only member today; don't add one speculatively.

A dollar cannot occur in a function name, so nothing written in code can spell a marker. That is the reason for the sigil: the earlier bracket form sat one character-class boundary away from real calls like `html_update_latest_promote_deploy_app_fn(app_g)` — correct, but a near-miss. `memory_fn_reference_cases` keeps that call-shaped case as proof.

**Nothing requires you to mark anything** — an unmarked name behaves exactly as it always has. Marking is opt-in and earns its keep by surviving renames.

## Tests (gap)

`q` (`qa_gate_run`) is the repo-wide gate. It runs every gate listed in `qa_gates()` and exits nonzero if any fail. Current members (the list grows — read `js/qa_gates.mjs` for the live set, don't trust this enumeration blindly): `guard_gate_run` (the bash-guard corpus in `data/guard_cases.json`, checked through the real hook), `examples_gate_run` (the `data/examples` corpus) + `examples_orphan_gate_run` (no orphaned example files), `permission_gate_run` + `permission_reachable_gate_run` (allow rules name a live, reachable full function), `app_shared_prefixes_invalid_assert` (no `app_<part>_` prefix squatting a name that isn't a real app), `function_imports_gate_run` (no missing relative imports) + `functions_unbound_gate_run` (no name read that nothing binds and no function answers to — the same error with no import to add, so it ratchets against `data/unbound_baseline.json` rather than against zero), `bundle_size_gate_run` (small-by-design client pages stay under their `bundle_size_ceilings()` KiB caps), `ebible_book_divisions_canon_assert` (Bible book divisions stay canonical), plus `memory_hook_gate_run`, `daemons_gate_run`, `python_mirrors_assert` (the lists the python bash-guard imports are **generated** from their JS source by `python_mirrors_write` — `NODE_DISPATCHER_SCRIPTS`, `DISPATCHER_COMMANDS_FN_NAMED`, and the deny floor's `DENIED_DISPATCHER_FUNCTIONS`, whose source is `functions_command_seams()`; one source cannot disagree with itself, and a generated literal is imported rather than read at run time because a read that could fail would fail **open**), and `function_worker_pool_run_try`. Add a new gate by adding its function to `qa_gates()`.

Coverage is still partial: most code has no gate, so reasoning in step 4 remains the main guard. The app-scoped e2e tests for app_replace stay separate: `are` (single), `rv` (verify named), `rva` (verify all).
