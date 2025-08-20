import { counter } from "./counter.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { each } from "./each.mjs";
import { js_imports } from "./js_imports.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused(ast) {
  marker("1");
  let imports = js_imports(ast);
  function lambda(i_name) {
    let i = counter(function lambda4() {});
    function lambda2(v) {
      let node = object_property_get(v, "node");
      let name = object_property_get(node, "name");
      if (name === i_name) {
      }
    }
    js_visit_type(ast, "Identifier", lambda2);
  }
  each(imports, lambda);
}
