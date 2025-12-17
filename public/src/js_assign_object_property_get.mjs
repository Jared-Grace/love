import { marker } from "../../../love/public/src/marker.mjs";
import { js_call_object_property_get } from "../../../love/public/src/js_call_object_property_get.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_index_of_next_outside } from "../../../love/public/src/list_index_of_next_outside.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
export function js_assign_object_property_get(
  ast,
  property_name,
  object_name,
  block_body,
  block_body_item,
  variable_name,
) {
  marker("1");
  let parsed = js_call_object_property_get(property_name, object_name);
  let assign = js_declare(unique, parsed);
  let index = list_index_of_next_outside(block_body, block_body_item);
  list_insert(block_body, index, assign);
  return assign;
}
