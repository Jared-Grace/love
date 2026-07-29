import { list_each_size } from "./list_each_size.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { js_imports_shadowed } from "./js_imports_shadowed.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_get } from "./property_get.mjs";
export function js_imports_shadowed_remove(ast) {
  "drop the import lines nothing reads because a local of the same name stands in front of them. The pass that removes unused imports counts mentions and so cannot see these: the local's own mentions are what keep the count above zero.";
  let names = js_imports_shadowed(ast);
  let entries = js_imports_declarations(ast);
  function shadowed_is(entry) {
    let name = property_get(entry, "name");
    let included = list_includes(names, name);
    return included;
  }
  let dead = list_filter(entries, shadowed_is);
  let body = property_get(ast, "body");
  function drop(entry) {
    let declaration = property_get(entry, "declaration");
    list_remove(body, declaration);
  }
  let removed = list_each_size(dead, drop);
  return removed;
}
