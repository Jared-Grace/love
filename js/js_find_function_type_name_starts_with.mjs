import { js_identifier_name_starts_with_try } from "../../love/js/js_identifier_name_starts_with_try.mjs";
import { list_find } from "../../love/js/list_find.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { js_list_function_nodes } from "../../love/js/js_list_function_nodes.mjs";
export function js_find_function_type_name_starts_with(ast, prefix) {
  let mapped = js_list_function_nodes(ast);
  function lambda(n) {
    let id = property_get(n, "id");
    let starts_with = js_identifier_name_starts_with_try(id, prefix);
    return starts_with;
  }
  let only = list_find(mapped, lambda);
  return only;
}
