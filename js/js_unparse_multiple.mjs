import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
export function js_unparse_multiple(selected) {
  let mapped = list_map(selected, js_unparse);
  return mapped;
}
