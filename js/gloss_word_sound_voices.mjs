import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_word_sound_voices() {
  "The cast the word buttons cycle through, in the order they cycle.";
  "★ FOUR PEOPLE RATHER THAN ONE, BECAUSE A LEARNER WHO ONLY EVER HEARS ONE MOUTH LEARNS THAT MOUTH. A word is not a fixed noise; it is a thing several different people can each say, and a reader who has only heard one of them has learned something narrower than the word. Two men and two women is the smallest cast that says so.";
  "★ THE LIST IS SHORT WHILE THE CASTING IS STILL GOING ON, AND THAT COSTS NOTHING. Every voice is a full run of the whole vocabulary - about two hours of this machine for sixteen hundred words - so a seat is filled here the day it is decided rather than waiting for the last one. The recorder asks the folder what is missing, so adding a name here and running it again records exactly the new voice and re-records nobody.";
  "The order is fixed and only where the cycle starts is chosen at random, so a reader who taps two words in a row is guaranteed two different people rather than merely likely to get them.";
  arguments_assert(arguments, 0);
  let voices = ["am_michael"];
  return voices;
}
