import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export function function_parse_imports_packages(parsed) {
  let ast = object_property_get(parsed, "ast");
  let declaration = js_declaration_single(ast);
  let to = object_merge(
    {
      declaration,
    },
    parsed,
  );
  return to;
}
