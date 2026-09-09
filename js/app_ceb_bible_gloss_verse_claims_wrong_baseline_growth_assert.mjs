import { app_ceb_bible_gloss_verse_claims_wrong_baseline_path } from "./app_ceb_bible_gloss_verse_claims_wrong_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_verse_claims_wrong_baseline_growth_assert(
  known,
) {
  "Refuse to record a Cebuano explanation naming an unrelated verse that the record did not already hold.";
  "The record starts with six rather than empty, and every one of them wants a person. Each is a sentence that names a verse the dictionary cannot connect to the word, and only a reader can say whether the sentence claims the word stands there - which would be wrong - or says what happens there, which is right and merely looks like the other from outside.";
  "What may never happen is the six becoming seven without somebody looking. A claim arriving here is prose written today about a verse that holds nothing related, and the remedy is to read the sentence and either mend it or bank it deliberately - not to let a rewrite widen the record on the way past.";
  let path = app_ceb_bible_gloss_verse_claims_wrong_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless a sentence nobody has read - open the chapter at that word and say whether it claims the word stands in the verse it names, mending it if it does, rather than widening the record",
  );
}
