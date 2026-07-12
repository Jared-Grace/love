import { text_combine } from "./text_combine.mjs";
export function word_plural(root_word) {
  let p = text_combine(root_word, "s");
  return p;
}
