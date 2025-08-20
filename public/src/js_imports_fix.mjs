import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { marker } from "./marker.mjs";
export async function js_imports_fix(ast) {
  marker("1");
  let v = await js_imports_missing_add(ast);
  return v;
}
