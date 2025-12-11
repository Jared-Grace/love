import { js_keyword_export } from "../../../love/public/src/js_keyword_export.mjs";
export function js_code_export(code_declaration) {
  let v = js_keyword_export() + " " + code_declaration;
  return v;
}
