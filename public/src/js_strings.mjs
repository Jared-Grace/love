import { js_strings_generic } from "../../../p_np/public/src/js_strings_generic.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function js_strings(ast) {
  const results = js_strings_generic(ast);
  let names = list_map_property(results, "value");
  return names;
}
