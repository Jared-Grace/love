import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_words_drafted_file_path } from "./gloss_words_drafted_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { not } from "./not.mjs";
import { gloss_explains_repair_decided_generic } from "./gloss_explains_repair_decided_generic.mjs";
import { property_set } from "./property_set.mjs";
export async function gloss_explains_repair_drafted_generic(fn) {
  "One named gloss store with the explanations put right only for the words standing in the drafts file, leaving every other sighting the handover names exactly as its author wrote it.";
  "$plain fn";
  "★ THE HANDOVER IS A STANDING PILE AND THE DRAFTS FILE IS THIS BATCH. The plain repair spends the whole pile, which over the Cebuano store was measured at about twenty-one sound explanations overwritten for every faulty one put right, and the pile is months old - so a sentence in it may have been overtaken by a later rewrite of the chapter. The batch somebody has just authored is the one part of that pile whose sentences are known to be the latest word on their words, and this is the door that writes only those.";
  "The sentence already standing is not looked at, which is why the decision takes the word alone. A drafted sentence is an author saying this is what this word means here, so there is nothing about the sentence it replaces that could overrule that; the narrowing wanted is over which words, not over which of a word's sightings.";
  "It is the same walk and the same handover as the plain repair, asked through the decision the walk already takes, so the two can never disagree about where a word sits or what sentence was handed over for it.";
  "A word in the drafts file that was never spread into the handover reaches nothing and is not reported missing here, because the handover is what this reads. Spreading the batch answers that question itself, by name, and is the step before this one.";
  arguments_assert(arguments, 1);
  let drafted_path = gloss_words_drafted_file_path(fn);
  let drafted = await file_read_json(drafted_path);
  let words = object_property_names(drafted);
  function entry_wanted_is(word) {
    let none = property_null_is(drafted, word);
    let wanted = not(none);
    return wanted;
  }
  let r = await gloss_explains_repair_decided_generic(fn, entry_wanted_is);
  property_set(r, "drafted", words);
  return r;
}
