import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_word_sound_voices() {
  "The cast the word buttons cycle through, in the order they cycle.";
  "★ FOUR PEOPLE RATHER THAN ONE, BECAUSE A LEARNER WHO ONLY EVER HEARS ONE MOUTH LEARNS THAT MOUTH. Real English arrives from men and women, higher and lower, and a word is only known once it is recognised whoever says it. Two men and two women is the smallest cast that says so.";
  "★ THE ORDER ALTERNATES MAN, WOMAN, MAN, WOMAN, BECAUSE THE ORDER IS FIXED AND ONLY THE STARTING PLACE IS DRAWN. Whatever place a reading starts from, every second tap changes sex - which is the difference a learner can hear without being told to listen for it. Grouped as two men then two women, half of all readings would open with the same two men in a row.";
  "★ THE ORDER HERE IS HEARD BUT NEVER RECORDED, SO IT MAY BE REARRANGED AT ANY TIME FOR NOTHING. The recorder asks each voice's own folder what is missing, so it does not care what order the names sit in, and a voice already recorded is skipped whatever place it is moved to.";
  "★ A CANDIDATE IS AUDITIONED ON \"the\" BEFORE ANYTHING ELSE, BECAUSE THAT ONE WORD HAS REJECTED MORE VOICES THAN EVERY OTHER WORD TOGETHER. It is said alone here in a form the phonemiser does not produce by itself, and that authored form is not read the same way by every mouth: of the men tried after Michael, one said it as \"though\", one as \"thy\", one as \"no\" - three different wrong words out of one spelling. The form is right, because Michael says it correctly, so what is being chosen is a mouth that agrees with it, and there is no way to know which one that is except to listen. Adam was chosen that way, from the nine that were left.";
  arguments_assert(arguments, 0);
  let voices = ["am_michael", "af_sarah", "am_adam", "af_bella"];
  return voices;
}
