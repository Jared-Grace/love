import { arguments_assert } from "./arguments_assert.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_slow_version() {
  "The stamp carried on the end of every slow reading's address, changed by hand whenever the slow readings are sent up to storage again.";
  "★ IT IS ITS OWN STAMP RATHER THAN THE ORDINARY RECORDINGS' ONE, BECAUSE THE TWO SETS ARE REMADE FOR DIFFERENT REASONS. A voice is recorded again when the way it says a vowel is wrong; the slow readings are made again when the way of slowing is wrong. Sharing a stamp would make every phone fetch sixteen hundred ordinary recordings again to hear one change to the slowing, and fetch sixteen hundred slow readings again to hear one word respoken - on the slow connections this app is for, that is the difference between a change arriving and a change not being worth making.";
  "It is a date, so that reading it says when the slow readings were last sent up. Bump it in the same commit as the upload - bumped without an upload, phones fetch new addresses for files that never changed; uploaded without a bump, the new readings sit in storage and no phone that has been here before will ever ask for them.";
  "A letter follows the date when they go up twice in one day, which is the usual case rather than a rare one: the reason to make them again is almost always that somebody has just heard something wrong, and hearing it, saying so and fixing it all happen the same afternoon.";
  arguments_assert(arguments, 0);
  let stamp = "20260906";
  return stamp;
}
