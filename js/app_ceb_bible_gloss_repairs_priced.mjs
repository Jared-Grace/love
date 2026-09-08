import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_roots_silent_words } from "./gloss_offenders_roots_silent_words.mjs";
import { app_ceb_bible_gloss_words_rows_names_apart } from "./app_ceb_bible_gloss_words_rows_names_apart.mjs";
import { gloss_words_repair_priced_generic } from "./gloss_words_repair_priced_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_repairs_priced() {
  "What draining the Cebuano queue of root-silent words would cost, priced against the store before anything is written: how many explanations are at fault, how many the same repair would overwrite that already name the root, and which rows can be repaired without losing anything.";
  "The queue is a list of words and the fault is a list of sightings, and reading the first as though it were the second is how a tidying job destroys good writing. A word standing in the queue at six sightings has every one of its sightings replaced by the one sentence written for it, and for a common word almost all of those are already correct - so the repair that looks cheapest on the queue is the most expensive one there is. Nothing was saying so before this ran.";
  "The lossless rows are the answer to what is safe: every sighting of the word is at fault, so no correct explanation exists to be lost. Read that count beside the queue's own length before agreeing to any bulk repair.";
  "Names are taken out first, exactly as the queue itself takes them out, because a proper name has no Cebuano root and no honest sentence can be written naming one. Pricing them would be pricing work that must not be done.";
  "It reads and reports. Nothing is written, and the deciding is left where it belongs.";
  arguments_assert(arguments, 0);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let silent_words = gloss_offenders_roots_silent_words(offenders);
  let apart = await app_ceb_bible_gloss_words_rows_names_apart(silent_words);
  let rows = property_get(apart, "words");
  let priced = await gloss_words_repair_priced_generic(
    app_ceb_bible_gloss_generate,
    rows,
  );
  return priced;
}
