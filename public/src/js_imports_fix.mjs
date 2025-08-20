import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { marker } from "./marker.mjs";
export async function js_imports_fix(ast) {
  marker("1");
  marker("1");
  let unuseds = js_imports_unused(ast);
  let body = object_property_get(ast, "body");
  function lambda(unused) {
    let declaration = object_property_get(unused, "declaration");
    list_remove(body, declaration);
  }
  each(unuseds, lambda);
  let v = await js_imports_missing_add(ast);
  return v;
}
