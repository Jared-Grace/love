import { list_single } from "./list_single.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is_if } from "./js_identifier_is_if.mjs";
import { js_identifier_name_includes } from "./js_identifier_name_includes.mjs";
import { js_list_calls_nodes } from "./js_list_calls_nodes.mjs";
export function js_find_call_name_includes(ast, part) {
  let nodes = js_list_calls_nodes(ast);
  function lambda(n) {
    let callee = property_get(n, "callee");
    let includes = js_identifier_name_includes_try(callee, part);
    return includes;
  }
  let filtered = list_filter(nodes, lambda);
  let only = list_single(filtered);
  return only;
}
function js_identifier_name_includes_try(callee, part) {
  let includes = false;
  function lambda2() {
    includes = js_identifier_name_includes(callee, part);
  }
  js_identifier_is_if(callee, lambda2);
  return includes;
}

