import { arguments_assert } from "./arguments_assert.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_version() {
  "The stamp carried on the end of every word recording's address, changed by hand whenever the recordings are sent up to storage again.";
  "★ IT IS WHAT LETS A RECORDING BE KEPT FOR A YEAR AND STILL BE REPLACEABLE. The address of a recording is the word itself, which is the whole point of it - so the address stays the same when the same word is recorded again in a better voice, or after a name that was being said wrongly is fixed. A phone told to keep that address for a year would go on saying the old one for a year, and there would be no way to reach it. A stamp on the end makes the new recording a new address, which the phone has never seen and so must fetch.";
  "A word recording is the case where the long cache is worth most and the trap is worst. A reader learning English taps word after word, so the same few hundred files are asked for over and over on a slow connection; and the one thing worth fixing about a recording is exactly the thing an unchangeable address would freeze.";
  "It is one stamp for all of them rather than one each, for the same reason the pictures have one: they go up together, and a phone fetching a recording that did not change costs one load of one small file, once.";
  "It is a date, so that reading it says when the recordings were last sent up. Bump it in the same commit as the upload - bumped without an upload, phones fetch new addresses for files that never changed; uploaded without a bump, the new recordings sit in storage and no phone that has been here before will ever ask for them.";
  "★ A LETTER FOLLOWS THE DATE WHEN THE RECORDINGS GO UP TWICE IN ONE DAY, WHICH IS NOT A RARE CASE BUT THE USUAL ONE. The reason to record again is almost always that somebody has just heard something wrong, and hearing it, saying so and fixing it all happen the same afternoon. A date alone cannot tell those two uploads apart, so the second one would reach no phone that had already fetched the first - the exact failure this stamp exists to prevent, hidden behind a stamp that looks like it was bumped.";
  arguments_assert(arguments, 0);
  let stamp = "20260905b";
  return stamp;
}
