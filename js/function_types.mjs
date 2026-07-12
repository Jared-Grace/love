import { property_get } from "./property_get.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { js_node_types } from "./js_node_types.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
export async function function_types(f_name) {
  let v = await function_parse_unaliased(f_name);
  let ast = property_get(v, "ast");
  let f_types = js_node_types(ast);
  list_sort_text(f_types);
  return f_types;
}
