import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_node_stopping_found_is } from "./js_node_stopping_found_is.mjs";
export function js_statement_name_read_here_is(statement, region, stop_types) {
  "Whether one statement reads a given name, never looking inside a node of the kinds it was told to stop at.";
  arguments_assert(arguments, 3);
  function named_is(node) {
    let identifier_is = equal(node.type, "Identifier");
    if (not(identifier_is)) {
      return false;
    }
    let same = equal(node.name, region);
    return same;
  }
  let found = js_node_stopping_found_is(statement, named_is, stop_types);
  return found;
}
