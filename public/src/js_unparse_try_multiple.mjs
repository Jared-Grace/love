import { js_unparse_try } from "../../../love/public/src/js_unparse_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function js_unparse_try_multiple(selected) {
  let mapped = list_map(selected, js_unparse_try);
  return mapped;
}
