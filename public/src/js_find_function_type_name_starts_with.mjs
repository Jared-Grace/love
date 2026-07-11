import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { js_list_function_nodes } from "../../../love/public/src/js_list_function_nodes.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function js_find_function_type_name_starts_with(ast) {
  let mapped = js_list_function_nodes(ast);
  function lambda(n) {
    let id = property_get(n, "id");
    log(js_find_function_type_name_starts_with.name, {
      id,
    });
  }
  let filtered = list_filter(mapped, lambda);
}
