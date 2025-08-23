import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { marker } from "./marker.mjs";
export function js_imports_paths_fix(ast) {
  let imports_declarations = js_imports_declarations(ast);
  function lambda(i) {
    let name = object_property_get(i, "name");
    let declaration = object_property_get(i, "declaration");
    let { specifiers } = declaration;
    log(declaration);
  }
  each(imports_declarations, lambda);
  marker("1");
}
