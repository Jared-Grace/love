import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_upload_namespace() {
  "The word the recordings of single English words are uploaded under.";
  "It spells the function that names the folder they are kept in, because that is what somebody reading an address will be looking for, and it is frozen so that a rename of the function leaves every recording exactly where it is. The reader's page asks for a recording by building this same address, so a word that followed a rename would move where the page looks while leaving all sixteen hundred files where they were, and every sound button would go silent at once.";
  arguments_assert(arguments, 0);
  let v = text_frozen("app_en_learn_bible_gloss_urdu_words_sound");
  return v;
}
