import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused_remove(ast) {
  marker("1");
  let unused = js_imports_unused(ast);
  let body = object_property_get(ast, "body");
  each(list, function lambda(item) {});
  return unused;
}
