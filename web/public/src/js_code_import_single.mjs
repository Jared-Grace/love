import { js_keyword_from } from "./js_keyword_from.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
export function js_code_import_single(import_, from) {
  let v =
    js_keyword_import() +
    " " +
    js_code_wrap_braces(import_) +
    " " +
    js_keyword_from() +
    " " +
    from;
  return v;
}
