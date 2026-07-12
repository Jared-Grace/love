import { property_get } from "./property_get.mjs";
import { js_imports_missing_all } from "./js_imports_missing_all.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function function_imports_missing(f_name) {
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let imports_missing = await js_imports_missing_all(ast);
  let to = object_merge_set(
    {
      imports_missing,
    },
    parsed,
  );
  return to;
}
