import { each } from "./each.mjs";
import { js_imports } from "./js_imports.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused(ast) {
  marker("1");
  let imports = js_imports(ast);
  function lambda(item) {}
  each(list, lambda);
}
