import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { each } from "./each.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
export async function js_literals_replace_generic(
  ast,
  skip,
  replace_try,
  literals_read,
) {
  "Offers every written-out value in one file to a reader that may put something else in its place, skipping the places named as not to be touched, and repairs the imports afterwards when anything was in fact replaced.";
  "Which written-out values are offered is handed in, because the only difference between doing this for words and doing it for numbers is the walk that finds them. Repairing the imports is what makes a replacement safe: whatever was put in is almost always a call to a function this file did not name before.";
  "The repair is asked only when something changed, so a file nothing matched in is left byte-identical rather than tidied as a side effect of being looked at.";
  let results = literals_read(ast);
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
