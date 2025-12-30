import { js_code_export } from "../../../love/public/src/js_code_export.mjs";
import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
export function js_code_export_wrapped(inside) {
  let w = js_code_wrap_braces(inside);
  let e = js_code_export(w);
  return e;
}
