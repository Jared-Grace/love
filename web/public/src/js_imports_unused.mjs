import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
import { js_imports_declarations } from "./js_imports_declarations.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
import { object_merge } from "./object_merge.mjs";
export function js_imports_unused(ast) {
  marker("1");
  let imports = js_imports_declarations(ast);
  function lambda(i) {
    let name = object_property_get(i, "name");
    let declaration = object_property_get(i, "declaration");
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
