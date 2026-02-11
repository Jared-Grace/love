import { not } from "../../../love/public/src/not.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_ternary_replace(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let alternate = property_get(node, "alternate");
    let consequent = property_get(node, "consequent");
    function lambda2(item) {
      let type_is = js_node_type_is(item, "BlockStatement");
      if (not(type_is)) {
        return false;
      }
      log({
        item,
      });
    }
    let a = list_all([alternate, consequent], lambda2);
    log({
      alternate,
      consequent,
    });
  }
  js_visit_type(ast, "IfStatement", lambda);
  return;
  if (index_selected === index) {
    let index_selected = null;
  } else {
    let index_selected = index;
  }
}
