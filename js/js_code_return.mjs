import { js_keyword_return } from "./js_keyword_return.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_return(return_argument_code) {
  let v = text_combine_multiple([
    js_keyword_return(),
    " ",
    return_argument_code,
  ]);
  return v;
}
