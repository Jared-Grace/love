import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_emptied_region_or_null } from "./js_statement_emptied_region_or_null.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_node_stopping_found_is } from "./js_node_stopping_found_is.mjs";
export function js_statement_emptied_region_here_or_null(
  statement,
  emptier_names,
  function_node_types,
) {
  arguments_assert(arguments, 3);
  let plain = js_statement_emptied_region_or_null(statement, emptier_names);
  let plain_is = equal_not(plain, null);
  if (plain_is) {
    return plain;
  }
  let wrapped = null;
  function empties_is(node) {
    let region = js_statement_emptied_region_or_null(node, emptier_names);
    let found_is = equal_not(region, null);
    if (found_is) {
      wrapped = region;
    }
    return false;
  }
  js_node_stopping_found_is(statement, empties_is, function_node_types);
  return wrapped;
}
