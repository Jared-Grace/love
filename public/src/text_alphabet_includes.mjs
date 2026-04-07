import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { text_alphabet } from "../../../love/public/src/text_alphabet.mjs";
export function text_alphabet_includes(key) {
  let alpha = text_alphabet();
  let includes = list_includes(alpha, key);
  return includes;
}
