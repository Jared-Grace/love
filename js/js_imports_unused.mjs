import { equal } from "./equal.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { js_identifiers_referenced_named_count } from "./js_identifiers_referenced_named_count.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function js_imports_unused(ast) {
  "Every import in a file that nothing in that file reads - the repo's own files and the packages alike.";
  "A package import was left out of this for a long while, and a refactor that took the last reading of a builtin out of a file therefore left the import standing. Nothing removed it and nothing said so, and it then read as a use of that builtin to anything counting them. An import that gives one name and is never read is dead the same way whichever kind it is, so both kinds are asked here.";
  let repo = js_imports_declarations(ast);
  let packages = js_imports_package_declarations(ast);
  let imports = list_concat(repo, packages);
  function lambda(i) {
    let name = property_get(i, "name");
    let declaration = property_get(i, "declaration");
    let count_import = js_identifiers_referenced_named_count(ast, name);
    let count_declaration = js_identifiers_referenced_named_count(
      declaration,
      name,
    );
    let to = object_merge_set(
      {
        unused: equal(count_import, count_declaration),
      },
      i,
    );
    return to;
  }
  let mapped = list_map(imports, lambda);
  let unuseds = list_filter_property(mapped, "unused", true);
  return unuseds;
}
