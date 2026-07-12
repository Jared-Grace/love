import { js_identifier_name_includes_try } from "../../love/js/js_identifier_name_includes_try.mjs";
import { list_find } from "../../love/js/list_find.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { js_list_calls_nodes } from "../../love/js/js_list_calls_nodes.mjs";
export function js_find_call_name_includes(ast, part) {
  let nodes = js_list_calls_nodes(ast);
  function lambda(n) {
    let callee = property_get(n, "callee");
    let includes = js_identifier_name_includes_try(callee, part);
    return includes;
  }
  let only = list_find(nodes, lambda);
  return only;
}
