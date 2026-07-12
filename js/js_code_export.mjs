import { js_keyword_export } from "./js_keyword_export.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_export(code_declaration) {
  let v = text_combine_multiple([js_keyword_export(), " ", code_declaration]);
  return v;
}
