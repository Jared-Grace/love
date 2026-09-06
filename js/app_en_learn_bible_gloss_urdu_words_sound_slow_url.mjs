import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_path } from "./gloss_word_sound_path.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path } from "./app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow_version } from "./app_en_learn_bible_gloss_urdu_words_sound_slow_version.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_slow_url(
  word,
  voice,
) {
  "$plain word";
  "$plain voice";
  "Where a reader's phone fetches one person saying one English word slowly, so that a learner who did not catch it can ask for it again more clearly.";
  "★ IT IS THE SAME WORD AND THE SAME VOICE AS THE ORDINARY ADDRESS AND ONLY THE FOLDER DIFFERS, WHICH IS WHAT LETS THE SLOW BUTTON FOLLOW WHOEVER JUST SPOKE. A learner taps a word, hears somebody, misses it, and taps the slow button - and the person who says it again has to be the person they just heard, or they are being asked to recognise a new mouth at the moment they are struggling with the word. So the voice is passed in rather than chosen here, exactly as it is for the ordinary recording.";
  "It carries its own stamp rather than the ordinary recordings' one, so that changing the way words are slowed does not make every phone fetch every ordinary recording again.";
  arguments_assert(arguments, 2);
  let file_name = gloss_word_sound_path(word, voice);
  let destination =
    app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path(file_name);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  let stamp = app_en_learn_bible_gloss_urdu_words_sound_slow_version();
  let stamped = text_combine_multiple([url, "&v=", stamp]);
  return stamped;
}
