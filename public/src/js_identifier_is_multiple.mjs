import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
export function js_identifier_is_multiple(params) {
  let ii = list_all(params, js_identifier_is);
  return ii;
}
