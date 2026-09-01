import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_node_stopping_found_is } from "./js_node_stopping_found_is.mjs";
export function js_statement_await_here_is(statement, function_node_types) {
  arguments_assert(arguments, 2);
  function await_is(node) {
    let awaited = equal(node.type, "AwaitExpression");
    return awaited;
  }
  let found = js_node_stopping_found_is(
    statement,
    await_is,
    function_node_types,
  );
  return found;
}
