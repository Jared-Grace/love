import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { js_list_function_nodes } from "../../../love/public/src/js_list_function_nodes.mjs";
export function js_find_function_type_name_starts_with(ast, prefix) {
  let mapped = js_list_function_nodes(ast);
  function lambda(n) {
    let starts_with = false;
    let id = property_get(n, "id");
    function lambda3() {
      let name = js_identifier_name(i);
      starts_with = text_starts_with(t, prefix);
    }
    js_identifier_is_if(node, lambda3);
    return starts_with;
  }
  let filtered = list_filter(mapped, lambda);
}
