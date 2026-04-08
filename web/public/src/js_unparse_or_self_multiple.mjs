import { js_unparse_or_self } from "../../../love/public/src/js_unparse_or_self.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function js_unparse_or_self_multiple(selected) {
  let mapped = list_map(selected, js_unparse_or_self);
  return mapped;
}
