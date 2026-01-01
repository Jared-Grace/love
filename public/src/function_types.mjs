import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { js_node_types } from "../../../love/public/src/js_node_types.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_types() {
  let f_name = await function_current_get();
  let { ast } = await function_parse_unaliased(f_name);
  const f_types = js_node_types(ast);
  list_sort_string(f_types);
  return f_types;
}
