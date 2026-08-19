# The two seams, and the `_open` suffix

CLAUDE.md holds the rules. This note holds the reasons behind them — needed once, when you are wondering why an `_open` twin behaves as it does, and not on every session.

## Showing is a value, not a name

A `_open` suffix means *and then show it to the human in VS Code*. `process_open_wanted_is` answers whether that is wanted, defaulting from the seam (`r.mjs` shows, `ai.mjs` prints), and `file_open` prints the file instead of launching an editor whenever the answer is no. So an `_open` twin **works** from `ai.mjs` — it just prints.

## This replaced a refusal, and the reason is worth keeping

`file_open` used to throw at Claude's seam, advising "call the twin without the open suffix" — advice that only works when such a twin exists. About twenty functions (`function_rename_parts_delete`, `function_rename_replace`, the `function_wrap_*` family, `task_new`, `js_dollar_new`…) call an opener without having a plain twin of their own, so the message asked for something impossible — and because the opening is the *last* step, it threw **after the rename had already landed**. A Claude read that as failure and retried on a repo where the work was done.

Showing-as-a-value fixes the whole class at once instead of growing twenty new twins to make the old message true.

## Each `_open` is a thin wrapper over the plain one

`function_copy_open` is `function_copy` then `function_copy_result_open`; `function_new_open_transform` is `function_new_transform` then `function_open`; `function_new_js_open` is `function_new_js` then `function_open`. The work lives in one place and the wrapper only adds the showing, so the two can't drift.

That is also why you should still call the plain twin when there is one (`function_new`, not `function_new_open`): the return values differ, and the plain one's is usually what you want.
