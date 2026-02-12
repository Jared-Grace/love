import { js_node_atomize_variable_name_get } from "../../../love/public/src/js_node_atomize_variable_name_get.mjs";
import { js_block_insert } from "../../../love/public/src/js_block_insert.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function js_node_atomize(existing_ids, v, variable_name, offset) {
  let node = property_get(v, "node");
  let stack = property_get(v, "stack");
  variable_name = await js_node_atomize_variable_name_get(
    node,
    variable_name,
    stack,
    error(),
  );
  let unique = js_identifier_unique(existing_ids, variable_name);
  let copy = object_copy(node);
  let assign = js_declare(unique, copy);
  js_block_insert(stack, assign);
  let v2 = js_parse_expression(unique);
  object_replace(node, v2);
}
