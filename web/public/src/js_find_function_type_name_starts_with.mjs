import { log } from "../../../love/public/src/log.mjs";
import { js_list_function_nodes } from "../../../love/public/src/js_list_function_nodes.mjs";
export function js_find_function_type_name_starts_with(ast) {
  let list = js_list_function_nodes(ast);
  log(js_find_function_type_name_starts_with.name, {
    list,
  });
}
