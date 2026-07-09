import { js_keyword_from } from "../../../love/public/src/js_keyword_from.mjs";
import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { js_keyword_import } from "../../../love/public/src/js_keyword_import.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_import_single(import_, from) {
  let i = text_combine_multiple([
    js_keyword_import(),
    " ",
    js_code_wrap_braces(import_),
    " ",
    js_keyword_from(),
    " ",
    from,
  ]);
  return i;
}
