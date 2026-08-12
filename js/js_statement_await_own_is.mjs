import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { null_is } from "./null_is.mjs";
export function js_statement_await_own_is(statement) {
  arguments_assert(arguments, 1);
  ("Whether this line itself waits on something - not whether a wait is written anywhere inside it.");
  ("A line holding a callback that waits does not wait: the wait belongs to the callback, which is its own function and already says so. Asking only whether the word appears somewhere below reads that line as waiting, and the caller then waits on a function that never had anything to wait for. So a wait counts only when no function stands between it and the line.");
  function lambda(la) {
    js_visit_type(statement, "AwaitExpression", la);
  }
  let waits = list_adder(lambda);
  function outside_every_function(v) {
    let stack = property_get(v, "stack");
    let owner = js_stack_last_function(stack);
    let own = null_is(owner);
    return own;
  }
  let any = list_any(waits, outside_every_function);
  return any;
}
