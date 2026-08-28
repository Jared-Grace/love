import { js_ast_return_key_shapes_agree_function_visit_record } from "./js_ast_return_key_shapes_agree_function_visit_record.mjs";
import { js_ast_return_key_shapes_agree_function_visit_one } from "./js_ast_return_key_shapes_agree_function_visit_one.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export function js_ast_return_key_shapes_agree_function_visit(visited) {
  arguments_assert(arguments, 1);
  let node = property_get(visited, "node");
  let returns = js_function_returns_own(node);
  let records = [];
  let wanted = js_ast_return_key_shapes_agree_function_visit_one(
    returns,
    node,
    records,
  );
  let count = list_size(records);
  let several = greater_than(count, 1);
  if (not(several)) {
    return;
  }
  js_ast_return_key_shapes_agree_function_visit_record(records, wanted);
}
