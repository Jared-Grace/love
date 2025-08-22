import { js_keyword_await } from "./js_keyword_await.mjs";
export function js_code_await(code) {
  let v = js_keyword_await() + " " + code;
  return v;
}
