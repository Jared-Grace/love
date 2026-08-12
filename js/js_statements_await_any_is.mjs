import { js_statement_await_own_is } from "./js_statement_await_own_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
export function js_statements_await_any_is(span) {
  arguments_assert(arguments, 1);
  ("Whether any line in a run of statements waits on something itself - a wait written inside a callback the line carries belongs to that callback, not to the run.");
  ("What a cut has to know before it writes the new function's first word. A run holding a wait must become a function that waits, and the line left behind must wait on it - so this one answer decides both halves, and getting it wrong leaves a caller reading a promise as though it were the value.");
  function lambda(r) {
    let result = js_statement_await_own_is(r);
    return result;
  }
  let async_is = list_any(span, lambda);
  return async_is;
}
