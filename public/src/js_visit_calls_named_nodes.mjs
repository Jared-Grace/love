import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_visit_calls_named_nodes(ast, f_name, lambda) {
  function lambda2(a) {
    let v = property_get(a, "v");
    let node = property_get(a, "node");
  }
  let r = js_visit_calls_named(ast, f_name, lambda2);
  return r;
}
