import { list_adder_single } from "./list_adder_single.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_flo(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      la(node);
    }
    js_visit_type(ast, "ExportNamedDeclaration", lambda);
  }
  let r = list_adder_single(lambda2);
  let declaration = property_get(r, "declaration");
  return declaration;
}
