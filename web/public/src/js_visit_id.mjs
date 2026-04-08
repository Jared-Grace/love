import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_id(ast, target) {
  let result = null;
  let i = 0;
  function lambda(v) {
    let node = property_get(v, "node");
    if (equal(node, target)) {
      result = i;
    }
    i++;
  }
  js_visit(ast, lambda);
}
