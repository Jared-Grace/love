import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
export async function js_imports_unused_remove(ast) {
  let unuseds = js_imports_unused(ast);
  let body = property_get(ast, "body");
  function lambda(unused) {
    let declaration = property_get(unused, "declaration");
    list_remove(body, declaration);
  }
  each(unuseds, lambda);
}
