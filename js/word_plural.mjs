import { text_combine } from "./text_combine.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function word_plural(root_word) {
  "the regular plural adds s; known irregular plurals override that - add to this map as new words need it";
  let regular = text_combine(root_word, "s");
  let irregulars = { loaf: "loaves" };
  let p = property_get_or(irregulars, root_word, regular);
  return p;
}
