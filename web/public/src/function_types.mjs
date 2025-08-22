import { list_sort_string } from "./list_sort_string.mjs";
import { js_node_types } from "./js_node_types.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_types() {
  let f_name = await data_function_current_get();
  let { ast } = await function_parse(f_name);
  const f_types = js_node_types(ast);
  list_sort_string(f_types);
  return f_types;
}
