import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_classes_word_claims_apart } from "./gloss_classes_word_claims_apart.mjs";
import { gloss_classes_by_word_folded } from "./gloss_classes_by_word_folded.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export function gloss_classes_words_apart_counted(gathered) {
  "$plain gathered";
  "A gathered set of disagreement classes turned into the four numbers any reading of them owes its reader - how many classes there are, how many were actually read, how many words they cover, and how many of those words are explained more than one way - with the words themselves worst first.";
  "★ HOW FAR THE SAMPLE REACHED IS REPORTED BESIDE HOW MANY CLASSES THERE ARE, AND THE TWO ARE NOT THE SAME NUMBER. Where they differ, rows were left outside and every count under them is short by an unknown amount. A reading that gave only the second would look like a smaller problem rather than the same problem partly looked at.";
  "How many words there are is reported beside how many are explained apart, because the second number means nothing without the first.";
  "No total of sightings is given. A class can be found on more than one word, so adding the rows up would count it once per word, and a total that overstates itself is worse than no total at all.";
  "Two readings asked these same four questions of two different gatherings, and one of them then narrows the answer by what the dictionary can settle. The narrowing is theirs; the counting is here, so the two cannot come to differ about what the same classes cover.";
  "Nothing is read off the disk and nothing is written. Everything is worked out from what was handed in.";
  arguments_assert(arguments, 1);
  let classes = property_get(gathered, "classes");
  let apart = gloss_classes_word_claims_apart(classes);
  let by_word = gloss_classes_by_word_folded(classes);
  let words = object_property_names(by_word);
  let r = {
    classes_total: property_get(gathered, "classes_total"),
    classes_read: list_size(classes),
    words_total: list_size(words),
    words_apart: list_size(apart),
    apart: apart,
  };
  return r;
}
