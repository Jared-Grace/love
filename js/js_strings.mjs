import { js_strings_generic } from "./js_strings_generic.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_strings(ast) {
  let results = js_strings_generic(ast);
  let names = list_map_property(results, "value");
  return names;
}
