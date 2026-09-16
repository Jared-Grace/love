import { arguments_assert } from "./arguments_assert.mjs";
export function hebrew_translit_voice_spelling(translit) {
  "$plain translit";
  "The same pronunciation, respelled to say what the voice reading the word aloud actually says, so a reader sounding the word out and a reader listening to it are given the same thing.";
  "★ THE STORED SPELLING IS A SCHOLAR'S RECONSTRUCTION OF ANCIENT HEBREW and the voice speaks the Hebrew spoken today, so the two disagree by system and not by accident. Where they disagree the reader is being shown a sound nobody is making, which is worse than showing nothing, because it teaches a wrong word confidently.";
  "★ THE LETTER VAV IS WRITTEN w AND IS SAID v. Counted over the whole store, 6,610 of 106,283 pronunciations carry a w and not one carries a v, so the two never mix and the swap can never land on a v somebody meant.";
  "★ IT RESPELLS AT DRAWING TIME AND NEVER TOUCHES THE STORE, because what is stored came from the interlinear and stays answerable to it - and because a voice can be changed, whereas a store rewritten in a voice's image cannot be changed back.";
  "More letters belong here: the stored spelling also marks sounds this voice does not make. They are added as a listener reports them, one at a time, rather than guessed in a batch nobody has heard.";
  arguments_assert(arguments, 1);
  let joined = translit.replaceAll("ō·w", "ō"); let held = joined.replaceAll("ōw", "ō"); let said = held.replaceAll("w", "v");
  return said;
}
