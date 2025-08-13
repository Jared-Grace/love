import { list_sort_string } from "./list_sort_string.mjs";
import { js_node_types } from "./js_node_types.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export async function function_types() {
  let f_name = await data_function_current_get();
  let { ast } = await function_parse(f_name);
  const types = js_node_types(ast);
  list_sort_string(types);
  return types;
}
