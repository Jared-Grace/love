import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_declaration_single(ast) {
  function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      la(node);
    }
    js_visit_type(ast, "ExportNamedDeclaration", lambda);
  }
  let nameds = list_adder(lambda2);
  let { declaration } = list_single(nameds);
  return declaration;
}
