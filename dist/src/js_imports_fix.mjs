import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { js_imports_unused } from "../../../love/public/src/js_imports_unused.mjs";
import { each } from "../../../love/public/src/each.mjs";
export async function js_imports_fix(ast) {
  let unuseds = js_imports_unused(ast);
  let body = property_get(ast, "body");
  function lambda(unused) {
    let declaration = property_get(unused, "declaration");
    list_remove(body, declaration);
  }
  each(unuseds, lambda);
  let v = await js_imports_missing_add(ast);
  return v;
}
