import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_word_sound_voices() {
  "The cast the word buttons cycle through, in the order they cycle.";
  "★ FOUR PEOPLE RATHER THAN ONE, BECAUSE A LEARNER WHO ONLY EVER HEARS ONE MOUTH LEARNS THAT MOUTH. Real English arrives from men and women, higher and lower, and a word is only known once it is recognised whoever says it. Two men and two women is the smallest cast that says so.";
  "★ THE ORDER ALTERNATES MAN, WOMAN, MAN, WOMAN, BECAUSE THE ORDER IS FIXED AND ONLY THE STARTING PLACE IS DRAWN. Whatever place a reading starts from, every second tap changes sex - which is the difference a learner can hear without being told to listen for it. Grouped as two men then two women, half of all readings would open with the same two men in a row.";
  "★ THE LIST IS SHORT WHILE THE CASTING IS STILL GOING ON, AND THAT COSTS NOTHING. Every voice is a full run of the whole vocabulary - about two hours - and the recorder asks each voice's own folder what is missing, so adding a name here and running it again records exactly the new person and re-records nobody.";
  "★ A CANDIDATE IS AUDITIONED ON \"the\" BEFORE ANYTHING ELSE, BECAUSE THAT ONE WORD HAS REJECTED MORE VOICES THAN EVERY OTHER WORD TOGETHER. It is said alone here in a form the phonemiser does not produce by itself, and that authored form is not read the same way by every mouth: of the four men tried after Michael, one said it as \"though\", one as \"thy\", one as \"no\". The form is right - Michael says it correctly - so what is being chosen is a mouth that agrees with it, and there is no way to know which one that is except to listen.";
  arguments_assert(arguments, 0);
  let voices = ["am_michael", "af_sarah", "af_bella"];
  return voices;
}
