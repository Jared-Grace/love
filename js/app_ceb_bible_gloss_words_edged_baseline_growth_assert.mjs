import { app_ceb_bible_gloss_words_edged_baseline_path } from "./app_ceb_bible_gloss_words_edged_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_words_edged_baseline_growth_assert(
  known,
) {
  "$plain known";
  "Refuse to record a Cebuano explained word wearing a mark from its sentence that the record did not already hold.";
  "The record starts full and may only shrink. A hundred and nine words were already in that state when the store was first read for this, and each of them is a mend to one explanation rather than anything a sweep can do, because where the mark should have come off is a reading of the sentence it came from.";
  "★ WHAT MAY NEVER HAPPEN IS THE TAIL GROWING, BECAUSE EVERY WORD IN IT IS A WORD NO OTHER CHECK CAN SEE. The root and affix checks all ask the dictionary under the spelling the author typed, so a word wearing a quotation mark is asked for under a spelling no dictionary holds and is passed over in silence by all of them. Widening this record does not bank a known fault; it hides one word from every light in the repo at once.";
  let path = app_ceb_bible_gloss_words_edged_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would hide a word from every root and affix check there is, because they all ask the dictionary under the spelling the author typed - take the mark off the word the explanation is written against, rather than widening the record",
  );
}
