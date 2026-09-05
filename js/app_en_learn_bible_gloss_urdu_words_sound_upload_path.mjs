import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_upload_namespace } from "./app_en_learn_bible_gloss_urdu_words_sound_upload_namespace.mjs";
import { firebase_function_upload_path } from "./firebase_function_upload_path.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_upload_path(
  file_name,
) {
  "$plain file_name";
  "Where one recording of one English word sits in storage.";
  "It takes the name of the file rather than the word, because the two sides that ask for it hold different things: the side sending recordings up is reading a folder and has a file name, and the side a reader taps has a word and turns it into one. Making the word into a file name in a single place is what keeps those two from ever disagreeing about which file they mean.";
  arguments_assert(arguments, 1);
  let f_name = app_en_learn_bible_gloss_urdu_words_sound_upload_namespace();
  let destination = firebase_function_upload_path(f_name, file_name);
  return destination;
}
