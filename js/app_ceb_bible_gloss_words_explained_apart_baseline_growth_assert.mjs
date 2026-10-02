import { app_ceb_bible_gloss_words_explained_apart_baseline_path } from "./app_ceb_bible_gloss_words_explained_apart_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_baseline_growth_assert(
  known,
) {
  "$plain known";
  "Refuse to record a Cebuano word explained two ways that the record did not already hold.";
  "The record starts full and may only shrink. Eight hundred and three words were explained more than one way when the store was read for this on the second of October, and each of them is a person reading two passages and deciding which explanation to keep, rather than anything a sweep can do.";
  "That floor was thirty six until that morning, and it moved because the reading was widened rather than because the store got worse. The reader beneath used to match the word root followed by a quoted word and nothing else, and a pass that rewrote nine hundred and sixty seven of nine hundred and seventy nine chapters writes comes from kalooy instead - so all thirty six went quiet in one morning without one of them being mended. Widening the reading leaves a ratchet with no honest floor to measure against, which is the one case this refusal cannot tell apart from somebody forgiving a fault, so starting the record again is a separate command with a person's name on it rather than anything reachable from here.";
  "★ THIS IS THE ONE FAULT IN THE STORE THAT NEEDS NOTHING FETCHED TO SETTLE. Every other reading of these explanations asks binisaya.com, and the dictionary has nothing to say about four fifths of them. One word does not come from two unrelated roots, so where the app explains a word two ways it has written something wrong somewhere - and that stands with no source consulted and no network reached. Widening the record buries the only question here that can be answered from what is already on the disk.";
  let path = app_ceb_bible_gloss_words_explained_apart_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "a new word is now explained one way in one chapter and another way in another, which no dictionary is needed to see is wrong somewhere - open the two passages and keep the explanation that is right, rather than widening the record",
  );
}
