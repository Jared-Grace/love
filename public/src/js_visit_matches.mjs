import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_visit_matches(ast, node_search) {
  marker("1");
  function lambda2(la) {
    function lambda(v) {
      let node = object_property_get(v, "node");
      if (node === node_search) {
        la(v);
      }
    }
    js_visit(ast, lambda);
  }
  let matches = list_adder(lambda2);
  return matches;
}
