import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { js_node_types } from "../../../love/public/src/js_node_types.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_types() {
  let v = await function_parse_unaliased(f_name);
  let ast = object_property_get(v, "ast");
  const f_types = js_node_types(ast);
  list_sort_string(f_types);
  return f_types;
}
