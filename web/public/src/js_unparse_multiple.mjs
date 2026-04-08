import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function js_unparse_multiple(selected) {
  let mapped = list_map(selected, js_unparse);
  return mapped;
}
