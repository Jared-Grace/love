import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { js_ast_return_key_shapes_agree_function_visit_one } from "./js_ast_return_key_shapes_agree_function_visit_one.mjs";
export function js_ast_return_key_shapes_agree_function_visit_several(visited) {
  arguments_assert(arguments, 1);
  let node = property_get(visited, "node");
  let returns = js_function_returns_own(node);
  let records = [];
  let wanted = js_ast_return_key_shapes_agree_function_visit_one(
    returns,
    node,
    records,
  );
  let several = list_size_greater_than(records, 1);
  let r = {
    records,
    wanted,
    several,
  };
  return r;
}
