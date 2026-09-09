import { app_ceb_bible_gloss_words_unwritten_baseline_path } from "./app_ceb_bible_gloss_words_unwritten_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_words_unwritten_baseline_growth_assert(
  known,
) {
  "$plain known";
  "Refuse to record a Cebuano explained word missing from the translation that the record did not already hold.";
  "The record starts with the one word that was already in that state when the store was first read for this. It is a reading job rather than a sweep - somebody has to open the passage it is explained in and see whether the word was mis-spelled, whether the translation writes it joined to something else, or whether the explanation was painted under nothing at all.";
  "What may never happen is that one word becoming two. Every explanation is supposed to have come out of the passage it sits under, so a word arriving here is an explanation a reader will find nothing to stand on, and the remedy is to mend the spelling or take the explanation away rather than to widen the record - so the rewrite is refused at exactly the moment somebody would reach for it.";
  let path = app_ceb_bible_gloss_words_unwritten_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless an explanation the reader has nothing to paint under - mend the spelling so it matches the word the translation writes, or take the explanation away, rather than widening the record",
  );
}
