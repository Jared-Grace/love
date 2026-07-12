import { js_keyword_await } from "./js_keyword_await.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_await(code) {
  let v = text_combine_multiple([js_keyword_await(), " ", code]);
  return v;
}
