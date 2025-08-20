import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { each } from "./each.mjs";
import { js_imports } from "./js_imports.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused(ast) {
  marker("1");
  let imports = js_imports(ast);
  function lambda(i) {
    function lambda2(v) {}
    js_visit_type(ast2, type, lambda2);
  }
  each(imports, lambda);
}
