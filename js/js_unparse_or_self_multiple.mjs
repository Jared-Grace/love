import { js_unparse_or_self } from "./js_unparse_or_self.mjs";
import { list_map } from "./list_map.mjs";
export function js_unparse_or_self_multiple(selected) {
  let mapped = list_map(selected, js_unparse_or_self);
  return mapped;
}
