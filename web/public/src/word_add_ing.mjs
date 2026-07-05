import { text_suffix_without_try } from "../../../love/public/src/text_suffix_without_try.mjs";
export function word_add_ing(w) {
  w = text_suffix_without_try(w, "e");
  let r = w + "ing";
  return r;
}
