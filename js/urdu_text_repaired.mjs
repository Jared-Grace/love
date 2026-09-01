import { urdu_allah_to_god } from "./urdu_allah_to_god.mjs";
import { urdu_glued_words_split } from "./urdu_glued_words_split.mjs";
export function urdu_text_repaired(text) {
  "One piece of Urdu writing with everything this repo knows to be wrong with the downloaded Urdu bible put right in it.";
  "There is one place for these so that the next one found joins a list rather than growing the reader that happens to call it. The reader's job is to say which verse is which; what a particular translation gets wrong about a particular word is a different job, and it belongs to the language, not to the reader.";
  "The repairs run over the text as it is read, never over the downloaded file. The download is what the publisher published and is worth keeping as it came, so that a later argument about what was changed can be settled by looking; and a repair applied at reading time survives the file being fetched again, which a repair written into the file would not.";
  "It is safe over writing in any language, because each repair it runs is safe over writing in any language.";
  let worded = urdu_allah_to_god(text);
  let spaced = urdu_glued_words_split(worded);
  return spaced;
}
