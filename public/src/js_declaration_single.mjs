import { list_adder } from "./list_adder.mjs";
import { list_single } from "./list_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_declaration_single(parsed) {
  let nameds = list_adder((la) => {
    js_visit_type(parsed, "ExportNamedDeclaration", (v) => {
      let { node } = v;

      la(node);
    });
  });
  let named = list_single(nameds);
  let { declaration } = named;
  return declaration;
}
