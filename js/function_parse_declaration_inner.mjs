import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { js_flo } from "./js_flo.mjs";
export function function_parse_declaration_inner(parsed) {
  let ast = property_get(parsed, "ast");
  let declaration = js_flo(ast);
  let to = object_merge_set(
    {
      declaration,
    },
    parsed,
  );
  return to;
}
