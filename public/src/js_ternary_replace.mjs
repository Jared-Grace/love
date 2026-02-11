import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_ternary_replace(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let alternate = property_get(consequent, "alternate");
  }
  js_visit_type(ast, "IfStatement", lambda);
}
