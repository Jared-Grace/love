import { js_code_export } from "../../../love/public/src/js_code_export.mjs";
import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
export function js_code_export_wrapped(f_name) {
  let w = js_code_wrap_braces(f_name);
  let e = js_code_export(w);
  return e;
}
