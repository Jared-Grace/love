import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { js_identifier_name_starts_with } from "./js_identifier_name_starts_with.mjs";
import { js_identifier_is_if } from "./js_identifier_is_if.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_list_function_nodes } from "./js_list_function_nodes.mjs";
export function js_find_function_type_name_starts_with(ast, prefix) {
  let mapped = js_list_function_nodes(ast);
  function lambda(n) {
    let starts_with = false;
    let id = property_get(n, "id");
    function lambda3() {
      starts_with = js_identifier_name_starts_with(id, prefix);
    }
    js_identifier_is_if(id, lambda3);
    return starts_with;
  }
  let filtered = list_filter(mapped, lambda);
  let only = list_single(filtered);
  return only;
}
