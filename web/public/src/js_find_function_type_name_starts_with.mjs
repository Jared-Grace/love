import { js_list_function_nodes } from "../../../love/public/src/js_list_function_nodes.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function js_find_function_type_name_starts_with(ast) {
  let mapped = js_list_function_nodes(ast);
  log(js_find_function_type_name_starts_with.name, {
    mapped,
  });
}
