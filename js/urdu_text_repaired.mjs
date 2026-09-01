import { urdu_allah_to_god } from "./urdu_allah_to_god.mjs";
import { urdu_glued_words_split } from "./urdu_glued_words_split.mjs";
export function urdu_text_repaired(text) {
  "One piece of Urdu writing with everything this repo knows to be wrong with the downloaded Urdu bible put right in it.";
  "There is one place for these so that the next one found joins a list rather than growing the reader that happens to call it. The reader's job is to say which verse is which; what a particular translation gets wrong about a particular word is a different job, and it belongs to the language, not to the reader.";
  "The repairs run over the text as it is read, never over the downloaded file. The download is what the publisher published and is worth keeping as it came, so that a later argument about what was changed can be settled by looking; and a repair applied at reading time survives the file being fetched again, which a repair written into the file would not.";
  "IT IS NOT SAFE OVER ANY WRITING BUT THE URDU BIBLE'S, and it used to say the opposite here. Every repair in it is written in the Arabic script, which Arabic, Persian, Kurdish, Sindhi, Pashto and Uyghur are written in too, and one of them replaces the Arabic spelling of the name of God with the Urdu word for God. That is right in the Urdu bible and wrong in an Arabic one - and the Arabic bible in this archive writes that name in six hundred and thirty-seven of its chapters, so run over everything this would quietly put a word that is not Arabic where the name of God stands, and nothing anywhere would say so.";
  "So this is asked for by name and never by shape. Which bible a piece of writing came from is what decides whether it is repaired, and that decision is made one name along rather than here, in the one place both readings of a chapter come through.";
  let worded = urdu_allah_to_god(text);
  let spaced = urdu_glued_words_split(worded);
  return spaced;
}
