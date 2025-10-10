import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_imports_unused } from "../../../love/public/src/js_imports_unused.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function js_imports_unused_remove(ast) {
  marker("1");
  let unuseds = js_imports_unused(ast);
  let body = object_property_get(ast, "body");
  function lambda(unused) {
    let declaration = object_property_get(unused, "declaration");
    list_remove(body, declaration);
  }
  each(unuseds, lambda);
}
