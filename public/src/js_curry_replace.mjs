import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_function_nodes_list } from "../../../love/public/src/js_visit_function_nodes_list.mjs";
export function js_curry_replace(ast) {
  let l = js_visit_function_nodes_list(ast);
  function lambda(v) {
    let node = property_get(v, "node");
    log(js_curry_replace.name, {
      node,
    });
  }
  each(list, lambda);
}
