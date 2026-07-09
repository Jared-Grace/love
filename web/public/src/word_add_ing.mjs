import { text_suffix_without_try } from "../../../love/public/src/text_suffix_without_try.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function word_add_ing(w) {
  w = text_suffix_without_try(w, "e");
  let r = text_combine(w, "ing");
  return r;
}
