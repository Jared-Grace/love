import { arguments_assert } from "./arguments_assert.mjs";
export function hebrew_translit_voice_spelling(translit) {
  "$plain translit";
  "The same pronunciation, respelled to say what the voice reading the word aloud actually says, so a reader sounding the word out and a reader listening to it are given the same thing.";
  "★ THE STORED SPELLING IS A SCHOLAR'S RECONSTRUCTION OF ANCIENT HEBREW and the voice speaks the Hebrew spoken today, so the two disagree by system and not by accident. Where they disagree the reader is being shown a sound nobody is making, which is worse than showing nothing, because it teaches a wrong word confidently.";
  "★ THE LETTER VAV IS WRITTEN w AND IS SAID v. Counted over the whole store, 6,610 of 106,283 pronunciations carry a w and not one carries a v, so the two never mix and the swap can never land on a v somebody meant.";
  "★ A YOD CARRYING THE SILENT MARK AFTER A LONG VOWEL CLOSES THE SYLLABLE BEFORE IT rather than opening one of its own, so night is lay-lah and not la-ye-lah. All 39 places it stands read that way; the same mark on a yod with a consonant before it is said, and is left alone.";
  "★ THE SAME LETTER AFTER A LONG o IS NOT A VAV AT ALL but the vowel itself written out, said as nothing, and it is dropped rather than swapped: the day is yom and not yovm, and a servant is avdo and not avdow. That is 2,072 of the places the letter stands, so a swap that did not know the difference would spoil a third of them - and it did, until a listener said so.";
  "★ IT RESPELLS AT DRAWING TIME AND NEVER TOUCHES THE STORE, because what is stored came from the interlinear and stays answerable to it - and because a voice can be changed, whereas a store rewritten in a voice's image cannot be changed back.";
  "More letters belong here: the stored spelling also marks sounds this voice does not make. They are added as a listener reports them, one at a time, rather than guessed in a batch nobody has heard.";
  arguments_assert(arguments, 1);
  let tied = translit.replaceAll("ā·yə·", "āy·");
  let tied2 = tied.replaceAll("ō·yə·", "ōy·");
  let joined = tied2.replaceAll("ō·w", "ō");
  let held = joined.replaceAll("ōw", "ō");
  let said = held.replaceAll("w", "v");
  return said;
}
