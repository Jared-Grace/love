import { js_strings_generic } from "./js_strings_generic.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { each } from "./each.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
export async function js_strings_replace_generic(ast, skip, replace_try) {
  let results = js_strings_generic(ast);
  let replaced = false;
  function lambda(result) {
    let node = property_get(result, "node");
    let skipped = list_includes(skip, node);
    if (skipped) {
      return;
    }
    let value = property_get(result, "value");
    let did = replace_try(value, node);
    if (did) {
      replaced = true;
    }
  }
  each(results, lambda);
  if (replaced) {
    await js_imports_missing_add_all(ast);
  }
}
