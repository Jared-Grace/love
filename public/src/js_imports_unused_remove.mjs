import { js_imports_unused } from "./js_imports_unused.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused_remove(ast) {
  marker("1");
  let unused = js_imports_unused(ast);
  return unused;
}
