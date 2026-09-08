import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes_all } from "./app_ceb_bible_gloss_roots_disagreeing_classes_all.mjs";
import { gloss_classes_words_apart_counted } from "./gloss_classes_words_apart_counted.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_classes_word_claims_unchained } from "./gloss_classes_word_claims_unchained.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_claims_unchained(sample_size) {
  "The words the Cebuano app explains more than one way and the dictionary cannot reconcile, worst first: the queue after every disagreement that was only a depth has been taken out of it.";
  "The list this narrows is already the answerable half of the work - one word does not come from two unrelated roots, so a word explained two ways is wrong somewhere whether or not any dictionary was ever asked. What the dictionary is used for here is only subtraction. Where it says one claim stands on the other's chain, the two explanations are steps on one path and nobody has to choose between them.";
  "Both figures are given, the queue before the folding and after it, because the second one alone would look like a smaller problem rather than the same problem with the settled part taken out. The first of them, and the sample's reach beside the classes there are, come from the shared counting of a gathering; the subtraction is what belongs to this reading alone.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let gathered =
    await app_ceb_bible_gloss_roots_disagreeing_classes_all(sample_size);
  let counted = gloss_classes_words_apart_counted(gathered);
  let classes = property_get(gathered, "classes");
  let known = await binisaya_words_known();
  let unchained = gloss_classes_word_claims_unchained(classes, known);
  let r = {
    classes_total: property_get(counted, "classes_total"),
    classes_read: property_get(counted, "classes_read"),
    words_total: property_get(counted, "words_total"),
    words_apart: property_get(counted, "words_apart"),
    words_unchained: list_size(unchained),
    unchained,
  };
  return r;
}
