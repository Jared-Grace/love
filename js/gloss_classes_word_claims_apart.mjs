import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_classes_by_word_folded } from "./gloss_classes_by_word_folded.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function gloss_classes_word_claims_apart(classes) {
  "The words the app explains more than one way, worst first: one word, and two or more different roots claimed for it in different chapters.";
  "Every other reading of these findings asks whether an explanation agrees with the dictionary, and the dictionary says nothing at all about four fifths of them. This asks a question the dictionary is not needed for. One word cannot come from two unrelated roots, so where the same word is explained two ways somebody has written something wrong, and that stands whether or not any dictionary was ever asked.";
  "Measured on the eight hundred and thirty sightings gathered so far, thirty six of three hundred and sixty three words are explained more than one way, covering far more of the corpus than the disagreements the dictionary could settle. Most of them are invisible to every other reader here, because the dictionary was silent on them.";
  "Not every one of these is a fault. Two claims can both be defensible where one root stands behind the other, so a word explained as tarong and as matarong may be explained rightly twice at two depths. What cannot be right twice is a word explained as tarong and as taro, and the point of the ranking is that a person decides which they are looking at rather than a rule guessing.";
  "The two spellings Cebuano gives one sound are folded together on both sides, so panulundon and panulondon are one word and tulond and tulund are one claim. Without that the biggest disagreements in the corpus split into singletons and disappear.";
  "The count beside each word is what its classes are worth altogether, and a class can also have been found on other words, so it is an upper bound on that word alone and never an exact figure. It is there to rank, not to be quoted. The classes are handed back with it so a reader can see what the number is made of.";
  "$plain classes";
  "it names gathered classes. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let by_word = gloss_classes_by_word_folded(classes);
  let keys = object_property_names(by_word);
  let apart = [];
  function class_claim_folded(one_class) {
    let claimed = property_get(one_class, "claimed");
    let r = gloss_word_folded(claimed);
    return r;
  }
  function class_count(one_class) {
    let count = property_get(one_class, "count");
    return count;
  }
  function key_read(key) {
    let group = property_get(by_word, key);
    let rows = property_get(group, "classes");
    let claimed = list_map(rows, class_claim_folded);
    let distinct = list_unique(claimed);
    let alone = list_size_equal(distinct, 1);
    if (not(alone)) {
      let word = property_get(group, "word");
      let claims = list_size(distinct);
      let counts = list_map(rows, class_count);
      let sightings_at_most = list_sum(counts);
      let found = {
        word,
        claims,
        sightings_at_most,
        classes: rows,
      };
      list_add(apart, found);
    }
  }
  each(keys, key_read);
  function found_sightings(found) {
    let sightings_at_most = property_get(found, "sightings_at_most");
    return sightings_at_most;
  }
  let ranked = list_sort_number_mapper_reverse(apart, found_sightings);
  return ranked;
}
