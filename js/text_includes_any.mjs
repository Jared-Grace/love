import { text_includes } from "./text_includes.mjs";
import { list_any } from "./list_any.mjs";
export function text_includes_any(s, words) {
  "whether this text holds any one of these words anywhere in it.";
  "The sibling of the reading that asks the same question of the end of the text.";
  function lambda(word) {
    let iw = text_includes(s, word);
    return iw;
  }
  let any = list_any(words, lambda);
  return any;
}
