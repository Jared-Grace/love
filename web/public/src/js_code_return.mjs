import { js_keyword_return } from "../../../love/public/src/js_keyword_return.mjs";
export function js_code_return(return_argument_code) {
  let v = js_keyword_return() + " " + return_argument_code;
  return v;
}
