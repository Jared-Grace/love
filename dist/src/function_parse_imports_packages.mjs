import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_imports_declarations_externals } from "../../../love/public/src/js_imports_declarations_externals.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function function_parse_imports_packages(parsed) {
  let ast = property_get(parsed, "ast");
  let e = js_imports_declarations_externals(ast);
  let externals = list_map_property(e, "source_value");
  let to = object_merge(
    {
      externals,
    },
    parsed,
  );
  return to;
}
