import { js_unparse_try } from "./js_unparse_try.mjs";
import { list_map } from "./list_map.mjs";
export function js_unparse_try_multiple(list) {
  let mapped = list_map(list, js_unparse_try);
  return mapped;
}
