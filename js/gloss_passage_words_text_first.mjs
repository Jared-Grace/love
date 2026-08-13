import { property_list_first } from "./property_list_first.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function gloss_passage_words_text_first(passage) {
  "The words of a passage as the first bible asked for words it, in the order they are written.";
  "The first bible is the one a passage was cut by, so it is also the one a gloss of a translation explains word by word. Naming it first rather than by language keeps this true of whichever translation a store was built from.";
  let lines = property_list_first(passage, "texts");
  let joined = list_join_space(lines);
  let words = text_split_space(joined);
  return words;
}
