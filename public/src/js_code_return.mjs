import { js_keyword_return } from "../../../love/public/src/js_keyword_return.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_return(return_argument_code) {
  let v = text_combine_multiple([
    js_keyword_return(),
    " ",
    return_argument_code,
  ]);
  return v;
}
