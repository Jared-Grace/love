## Editing with transforms (prefer over text `Edit`)

**Why.** A named transform edits the *AST* — it moves a symbol's definition, every import of it, every caller, and its aliases together, in one operation. That makes it **provable by construction** (a rename can't change behavior) and **auto-mergeable** under parallel-Claudes-on-`main` (it touches whole named units, not one text region a peer may have shifted). Text `Edit` sees only the bytes in front of it; it can't follow a symbol across the files you never opened. So for the shapes below, a transform is faster *and* safer. This isn't a global switch — `Edit` stays the right tool for edits no transform covers (logic inside a body, prose, data, one-off tweaks). Adoption grows per-shape.

**How to run one.** `node scripts/ai.mjs <full_fn_name> <arg> <arg> …` — args are positional strings; a list is one comma-joined arg (`a,b,c`). The alias column below is **for the human at the keyboard**; `ai.mjs` refuses it (see "Two seams" below), so always type the full function name.

**Find a transform / who-calls-what.** `s <substrings>` (`functions_search`, AND-of-substrings over fn *names* — e.g. `s rename`, `s import`) · `i <name>` (`data_identifiers_search`, find callers of a symbol).

**When `s` finds nothing, the first suspect is your vocabulary, not the name.** `functions_name_vocabulary <count>` derives, from the names themselves, what this repo actually calls things — the word a name ends in (`get` 161, `generic` 156, `is` 137, `assert` 104, **`multiple` 102**, `set`, `add`, `run`, `try`, `remove`) and the area it starts in (`app` 1445, `js` 904, `list` 494, `html` 448, `function` 439, `functions` 120). It is derived rather than written down, so it cannot drift from what is there. **Translate your words into these, then search again** — this is one command and it is the cheapest step in the whole discovery path. The measured failure it answers: `permission_grant_add_multiple` was hunted as "batch refusal check" and missed, when `s grant,multiple` returns it and nothing else. The name was perfect; the asker's words were not, and no naming discipline can close a gap that sits in the asker.

**The swaps worth trying, measured against every search ever run:** `contains`→`includes` · `load`/`fetch`→`read` · `save`/`store`→`write` · `create`/`make`→`new` or `add` · `check`/`verify`/`validate`→`assert` or `is` · `count`/`length`→`size` · `doc`/`comment`→`prose` · `batch`/`sweep`/`all`→`multiple` · `find`/`lookup`→`search` · `delete`→`remove`.

**But do not expect this to rescue much, and do not read an empty search as a failure.** Of 959 distinct searches ever run, 226 return nothing today and only a handful are rescued by any word swap — the rest are **correctly** empty. `clamp`, `minimum`, `random,number`, `font,family`, `imports,transitive` all found nothing because none of it is there, which is the true answer and a useful one. Treating empty as a defect is what turns one honest "no" into a hunt; the thing worth checking is your vocabulary **once**, not the repo's completeness forever.

**When that still finds nothing, search by what a function is FOR: `functions_prose_search <substrings>`.** Same shape as `s` — substrings joined by commas, all required — but matched against every line of every function's own account of itself, answering `{name, first line}` so a hit list stays scannable. It exists because `s` can only be used by somebody who already half knows the name, and that failed measurably: of six capabilities looked for and missed on 2026-07-28, the one no name search could ever have reached was `permission_grant_add_multiple`, which answers the question behind repeating the refusal check and shares **not one word** with it. `functions_prose_search batch,approval` finds it and nothing else. About 1.7s over the whole repo, so it is cheap enough to reach for first.

**Reach for it before writing anything.** The repo's measured waste is discoverability, not capability — see the loop reading below — so the cheapest move by a wide margin is asking whether the thing exists, in the two ways that can miss differently: `s` by name, then `functions_prose_search` by meaning. A capability nobody can find gets built twice and neither copy gets the other's fixes.

**But finding nothing there is weak evidence of absence, and the answer says how weak.** Only about a quarter of the repo's functions say anything about themselves — the search reports `searched` and `silent` beside every result (1679 and 5030 on 2026-07-28), because an empty answer drawn from a quarter of the repo reads exactly like an empty answer drawn from all of it, and that is the very mistake the search exists to stop. **Two searches finding nothing is a reason to look harder, never a licence to conclude it isn't there** — the prose corpus grows only when somebody writes a line about what a function is for, so the honest reading of `silent: 5030` is that the index is young.

| When you want to… | Use | Full function |
|---|---|---|
| Rename a function everywhere (def + imports + callers + aliases) | `function_rename <before> <after>` | `function_rename` |
| Bulk-rename every fn under a name prefix (namespace migration) | `ri <prefix_before> <prefix_after>` | `functions_rename_if_starts_with` |
| Replace an identifier with an expression, inside the fn you name | `ir <name> <expr>` | `function_identifier_replace <fn> <name> <expr>` |
| Add the missing relative imports for a file | `imports <file>` | `file_imports_repair` |
| Create a new empty fn file (one fn per file) | `n <name>` / `nj <name>` | `function_new` / `function_new_js` |
| Create a whole named constant — file, meaning line, value — nothing left to finish by hand | (no alias) | `function_new_getter <name> <meaning> <value>` |
| Create a whole **thin wrapper** — file, matching parameters, the delegating call, the `await`, the `return`, the import — in one command | (no alias) | `function_wrap <wrapped> <name_new>` — the wrapped fn is named first, the new one second; only the prose is left to add |
| Create a whole **sweep** — the command that asks one question of several names — from the single form's name | (no alias) | `function_new_sweep <single> <name_new>` — the single form is named first, the new one second; only the prose is left to add |
| Copy a fn to a derived new name | `c <plugin> <args>` | `function_copy_generic` |
| Wrap a fn's body in a new wrapper fn | `w <plugin> <args>` | `function_wrap_generic` |
| Extract statements between two markers into a new fn | (no alias) | `marker_functionize` |
| Add / remove a parameter | `pn <fn> <param> <default>` / `pd <fn> <params>` | `function_param_new` / `function_params_delete` |
| Rename **several** names inside one fn in one command — the words in one list, what each becomes in the other | (no alias) | `function_identifier_replace_multiple <fn> <a,b,c> <x,y,z>` — the shape after `function_copy`, where every local the copy brought along wants a new name at once |
| Add **several** parameters to one fn in one command | (no alias) | `function_params_new <fn> <a,b,c> <defaults>` — the singular is a thin wrapper over it, so running the singular in a loop is spending N commands on a capability that was already there |
| Canonicalize a fn **and say whether it still loads**, in one command | (no alias) | `function_auto_checked <fn>` |
| The same over a list, answering per name | (no alias) | `function_auto_multiple_checked <a,b,c>` |
| Ask the log which two steps get run back to back most — what to compose next | (no alias) | `ai_log_pairs_frequent <count>` |
| Ask the log which step gets run over and over in a row — what to turn into one sweep | (no alias) | `ai_log_loops_frequent <count>` |
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

**Reach for `function_select_apply_args_auto` instead — same five arguments, then it canonicalizes.** A transform that writes a call the file does not yet import leaves it reading a name nothing binds: `ao` is what adds that import, so until it runs the edit is only most of the way done, and a commit taken in the gap records a file that does not load. The two halves are always run together, always in that order, and stopping between them leaves a state nobody wants — which is the test a composite has to pass. Both halves stay for the rare time only one is wanted.

**One edit over several functions is `functions_select_apply_args <a,b,c> <selector> <selector_args> <transform> <transform_args>`.** Same shape as the single, with the target names as one comma-joined word — because *the same edit reaching a list of files is what a collapse always looks like*, and running the single command four times leaves the repetition in the history instead of in the code. **It commits each function as it lands**, messaged with `function_select_apply_args_auto` and that function's own real arguments, so a peer's sweep can take at most one step's work rather than the whole run. Its twin at the far end is **`functions_replace <a,b,c> <keeper>`**, which collapses several names onto one the same way, one `function_replace` commit per name — that pair is the whole arc of a constant collapse.

```
node scripts/ai.mjs functions_select_apply_args app_x_font_size,app_y_font_size js_find_declaration_named v js_declaration_call_set app_shared_font_size_label
node scripts/ai.mjs functions_replace app_x_font_size,app_y_font_size app_shared_font_size_label
```

**Finish a collapse by deleting the wrappers, not by keeping them.** Once every getter hands back the same shared value they all do the same work under different names, and `functions_duplicates_gate_run` fails on exactly that — it asks for them to go rather than to stay as covers over the one. Their per-site prose goes with them, so the shared getter's own account has to carry the meaning all of them had.

**A value containing a dot reaches a transform fine — on Claude's seam only.** It used not to: every granted runner split its joined argument on commas *and* dots, so `0.85em` arrived as `0` and `85em` and the transform refused on argument count, which ruled out font sizes, versions and file names — the values most likely to be duplicated constants. **The full stop was only ever there to forgive a typo**, since the human types these lists at a keyboard and the two keys sit beside each other. Claude writes the command out whole, so there is no typo to forgive; `text_comma_dot_separators` asks `process_ai_seam_is` and hands back the comma alone on `ai.mjs`, both on `r.mjs`. So `js_block_local_text_add v,0.85em` now works, and **the comma is still the only separator you may not put in a value.**

**Authoring a whole new function without touching an editor.** This is the point of the vocabulary, and it works today — `js_find_statement_after` and `js_find_body_block` were both written this way, with no `Write` and no `Edit`:

**First ask whether it is a thin wrapper, because that shape is already one command.** `function_wrap <wrapped> <name_new>` writes the file, gives it the wrapped function's own parameters, calls it with them, awaits it, returns the result, and adds the import — the whole of the sequence below, from two names. `function_wrap js_call_argument_named_text_set js_probe` produced this and nothing was left to finish:

```js
import { js_call_argument_named_text_set } from "./js_call_argument_named_text_set.mjs";
export async function js_probe(ast, selects, param_name, word) {
  let r = await js_call_argument_named_text_set(ast, selects, param_name, word);
  return r;
}
```

**Then ask whether it is a sweep, because that shape is one command too.** The loops reading below says the same thing every time: the commonest missing command is the one that asks a question of several names at once, and every sweep written so far was written by hand. `function_new_sweep <single> <name_new>` writes the whole of it from the single form's own parameter list — the first parameter becomes `names_comma`, everything after it is carried through unchanged, and the body is the one every sweep has: take the joined word apart, call the single form once per name, answer under the name that asked. `function_new_sweep function_dependency_path zzz_probe` produced this, which is byte for byte the body `functions_dependency_path` had been carrying by hand:

```js
export async function zzz_probe(names_comma, f_name_to) {
  let names = text_split_comma_dot_trim(names_comma);
  async function answer_one(name_one) {
    let answer_found = await function_dependency_path(name_one, f_name_to);
    return answer_found;
  }
  let found = await list_map_async_record_try(names, answer_one);
  return found;
}
```

**The one thing it cannot tell you is whether the single form's first parameter is a name.** It writes `names_comma` in that slot and hands each word straight over, so a single form whose first parameter is a *function value* rather than a name — `function_aliases_for(fn)` reads `fn.name` — generates a sweep that answers nothing under every name, silently, because the failure lands inside the per-item catch. Read the single form's first parameter before generating; if it is not a name, the sweep is not this shape.

`list_map_async_record_try` is that body's one shared half — one answer per item under the item, an item whose answer throws answered as nothing rather than ending the run, and one at a time so a lambda carrying a memo between items still shares it. Three sweeps had hand-written it before it had a name; reach for it directly when a sweep needs a body the generator cannot write.

Only the prose is yours to add afterwards (`js_block_prose_add`). This repo is mostly thin wrappers — a plain twin beside a `_generic`, an `_after` beside a `_before` — so reach here before the long way, and keep the long way for a body that genuinely does something new. Two sessions running have walked the six commands below to build what this one line builds.

**Write it from names, never from code — then nothing on the path ever prompts.** Every argument below is a *function name* or a *variable name*, and every command is `function_select_apply_args`, which is already granted:

```
node scripts/ai.mjs function_new_js nameonly_probe                              # the file
node scripts/ai.mjs function_param_new js_nameonly_probe wanted ""              # a parameter
node scripts/ai.mjs function_select_apply_args js_nameonly_probe js_find_body_block "" js_block_call_add js_flo_body
node scripts/ai.mjs function_select_apply_args js_nameonly_probe js_call_named_find js_flo_body js_call_argument_named_identifier_set ast,ast
node scripts/ai.mjs function_select_apply_args js_nameonly_probe js_find_body_block "" js_block_return_identifier_add last
node scripts/ai.mjs function_auto js_nameonly_probe                             # imports, atomize, asserts
```

`js_block_call_add <fn>` **writes the call itself** from the callee's own parameters, so a step costs one function name. The generated call arrives with those parameter names in it, and the uniquifier renames any that collide (`ast` → `ast2`) — **`js_call_arguments_same_names_set` points every one of those back in a single command and takes no arguments**, which is the line to write after a generated call; `js_call_argument_named_identifier_set <param> <local>` is the per-argument verb, for the ones whose value is a *different* name. Identifiers never contain commas or dots, so the `_args` splitter carries them fine.

**Why this shape and not a `code` argument.** A grant names a function and covers **every argument it will ever be handed**, so a parameter holding source text can never be granted — `permission_grant_words_unsafe()` refuses `code`, `command`, `path`, `file` and friends by name, and it is right to. A parameter that must be one bare name says exactly one thing, and `js_identifier_expression` **enforces** that rather than hoping (`danger_call()` is refused). That is what makes the whole path approvable once instead of every time.

**`function_select_apply_code` is the escape hatch, and it prompts every time by design.** Reach for it only when what goes in genuinely has to be worked out — a literal, an operator, a nested expression. It exists because the `_args` splitter breaks on **commas**, so `f(a, b)` is unpassable there; it hands the last argument over whole. (A dot is fine on Claude's seam now — for `fn.name` as a *value*, reach for `js_call_argument_named_property_set`, which takes the two halves as names.) If you find yourself using it to write ordinary steps, the missing thing is a name-only atom, so write that instead.

**Take `function_select_apply_code_auto` when you do reach for it**, exactly as you take `_args_auto` over `_args`. The `_auto` twin existed on the list-carrying side only, so every line of *written code* went in through a command that stopped one step short of adding the import — and written code is the shape most likely to name a function the file has never imported, which put the missing step precisely where it hurt most. Both prompt the same; the plain one just leaves the file not loading.

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
| `js_call_named_find_index <fn> <n>` / `js_statement_find_call_named_index <fn> <n>` | **which one you meant**, when `<fn>` is called more than once — the call, or the line holding it. The two above answer exactly one node and so refuse a name called twice, correctly; until these, every verb was unreachable in that file until one of the calls went away. Written order, counting from 0, and as fragile as `js_find_statement_index` for the same reason — prefer a name called once |
| `js_find_return` | the `return` |
| `js_type_find <NodeType>` | the one node of that type |
| `js_find_call_name_includes <part>` | the call whose name contains `<part>` |
| `js_function_node_find_named_node <name>` | a named inner function — the whole of it, addressed by its name. **Not** `js_function_node_find_named`, which hands back the walker's record rather than the node, so a verb paired with it cannot find where the node lives |
| `js_find_string_starting_with <prefix>` | the line a bare-string comment sits on — prose is real nodes here, so it works as a bookmark that says what it means |
| `js_find_statement_last` | the last line — takes no argument, and is the one end of a block no neighbour can name |
| `js_find_statement_index <n>` | the *n*-th line, counting from 0 — the address of last resort, and the most fragile (every insert above moves it) |
| `js_find_statement_after <name>` | the line *after* the one binding `<name>` — the only relative address, so it reaches lines that are themselves unnameable |
| `js_find_call_index_argument <fn> <index> <place>` | one thing handed to **one of several** calls to `<fn>` — which call (from 0, written order), then which argument (from 1). `js_find_call_argument <fn> <place>` is the same address where `<fn>` is called exactly once, which is the rarer half: a gathering function is called wherever something is gathered, so an **inline record built into a `list_add`** needs this one |
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
| `js_block_local_number_add <name> <n>` / `js_block_local_text_add <name> <word>` / `js_block_local_record_add <name>` / `js_block_local_list_add <name>` | bind a name to a **starting value** — a count, a word, an empty record, an empty list. The first line of every function that tallies or gathers, and the line whose absence used to push any such function straight onto the prompting `_code` path. All four are one `js_block_local_add_generic` wearing a different starting value, so the written value never reaches a granted command's arguments. Whole numbers only, and one comma-free word only — the `_args` splitter breaks on a comma, so nothing holding one arrives in one piece. A full stop is fine on Claude's seam, so `0.85em` and a file name both pass |
| `js_statement_wrap_guard` | turn the chosen line into a guard — *if this, then stop here* — in **one** command. Reach for this; the two halves below are for the rare time only one of them is wanted |
| `js_statement_wrap_if` / `js_statement_if_return_add` | the two halves, run apart. Between them the file holds a test with an empty body — a line that reads as a decision and decides nothing |
| `js_statement_wrap_for_of <name> <list>` | put the line inside a loop over `<list>`, binding each item to `<name>` |
| `js_selects_unwrap` | take the lines back out of a wrapper — the inverse of both wraps |
| `js_call_argument_named_identifier_set <param> <local>` | point one argument of a call at a local, both named — **prefer this**, it needs no code and so stays grantable |
| `js_declaration_call_set <fn>` | point a chosen **line** at a call to `<fn>`, keeping the name it binds — the far side of the argument list from the row below, and the one a `let v = "0.85em"` needs, since a value simply bound to a name sits in no call for the other verb to reach |
| `js_selects_prose_add_after <sentence>` / `_before` | write one line of an account **beside a chosen line**, in the block that line sits in — the address is any selector, so this reaches every line an address can name. Its older relative below can only write at the top of a block, which is where a *function's* account belongs and nowhere near the *step* being accounted for; a line explaining one working-out in the middle of a function was a hand edit every time until these. Both directions exist because a gap has two neighbours and only one may be nameable. Same sentence rule: no comma, no full stop |
| *(no code twin of the row above, on purpose)* | there is deliberately **no `js_selects_code_add_*`** — a transform whose parameter reads as *code* is reachable through the auto-approved `function_select_apply_args`, so `functions_selects_unsafe_gate_run` holds that set shrink-only and `functions_selects_unsafe_baseline_write` **refuses to grow it**. One was built on 2026-08-02 and deleted the same day for exactly this. To write a line beside a chosen line, use the safe route the repo already took: `js_selects_call_add_after` / `_before` (the call writes itself from the named function's own parameters), or the `js_block_local_*_add` family, each of which turns a *name or plain value* into the code inside one grandfathered `_generic` |
| `js_block_prose_add <sentence>` | write one line of the function's **own account of itself** at the top of a chosen block. Prose here is a real statement rather than a stripped comment, so it was always writable in principle and never once by name — which left every newly authored function to be finished by hand just to say what it is for. One sentence, no comma — a full stop is fine on Claude's seam |
| `function_prose_add <fn> <sentence>` | **reach for this one, not the row above, when the account you are adding to is a whole function's.** It is a command rather than a transform, so the sentence is a whole argument and **a comma is fine** — which is the difference that matters, since the transforms above are reached through the joined-list runner and an explanation worth writing almost always has a comma in it. The line lands after everything the function already says and above the first thing it does, so it elaborates the summary rather than displacing it. It canonicalizes afterwards and does not commit. Measured motive: of the last 400 commits made under no command's name, 63 were a block added to one file |
| `function_prose_numbered <fn>` → `function_prose_set <fn> <position> <sentence>` | **change a line a function already says about itself** — read the numbered account with the first, replace one line with the second. Adding had a command and correcting did not, so every correction was a hand edit; and a wrong line is worse than a missing one, because the missing one is silent and the wrong one is read and believed. Counting starts at **1**. The sentence is a whole argument, so **a comma is fine**, and it is quoted before it is written. The old statement keeps its place — only what it says is replaced — so the line cannot drift among its neighbours. Out of range refuses with the count it actually found. Canonicalizes afterwards, commits nothing |
| `function_list_name_add <list_fn> <name>` | **join a register in one command** — puts `<name>` at the end of the list `<list_fn>` hands back and adds the import it needs. This is how a new gate joins `qa_gates`, and it was two hand edits every time: the line in the list and the line at the top of the file. Also a command rather than a transform, so it needs no address; the name is read through `js_identifier_expression` and refused if it is anything more than a name, and checked against the functions that exist, so a register cannot come to hold a word nothing answers to. It refuses a function writing out **more than one** list rather than choosing between them. Canonicalizes afterwards, commits nothing. Measured motive: of the last 400 commits made under no command's name, 76 were a line or two added to one file, and `js/qa_gates.mjs` is the file that turns up most among them |
| `js_call_argument_named_call_set <param> <fn>` | point one argument of a call at a **call to `<fn>`**, written from that function's own parameters — so a zero-argument getter arrives as itself. This is the verb the "Duplicated constants" work item needed: routing a spelled-out constant through its getter used to need a line of source, which is the one shape no standing approval can cover |
| `js_call_arguments_same_names_set` | **finish a generated call in one command** — takes no arguments. `js_block_call_add` writes a call from the callee's own parameters and uniquifies every name that collides with one the calling function already binds, so a helper wired into a function whose parameters are named the same arrives reading `ast2`, `selects2`, `sentence2`, which nothing binds. Pointing those back was one `js_call_argument_named_identifier_set` per argument, run after **every** generated call — the shape this repo reads as a missing command. Nothing here is a choice, so nothing is an argument: the callee is asked what its parameters are, the caller what it binds, and every name on both lists is pointed at itself. A parameter the caller has no binding for is left exactly as it stands |
| `js_call_argument_named_text_set <param> <word>` | point one argument of a call at a **written word**, naming the argument as the called function knows it. The rest of the family reaches a name, a call, a field and a getter; a plain piece of writing was the shape left over, and it is what every `property_get(node, "body")` needs. The word is quoted before it is written, so nothing handed in here can arrive as code — which is what keeps it grantable. One comma-free word |
| `js_call_argument_named_property_set <param> <object> <property>` | point one argument of a call at **one field of a local**, all three named. The family could reach a whole local and a call; a field of a local was the shape left over, and it is the commonest one *inside a loop*, where what is in scope is the record and what is wanted is one thing out of it. `js_property_expression` builds it from two names and refuses anything that is more than a name, so this stays grantable |
| `js_block_return_identifier_add <local>` | hand back a local at the end of a selected block |
| `js_object_shorthand_add <name>` / `js_object_shorthand_remove <name>` | add / take out one entry of a register (key and value the same word) — never rewrite the whole set |
| `js_array_text_add <word>` / `js_array_text_remove <word>` | add / take out one written word in an ordered register — both refuse a word the list doesn't hold rather than doing nothing quietly |
| `js_array_text_add_after <word> <neighbour>` / `_before` | put a word at a **chosen place** rather than at the end, naming the entry it sits beside — both sides exist because the head of a list has no neighbour above it to name |
| `js_array_text_move <word> <neighbour>` | move a word **already in** an ordered register to sit after another one — the take-out-and-put-back that used to be two commands and read as two changes. Both words are looked up before anything moves, so a wrong neighbour refuses against the list you meant; it also refuses moving a word after itself |
| `js_array_text_call_set <word> <fn>` | point one **written entry** of a register at a call to `<fn>`, leaving it where it sits — the third thing an entry is ever made of, after a word and a name, and the one a spelled-out constant becomes when its getter already exists. In place rather than remove-then-add, because a register briefly short one entry is a state nobody wants and a peer's sweep can commit it |
| `js_array_identifier_add <name>` | add one **name** to an ordered register of functions — what `qa_gates()` and its kind hold, where a written word would read as live and run nothing |
| `js_array_identifier_remove <name>` / `js_array_identifier_move <name> <neighbour>` | the same pair on the **name** side: take one out, or move one already there to sit after another. `qa_gates()` is the list the repo edits most, and until these it could only grow — retiring or reordering a gate was a hand edit, so it landed under a message naming no command at all |
| `js_array_identifier_add_after <name> <neighbour>` / `_before` | put a **name** at a chosen place rather than at the end — the name-side twin of the word-side pair above, and the one `qa_gates()` wants, since a gate that must run after another one arrived at the end and was then moved by a second command |
| `js_call_callee_set <fn>` | point one call at a different function, keeping its arguments — refuses if the two take different numbers. **Not** a rename: the old function stays and its other callers keep it |
| `js_object_text_add <key> <sentence>` | add a `key: "sentence"` entry — the shape a note or a label takes. **The sentence must contain no comma**, or the `_args` splitter tears it into extra arguments — a full stop is fine on Claude's seam |
| `js_object_field_add <key> <object> <property>` | add a `key: object.property` entry — three names. The family could write an entry holding a word or a name standing on its own; **a record built out of another record** is what neither reaches, and it is what every narrowing report is made of. Carrying one more field through a filter used to need a written line |
| `js_object_property_text_add <key> <word>` / `_remove <key> <word>` | add / take out one word in a list held **inside** a record — the two-levels-deep pair |
| `js_object_property_text_add_after <key> <word> <neighbour>` / `_before` | the same, at a **chosen place** — this is the one to reach for on `examples_groups` and any register whose order is its meaning |
| `js_call_argument_named_set <param> <code>` | the same, when the value has to be worked out rather than named — needs the prompting `_code` command |
| `js_statement_return_argument_set <code>` | set what a selected return hands back |
| `js_selects_move_after` | move the first selected line to sit after the second — **guarded**, refuses a move that would cross a line it reads or that reads it (needs `function_select_multiple_apply_args`) |
| `js_selects_span_move_after` | move a **run** of lines to sit after another line — three addresses, named the same way: where the run starts, where it ends, and what it should follow. The same guard, asked of every line in the run at once; also refuses a destination *inside* the run. Nothing about the seam had to change to reach three — one selector runs once per name, so **the count of names is the count of nodes** |
| `js_selects_functionize <new_fn>` | extract first-through-last selection, then move the new fn into its own file (needs `function_select_multiple_apply_args`) |
| `js_selects_functionize_local <new_fn>` | the same extraction, left in the file it came from — the half a sandbox can watch, so this is the one under a gate |

**Before writing a new atom, ask the history whether one is missing.** `commits_ai_js_file_shapes <count>` buckets every hand-made change to `js/` by shape, **one changed file at a time**. Count whole commits instead and the reading is worthless: `ai_git` sweeps the working directory, so one commit named `ai` carries two people's unrelated work, and that arrives as the largest bucket of all — a missing transform for a shape nobody edited. Throwaway probes are set aside and reported separately for the same reason.

**Read it for a bucket that dominates.** One does — that shape is the atom to write, and its samples say what it would have to do. As of 2026-07-28 the last forty commits are **flat** (22/17/14/14/14/14/1 across the seven shapes), which says the vocabulary covers the common shapes and what is left is ordinary domain work rather than an editing gap. Writing another atom against a flat reading is guessing, which is the thing this measurement exists to stop.

**Two readings of the log, and they answer different questions — don't run one and think you asked both.** `ai_log_pairs_frequent` ranks *two different steps* run back to back, which is the case for a **composite**. `ai_log_loops_frequent` ranks *one step* run over and over in a row, which is the case for a **sweep** — the "a loop of invocations is a missing command" rule above, which until 2026-07-28 was the stronger of the two rules and the one with nothing measuring it. The pairs reading drops a step following itself on purpose, so it cannot see a loop at all. Each entry answers `{step, commands_saved, loops, longest}` and is ranked by `commands_saved`, not by `longest`: twice in a row on forty occasions is a habit worth a command, one run of forty is a single afternoon.

**Its first reading was a surprise, and the surprise is total: not one of the top steps was a missing command. Every one was an existing capability nobody reached for.** Checked one at a time, on 2026-07-28:

| step | commands spent | what already existed |
|---|---|---|
| `guard_check` | 929 | `data/guard_cases.json` — the guard's structure, case by case, each with a `why` that reads as the rule |
| `function_auto` | 452 | `function_auto_multiple` |
| `function_auto_check` | 336 | `function_auto_check_multiple` |
| the two back to back | 190 | `function_auto_checked` |
| `permission_grant_refusals` | 184 | `permission_grant_add_multiple` (runs the refusal check per name) |
| `function_delete_unused` | 55 | `function_delete_unused_multiple` |

So **the reading is not a list of commands to write** — an earlier version of this paragraph said it was, and was wrong about two of the three it named. Each entry now carries `sweep_exists` beside its number, from `function_sweep_twin`, so the mistake is harder to repeat; that answer is a **guess from name shape** (`_multiple` / `_all` / `_each`, and `function_` turned plural), so an empty list means *look*, not *there is none* — `permission_grant_refusals` shares no stem with its own sweep.

**Read again on 2026-08-02, the surprise had half reversed: four of the top loops still had no sweep, and three now do.** Written since: `permission_grant_refusals_multiple` / `permission_grant_refusals_names` (219 spent — the shared context is worked out once, so four names cost **less** than the singular costs for one: 5.8s against 11.6s), `functions_dependency_path` (213 spent, longest run 25 — each start still costs its own walk, so what this saves is the twenty-four process starts), `function_read_multiple`, and `functions_command_seams_reached` (64 spent, longest run 12 — eight names in 2.8s against 1.3s each, because `function_command_seams_reached_memo` shares one `remembered` across the whole sweep, exactly as the singular's own docstring says it is leaving undone). All four are **name-only parameters**, which is what makes them grantable; that is the test to apply before writing the next one.

**The one still deliberately unwritten is `guard_check` (1138 spent, longest run 49).** Its arguments are arbitrary shell command strings full of commas, quotes and pipes, so a comma-joined list cannot express them and a parameter reading as a command could never be granted — the sweep would be worse than the loop. **`guard_check` is the one worth naming twice**, because it is the largest and the least like the others: 1314 calls, of which 581 are the `node scripts/ai.mjs <fn> …` name form and 733 are arbitrary shell. Its runs are somebody discovering the guard's rules by probe — nine in a row on `ls > /dev/null`, `ls >> /dev/null`, `ls 2> /dev/null`, `ls > /etc/passwd`. **Read `data/guard_cases.json` first**; it already answers those, with reasons. Keep `guard_check` for the command you are actually about to run.

Ignore `g_verify_loop_check_line` at the top — a `longest` of 7995 is a machine loop, not somebody typing, and the `longest` column is there precisely to tell those apart.

**Ask which documented atoms nobody has ever run: `atoms_unexampled`.** A row in either table above is a promise made to every Claude at once, and until 2026-07-28 nothing checked it — 16 of the 56 atoms named there had never been executed by anything, so following the instructions was as likely to land on an unexercised unit as on one the corpus proves every run. `atoms_unexampled_gate_run` (in `q`) now ratchets that list against `data/atoms_unexampled_baseline.json`: a newly documented atom with no example fails, and an entry that *has* since been exampled fails too, so writing one is always followed by `atoms_unexampled_baseline_write` shrinking the file. The baseline holds one long-term entry, `js_selects_functionize`, and it is **not** unkeepable — but the reason it is still there is narrower than "it creates a file". **A multi-file example is a solved shape already:** `kind: "files"` takes `before` and `after` as lists of `{name, source}`, materializes them into a temp folder, runs the command, and compares the whole folder back — eight examples use it, and `example_copy_adds_file` is one that *adds* a file. So neither the format nor the sandbox is missing.

  **The baseline is empty as of 2026-07-28** — every atom either table names is now executed by at least one example, so the gate ratchets against zero and any new documented atom without one fails immediately.

  The last entry, `js_selects_functionize`, took a `_dir` core and nothing else: `js_outside_move_dir` and `js_selects_functionize_dir`, plus one branch in `example_files_command_lambda`. **The lesson is worth keeping, because two guesses about it were wrong before the right one.** "It creates a file, so it has no hermetic before-and-after" was wrong — the `files` kind already compares whole folders. "The file-creating half is ambient in three places, so this is as big as a virtual-write mode" was also wrong: reading the repo ambiently is *fine* in a sandbox and the already-exampled `js_selects_functionize_local` proved it (a free name that is a repo function should not become a parameter, wherever it runs). Exactly one thing was fatal — the ambient **write** — and `js_outside_move_generic` already took its file-creating step as a parameter, so the seam was open all along. **Before declaring a transform undemonstrable, separate its ambient reads from its ambient writes; only the writes can break a sandbox.**

  Two things that will bite when writing a `files` example. **Prettier preserves an object literal's line break**, so a `return { a, b };` written on one line in `after` will not match a regenerated multi-line one — prefer a span whose result is a single name. And **name the calls at the span's ends after real repo functions**, or they are inferred as parameters of the extracted function rather than left as calls.

  If a folder example ever needs a picker, **show the `after` as tabs, not as a chooser, and do not write a count-based switch between the two:** functionize edits one file and creates one, so the answer is always exactly two. `app_a_list_chooser` is a filter-as-you-type list built for a directory, and a dropdown costs two clicks to read the second file where tabs cost one — with no third file for the extra machinery to ever pay for.

**A function joins that second list by taking `(ast, selects, …)` — the shape is a shape, not a naming convention.** `js_statement_delete` and `js_statement_duplicate` predate the seam and were already usable through it, unnoticed, because their second parameter was always a list of nodes. Before writing an atom, check whether one already fits: `s js_,<verb>`.

**Registering a new example now needs no hand editing at all** — list it, group it, and describe it, three commands:

```
node scripts/ai.mjs function_select_apply_args examples_groups js_find_object_containing_text "Single edits" js_object_property_text_add examples,example_my_new_one
node scripts/ai.mjs function_select_apply_args examples_notes js_find_declaration_named notes js_object_text_add example_my_new_one,"what it is there to show"
node scripts/ai.mjs function_auto_multiple examples_groups,examples_notes
```

**Run `ao` after a command edit or the imports are missing.** A command adds the entry; only `ao` adds the `import` the entry now needs. Skipping it fails at run time, not at edit time.

**Known holes:** rename a local within one node rather than the whole fn · address more than one match at a time (every selector answers exactly one node, and says so when it can't — *which* one is now answerable for calls, via the `_index` pair above) · reach a record by *position* rather than by a word in it · **inline an inner function back into its call site** (`js_expand_selects` resolves the callee as a repo function *file*, so the one shape that would undo `js_selects_functionize_local` is exactly the one it refuses) · address a module-level function *beside* the exported one (`js_function_node_find_named_node` reaches inner functions but errored on a sibling).

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

**Reach for `function_auto_checked <fn>` rather than `ao` then the check — it is the same two steps, in the order that survives a bad file.** The log says those two are run back to back more than any other pair that isn't a commit (188 times), which measures a habit rather than a missing command: the composite has been there the whole time. It asks the read-only check **first** and canonicalizes only when the answer is yes, so a name that names nothing is *reported* instead of thrown, and a file the pipeline chokes on is never written to at all. Until 2026-07-28 it ran the two the other way round, which meant `function_auto_multiple_checked` — whose whole job is answering for a *list* — lost every answer already paid for to the first bad name in it. That is the exact failure `function_auto_check`'s own docstring records as learned the hard way; the fix had landed in the check and never reached the composite standing on it.

**To sanity-check that a function still loads and normalizes *without touching it*, run `function_auto_check <fn_name>`** — it answers `{name, ok, error_message}` without writing anything, and it is allow-listed. Do **not** call the function bare (`node scripts/ai.mjs js_fold_call_statement`) to "see what it reports": with no arguments it either throws something unrelated to the question or silently does nothing, and the verb prompts the human because no individual transform is granted.

Two `ao` gotchas, both worth designing around:

- **`ao` strips `//` comments.** The AST round-trip drops them. Use **bare string-literal statements** as comments instead — they're real AST nodes and survive (`ao` renders them as `("...")`). This is why the codebase comments that way.
- **Keep underscore fn-name tokens OUT of string-literal comments.** A bare `js_fold` inside a comment string gets rewritten to `js_fold.name`, mangling the prose into a sequence expression. Say "the fold pass" instead.

`+` is intentionally **not** converted to `add(...)` (ambiguous with string concat).

