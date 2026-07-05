import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { text_alphabet_cases_both } from "../../../love/public/src/text_alphabet_cases_both.mjs";
export function text_alphabet_includes(key) {
  let alpha = text_alphabet_cases_both();
  let includes = list_includes(alpha, key);
  return includes;
}
