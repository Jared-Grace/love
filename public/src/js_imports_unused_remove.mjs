import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
import { marker } from "./marker.mjs";
export function js_imports_unused_remove(ast) {
  marker("1");
  let unuseds = js_imports_unused(ast);
  let body = object_property_get(ast, "body");
  function lambda(unused) {
    list_remove(list, item);
  }
  each(unuseds, lambda);
  return unuseds;
}
