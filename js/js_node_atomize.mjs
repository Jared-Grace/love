import { js_declare_unique_ast } from "./js_declare_unique_ast.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_node_atomize_variable_name_get } from "./js_node_atomize_variable_name_get.mjs";
import { js_block_insert } from "./js_block_insert.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_copy } from "./object_copy.mjs";
import { property_get } from "./property_get.mjs";
export async function js_node_atomize(ast, visitor, variable_name, offset) {
  let node = property_get(visitor, "node");
  let stack = property_get(visitor, "stack");
  variable_name = await js_node_atomize_variable_name_get(
    node,
    variable_name,
    stack,
    offset,
  );
  ("this is in case there is an await");
  let copied = list_get_end(stack, offset);
  let copy = object_copy(copied);
  let r = js_declare_unique_ast(ast, variable_name, copy);
  let unique = property_get(r, "unique");
  let declare = property_get(r, "declare");
  js_block_insert(stack, declare);
  let v = js_parse_expression(unique);
  object_replace(copied, v);
}
