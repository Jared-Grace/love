import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { marker } from "./marker.mjs";
export function js_imports_paths_fix(ast) {
  let imports_declarations = js_imports_declarations(ast);
  marker("1");
}
