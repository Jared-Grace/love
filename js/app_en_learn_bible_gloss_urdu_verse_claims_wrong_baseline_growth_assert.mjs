import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_path } from "./app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_growth_assert(
  known,
) {
  "Refuse to record an Urdu explanation naming an unrelated verse that the record did not already hold.";
  "The record starts at two thousand eight hundred and ninety-seven rather than empty, and every one of them wants a person. Each is a sentence naming a verse that holds nothing built on the word's English root, and only a reader can say whether it claims the word stands there - which would be wrong - or points at some other word standing there, or says the word was absent from it, both of which are right and arrive looking identical from outside.";
  "What may never happen is that number growing without somebody looking. A claim arriving here is prose written today about a verse that holds nothing related, and the remedy is to read the sentence and either mend it or bank it deliberately - not to let a chapter written tonight widen the record on the way past.";
  arguments_assert(arguments, 1);
  let path = app_en_learn_bible_gloss_urdu_verse_claims_wrong_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless a sentence nobody has read - open the chapter at that word and say whether it claims the word stands in the verse it names, mending it if it does, rather than widening the record",
  );
}
