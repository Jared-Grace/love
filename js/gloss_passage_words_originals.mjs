import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function gloss_passage_words_originals(passage) {
  "The words of a passage's original-language wording, in the order they are written.";
  "A gloss store that explains the original language is answered by this one, and a store that explains a translation is answered by its own; which text a store took its words from is a fact about that store rather than about a passage, so the passage is not asked to know it.";
  let originals = property_get(passage, "originals");
  let joined = list_join_space(originals);
  let words = text_split_space(joined);
  return words;
}
