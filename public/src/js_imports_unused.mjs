import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_imports_declarations } from "../../../love/public/src/js_imports_declarations.mjs";
import { js_identifiers_named_count } from "../../../love/public/src/js_identifiers_named_count.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function js_imports_unused(ast) {
  let imports = js_imports_declarations(ast);
  function lambda(i) {
    let name = property_get(i, "name");
    let declaration = property_get(i, "declaration");
    let count_import = js_identifiers_named_count(ast, name);
    let count_declaration = js_identifiers_named_count(declaration, name);
    let to = object_merge(
      {
        unused: count_import === count_declaration,
      },
      i,
    );
    return to;
  }
  let mapped = list_map(imports, lambda);
  let unuseds = list_filter_property(mapped, "unused", true);
  return unuseds;
}
