import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_classes_word_claims_apart } from "./gloss_classes_word_claims_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_claims_chain_collapsed } from "./gloss_word_claims_chain_collapsed.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_classes_word_claims_unchained(classes, known) {
  "The words the app explains more than one way after the ones that are only the same path read further down have been folded in: what is left is a disagreement somebody has to settle.";
  "A word explained as pangita in one chapter and as kita in another is on the list of words explained two ways, and it should not be. The dictionary answers kita when asked about pangita, so the two explanations name steps on one path and the only thing between them is how far the explanation went. Nobody has to choose. Leaving it in the queue spends a reading and returns nothing.";
  "Measured on the corpus gathered so far this takes five words off the queue of thirty six outright and takes one claim off a sixth, so a person reads thirty one. Small, and it is the cheap kind of small: it is subtracted by the dictionary rather than by a judgement, and every row it removes is a row nobody would have found a fault in.";
  "What is folded in is handed back beside each word that survives, because a reader looking at four claims where the app made five should be able to see the fifth and where it went rather than wonder what became of it.";
  "The count beside each word is still what its classes are worth altogether, unchanged by the folding, and it is still an upper bound rather than an exact figure - a class can have been found on other words too. It ranks; it is not to be quoted.";
  "$plain classes";
  "$plain known";
  "the first names gathered classes, the second a gathered dictionary to read. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let apart = gloss_classes_word_claims_apart(classes);
  let left = [];
  function class_claim(one_class) {
    let claimed = property_get(one_class, "claimed");
    return claimed;
  }
  function word_read(found) {
    let rows = property_get(found, "classes");
    let claimed = list_map(rows, class_claim);
    let sorted = gloss_word_claims_chain_collapsed(known, claimed);
    let kept = property_get(sorted, "kept");
    let collapsed = property_get(sorted, "collapsed");
    let claims = list_size(kept);
    let apart_still = greater_than(claims, 1);
    if (apart_still) {
      let word = property_get(found, "word");
      let sightings_at_most = property_get(found, "sightings_at_most");
      let standing = {
        word,
        claims,
        sightings_at_most,
        kept,
        collapsed,
        classes: rows,
      };
      list_add(left, standing);
    }
  }
  each(apart, word_read);
  return left;
}
