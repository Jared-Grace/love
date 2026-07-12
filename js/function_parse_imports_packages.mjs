import { list_map_property } from "./list_map_property.mjs";
import { js_imports_declarations_externals } from "./js_imports_declarations_externals.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function function_parse_imports_packages(parsed) {
  let ast = property_get(parsed, "ast");
  let e = js_imports_declarations_externals(ast);
  let externals = list_map_property(e, "source_value");
  let to = object_merge_set(
    {
      externals,
    },
    parsed,
  );
  return to;
}
