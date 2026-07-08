import { js_tokenizer_with_eof } from "../../../love/public/src/js_tokenizer_with_eof.mjs";
export function js_tokenizer(code) {
  let tokens = js_tokenizer_with_eof(code);
  return tokens;
}
