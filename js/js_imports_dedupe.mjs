import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function js_imports_dedupe(ast) {
  "Remove duplicate import declarations — keep the first import of each name, drop later ones. Renaming";
  "an identifier onto a name a file already imports (merging two fns via a reference redirect) leaves the";
  "file with two identical import lines, which is a SyntaxError; deduping right after the rename repairs";
  "that. One name per import line here, so removing the whole declaration is safe.";
  arguments_assert(arguments, 1);
  let imports = js_imports_declarations(ast);
  let body = property_get(ast, "body");
  let seen = {};
  function consider(entry) {
    let name = property_get(entry, "name");
    let already = property_exists(seen, name);
    if (already) {
      let declaration = property_get(entry, "declaration");
      list_remove(body, declaration);
      return;
    }
    property_set(seen, name, true);
  }
  each(imports, consider);
  return;
}
