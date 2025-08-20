import { each_async } from "./each_async.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
import { marker } from "./marker.mjs";
export async function js_imports_unused_remove(ast) {
  marker("1");
  let unuseds = js_imports_unused(ast);
  let body = object_property_get(ast, "body");
  function lambda(unused) {
    let declaration = object_property_get(unused, "declaration");
    list_remove(body, declaration);
  }
  each(unuseds, lambda);
  return unuseds;
}
