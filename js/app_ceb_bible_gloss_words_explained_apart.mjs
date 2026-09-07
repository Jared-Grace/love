import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes } from "./app_ceb_bible_gloss_roots_disagreeing_classes.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_classes_word_claims_apart } from "./gloss_classes_word_claims_apart.mjs";
import { gloss_classes_by_word_folded } from "./gloss_classes_by_word_folded.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_explained_apart(sample_size) {
  "The words the Cebuano app explains one way in one chapter and another way in another, worst first.";
  "The other readers of these findings all ask the dictionary, and the dictionary has nothing to say about four fifths of them. This asks nothing of anybody. One word does not come from two unrelated roots, so where the app explains a word two ways it has written something wrong somewhere, and that is true with no source consulted and no network reached.";
  "That makes this the part of the work that is answerable tonight. It also makes it the larger part: measured on the sightings gathered so far, the words explained more than one way cover several times what the dictionary was able to settle, and almost none of them appear in the dictionary-backed queue at all, because the dictionary was silent on them.";
  "A word explained twice is not always explained wrongly twice - one root can stand behind another, and naming either is defensible. What is not defensible is two claims that cannot both be steps on one path, and telling those apart is a person's job rather than a rule's. The ranking is what makes that job finite.";
  "How many words there are is reported beside how many are explained apart, because the second number means nothing without the first. How far the sample reached is reported for the same reason: where it fell short of the classes there are, rows were left outside and this is short by an unknown amount.";
  "No total of sightings is given. A class can be found on more than one word, so adding the rows up would count it once per word, and a total that overstates itself is worse than no total at all.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let everything = "all";
  let gathered = await app_ceb_bible_gloss_roots_disagreeing_classes(
    everything,
    sample_size,
  );
  let classes = property_get(gathered, "classes");
  let apart = gloss_classes_word_claims_apart(classes);
  let by_word = gloss_classes_by_word_folded(classes);
  let words = object_property_names(by_word);
  let words_total = list_size(words);
  let words_apart = list_size(apart);
  let classes_total = property_get(gathered, "classes_total");
  let classes_read = list_size(classes);
  let r = {
    classes_total,
    classes_read,
    words_total,
    words_apart,
    apart,
  };
  return r;
}
