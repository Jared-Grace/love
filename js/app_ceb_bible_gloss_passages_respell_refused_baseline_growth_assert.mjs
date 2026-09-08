import { app_ceb_bible_gloss_passages_respell_refused_baseline_path } from "./app_ceb_bible_gloss_passages_respell_refused_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_baseline_growth_assert(
  known,
) {
  "Refuse to record a Cebuano passage the respell walks past that the record did not already hold.";
  "The record starts full rather than empty, because thirteen of these were already in the store when it was first read and none of them has a shortcut in it - each is a passage where what was explained and what was written came out to different numbers, and finding which word was missed is a reading job. Banking that tail is honest; pretending the store is clean is not.";
  "What may never happen is the tail growing. A passage arriving here that the record did not hold is a chapter authored today whose explanations do not line up with its words, and the remedy is to write the missing explanation rather than to widen the record - so the rewrite is refused at exactly the moment somebody would reach for it.";
  let path = app_ceb_bible_gloss_passages_respell_refused_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless a passage the respell has quietly stopped touching - explain the word that was missed so the two counts come out the same, rather than widening the record",
  );
}
