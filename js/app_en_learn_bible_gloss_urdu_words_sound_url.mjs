import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_upload_path } from "./app_en_learn_bible_gloss_urdu_words_sound_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_version } from "./app_en_learn_bible_gloss_urdu_words_sound_version.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_url(word) {
  "$plain word";
  "Where a reader's phone fetches the recording of one English word, so that tapping the word plays somebody saying it.";
  "★ THE WORD IS THE WHOLE OF THE ADDRESS, AND WHERE IT SAT IN A CHAPTER IS NO PART OF IT. A recording belongs to the word and not to the verse it turned up in, so one recording serves every chapter the word ever appears in, and a chapter written next year asks for the same file rather than needing its own. That is also what makes the recordings cost what they cost: sixteen hundred of them cover nineteen and a half thousand explanations.";
  "It takes the word as it was written, capital letter and apostrophe and all, and quiets it down into a file name here rather than asking every caller to do it. A caller that spelled the file name itself would be a second copy of that rule, and the day the two disagreed a reader would tap a word and hear nothing at all.";
  arguments_assert(arguments, 1);
  let key = gloss_word_sound_key(word);
  let file_name = text_combine_multiple([key, ".mp3"]);
  let destination =
    app_en_learn_bible_gloss_urdu_words_sound_upload_path(file_name);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  let stamp = app_en_learn_bible_gloss_urdu_words_sound_version();
  let stamped = text_combine_multiple([url, "&v=", stamp]);
  return stamped;
}
