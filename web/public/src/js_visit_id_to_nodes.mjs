import { equal } from "../../../love/public/src/equal.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "assert";
export function js_visit_id_to_nodes(ast, id) {
  let result = [];
  let i = 0;
  function lambda(v) {
    let node = property_get(v, "node");
    let e = equal(id, i);
    if (e) {
      list_add(result, node);
    }
    i++;
  }
  js_visit(ast, lambda);
  return result;
}
