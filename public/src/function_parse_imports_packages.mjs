import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_imports_declarations_externals } from "../../../love/public/src/js_imports_declarations_externals.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function function_parse_imports_packages(parsed) {
  let ast = object_property_get(parsed, "ast");
  let declaration = js_imports_declarations_externals(ast);
  let mapped = list_map_property(list, "property_name");
  let to = object_merge(
    {
      declaration,
    },
    parsed,
  );
  return to;
}
