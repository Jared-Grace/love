import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function js_imports_dedupe(ast) {
  "Remove duplicate import declarations — keep the first import of each name, drop later ones. Renaming";
  "an identifier onto a name a file already imports (merging two fns via a reference redirect) leaves the";
  "file with two identical import lines, which is a SyntaxError; deduping right after the rename repairs";
  "that. One name per import line here, so removing the whole declaration is safe.";
  arguments_assert(arguments, 1);
  let imports = js_imports_declarations(ast);
  let duplicates = list_duplicates_by_property(imports, "name");
  let body = property_get(ast, "body");
  function drop(entry) {
    let declaration = property_get(entry, "declaration");
    list_remove(body, declaration);
  }
  each(duplicates, drop);
  return;
}
