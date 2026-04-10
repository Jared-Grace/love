import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_types_function } from "../../../love/public/src/js_visit_types_function.mjs";
export function js_visit_types_function_named(ast, lambda$v) {
  function lambda(v) {
    let node = property_get(v, "node");
  }
  let r = js_visit_types_function(ast, lambda);
  return r;
}
