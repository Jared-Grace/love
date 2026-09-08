import { gloss_passage_text_first } from "./gloss_passage_text_first.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function gloss_passage_words_text_first(passage) {
  "The words of a passage as the first bible asked for words it, in the order they are written.";
  "The first bible is the one a passage was cut by, so it is also the one a gloss of a translation explains word by word. Naming it first rather than by language keeps this true of whichever translation a store was built from.";
  "The line the words are cut from is asked for rather than joined here, so that the sentence a reader is shown and the words explained underneath it can never be made from two different joins.";
  let joined = gloss_passage_text_first(passage);
  let words = text_split_space(joined);
  return words;
}
