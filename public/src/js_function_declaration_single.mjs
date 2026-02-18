import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_function_declaration_single(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      la(node);
    }
    js_visit_type(ast, "ExportNamedDeclaration", lambda);
  }
  let nameds = list_adder(lambda2);
  let r = list_single(nameds);
  let declaration = property_get(r, "declaration");
  return declaration;
}
