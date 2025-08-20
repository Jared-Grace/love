import { list_adder } from "./list_adder.mjs";
import { list_single } from "./list_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_declaration_single(ast) {
  function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      la(node);
    }
    js_visit_type(ast, "ExportNamedDeclaration", lambda);
  }
  let nameds = list_adder(lambda2);
  let named = list_single(nameds);
  let { declaration } = named;
  return declaration;
}
