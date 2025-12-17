import { js_call_object_property_get } from "../../../love/public/src/js_call_object_property_get.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_index_of_next_outside } from "../../../love/public/src/list_index_of_next_outside.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
export function js_assign_object_property_get(
  ast,
  property_name,
  object_name,
  stack2,
  stack1,
) {
  let parsed = js_call_object_property_get(property_name, object_name);
  let unique = js_identifier_unique_ast(ast, property_name);
  let assign = js_declare(unique, parsed);
  let index = list_index_of_next_outside(stack2, stack1);
  list_insert(stack2, index, assign);
  return assign;
}
