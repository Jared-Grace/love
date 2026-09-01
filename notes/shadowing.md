# Never hide a name that is already in scope

*Moved out of `CLAUDE.md` when that file reached its size ceiling. The rule itself stays there; this is the machinery — needed exactly when `functions_shadowing_gate_run` or `functions_shadowing_operator_gate_run` goes red, or when you are clearing a batch of hiding, not on every session.*

## The bug behind both kinds

Two ways to break it, one bug behind both: an inner scope rebinding a name an enclosing scope already binds, and a local binding taking the name of a repo function. Pasted-in code brings its own declaration, and every line under it that reads that name silently gets the pasted value instead of the one it was written against. Two scopes *side by side* may reuse a name freely — neither can see the other, so nothing is hidden.

## The gate and the baseline

`functions_shadowing_gate_run` (in `q`) enforces it against a shrink-only baseline of what the repo already carried. **Both teeth bite**: a name the baseline does not list fails, *and* a name it lists that no longer hides fails too — that second one is how the list is forced to shrink, and the remedy is `functions_shadowing_baseline_write`, not a code change. `functions_shadowing_report` lists everything, and `functions_shadowing_baseline_write` re-writes the baseline after a cleanup (it refuses to grow it).

## Side-by-side reuse is legal, and that trips readers of the AST

The permission in the section above is not a footnote — it is a hazard for any code that walks a function looking for *the* line that binds a name. `js_ast_declarator_init_named` took the first binding anywhere in the file and justified it in its own prose with "the shadowing gates already refuse a name bound twice". They do not: they refuse a *nested* rebinding, and two sibling scopes reusing one word is exactly what they allow. So a nested helper's `let r = []` answered for the outer function's `let r = {…}`, and `qa_gate_counted_is` called a correctly-written gate blind. Fixed 2026-09-01 with `js_list_type_nodes_outermost_function` — nodes of a kind in the file's own function and in none of the functions inside it — used for both which `return` is the function's own and which line binds the returned name.

**If you are writing a reader over a parsed function, scope it.** A whole-file walk cannot tell a name in the function from the same name in a helper written inside it, and nothing will go red when it picks the wrong one.

## Clearing them is a command, not a file-at-a-time job

`functions_shadowing_rename_all <name> <name_after>` finds every function hiding `<name>`, picks the right rename by *which kind* it is — `function_shadowing_rename` for an inner scope hiding an outer binding, `function_shadowing_function_rename` for a name bound at the function's own level over a repo function — and commits each one under its own name and arguments.

The name pair is the only real choice, because what a local should be called instead is a judgment and the same word does not always want the same replacement; a site it cannot do safely is **skipped with its reason**, which is itself a finding (that file wants a name chosen by somebody reading it). One run took the 31 functions hiding `fn_name` to `f_name` and the baseline from 174 to 144.

**A replacement must be a word the file binds nowhere** — asking only whether it is *read* there is not enough, and renaming to a word an inner scope already bound once produced `let remainder = remainder(n, divisor)`, which throws the moment it runs; `function_shadowing_function_rename` now checks `js_binding_names` and refuses.

## One subset ratchets against zero, not against the baseline

`functions_shadowing_operator_gate_run` (in `q`). The auto pass *writes* calls to sixteen names — `equal`, `add`, `not`, `identity`, `subtract`, `multiply`, `divide`, `modulo`, `exponent`, the comparisons and the loose-equality pair — read off `js_operators_binary()`/`_unary()` by `js_operator_function_names()` so a new operator joins the set by being added there.

A local wearing one of those is worse in kind than ordinary hiding: nobody has to misread anything, because the next comparison written in that file is *turned into* a call that lands on the local. The whole set was cleared on 2026-07-28, so there is nothing to grandfather.

## Why rule two used to cost more than readability

`ao`'s import repair subtracted only the imports and the file's own name, so a local sharing a function's name read as a missing import, and the import it added then read as *used* ever after, because the local's own mentions were what counted it. Both halves are fixed — `js_imports_missing_specify` now asks `js_free_names`, and `js_imports_shadowed_remove` (in the same pass) drops an import that nothing reads because a local stands in front of it. That cleared 74 dead imports across 72 files.
