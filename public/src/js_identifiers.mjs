import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
export function js_identifiers(ast) {
  function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      la(node);
    }
    js_visit_type(ast, "Identifier", lambda);
  }
  let result = list_adder_unique(lambda2);
  return result;
}
