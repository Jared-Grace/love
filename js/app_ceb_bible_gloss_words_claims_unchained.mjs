import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes } from "./app_ceb_bible_gloss_roots_disagreeing_classes.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_classes_word_claims_apart } from "./gloss_classes_word_claims_apart.mjs";
import { gloss_classes_word_claims_unchained } from "./gloss_classes_word_claims_unchained.mjs";
import { gloss_classes_by_word_folded } from "./gloss_classes_by_word_folded.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_claims_unchained(sample_size) {
  "The words the Cebuano app explains more than one way and the dictionary cannot reconcile, worst first: the queue after every disagreement that was only a depth has been taken out of it.";
  "The list this narrows is already the answerable half of the work - one word does not come from two unrelated roots, so a word explained two ways is wrong somewhere whether or not any dictionary was ever asked. What the dictionary is used for here is only subtraction. Where it says one claim stands on the other's chain, the two explanations are steps on one path and nobody has to choose between them.";
  "Both figures are given, the queue before the folding and after it, because the second one alone would look like a smaller problem rather than the same problem with the settled part taken out.";
  "How far the sample reached is reported beside how many classes there are. Where they differ, rows were left outside and this is short by an unknown amount.";
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
  let known = await binisaya_words_known();
  let apart = gloss_classes_word_claims_apart(classes);
  let unchained = gloss_classes_word_claims_unchained(classes, known);
  let by_word = gloss_classes_by_word_folded(classes);
  let words = object_property_names(by_word);
  let words_total = list_size(words);
  let words_apart = list_size(apart);
  let words_unchained = list_size(unchained);
  let classes_total = property_get(gathered, "classes_total");
  let classes_read = list_size(classes);
  let r = {
    classes_total,
    classes_read,
    words_total,
    words_apart,
    words_unchained,
    unchained,
  };
  return r;
}
