import { arguments_assert } from "./arguments_assert.mjs";
export function bible_word_voices(text) {
  "$plain text";
  "Every voice that says one Bible word, in the order a reader's taps go round them, chosen from the letters the word is written in.";
  "★ HEBREW IS FOUR PEOPLE, TWO MEN AND TWO WOMEN, ALTERNATING, for the reason the English words have four: a learner who only ever hears one mouth learns that mouth. They were chosen on 25 Genesis 1 words from eight Gemini voices that had each come through an earlier round: Kore was marked best on all 16 words that split the voices, Sadaltager and Puck on 15. Aoede and Gacrux tied at 14, and Gacrux was taken because its description, mature, is the more Bible-like - the rule the listener chose voices by. Charon had 13, Schedar 12, Sulafat 10.";
  "Greek is still one voice, because only one Greek voice has been heard to say the words right; the list is a list so a second one can join without anything else changing.";
  "THE LETTERS DECIDE RATHER THAN THE PAGE, for the reason given on the single voice's function: the word is the only thing present at the tap that knows its language.";
  arguments_assert(arguments, 1);
  let hebrew = /[֐-׿]/.test(text);
  if (hebrew) {
    let r = ["he-IL-Sadaltager", "he-IL-Kore", "he-IL-Puck", "he-IL-Gacrux"];
    return r;
  }
  let r2 = ["el-GR-Wavenet-B"];
  return r2;
}
