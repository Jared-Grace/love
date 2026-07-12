import { regex_non_letter_edges } from "./regex_non_letter_edges.mjs";
export function text_word_only(t) {
  let r = regex_non_letter_edges();
  let word = t.replace(r, "");
  return word;
}
