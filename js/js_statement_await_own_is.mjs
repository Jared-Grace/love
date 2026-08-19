import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_own_is } from "./js_node_type_own_is.mjs";
export function js_statement_await_own_is(statement) {
  arguments_assert(arguments, 1);
  ("Whether this line itself waits on something - not whether a wait is written anywhere inside it.");
  ("A line holding a callback that waits does not wait: the wait belongs to the callback, which is its own function and already says so. Asking only whether the word appears somewhere below reads that line as waiting, and the caller then waits on a function that never had anything to wait for. So a wait counts only when no function stands between it and the line.");
  let any = js_node_type_own_is(statement, "AwaitExpression");
  return any;
}
