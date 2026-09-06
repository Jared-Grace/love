import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_path } from "./gloss_word_sound_path.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_upload_path } from "./app_en_learn_bible_gloss_urdu_words_sound_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_version } from "./app_en_learn_bible_gloss_urdu_words_sound_version.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_en_learn_bible_gloss_urdu_words_sound_url(word, voice) {
  "$plain word";
  "$plain voice";
  "Where a reader's phone fetches one person saying one English word, so that tapping the word plays somebody saying it.";
  "★ THE WORD IS THE WHOLE OF THE ADDRESS, AND WHERE IT SAT IN A CHAPTER IS NO PART OF IT. A recording belongs to the word and not to the verse it turned up in, so one recording serves every chapter the word ever appears in, and a chapter written next year asks for the same file rather than needing its own. That is also what makes the recordings cost what they cost: sixteen hundred of them cover nineteen and a half thousand explanations.";
  "★ THE VOICE IS ASKED FOR RATHER THAN CHOSEN HERE, WHICH IS WHAT KEEPS THIS AN ADDRESS AND NOT A DECISION. Several people say every word, and which one a reader hears next is a running position in a cycle that has to be remembered between taps. Remembered here it would be remembered once for the whole app, and this function would quietly answer a different thing each time it was asked the same question - which is exactly what nobody expects of something called a url. So the cycle is kept by whoever is doing the tapping and the answer here stays the same answer for the same two words, forever.";
  "It takes the word as it was written, capital letter and apostrophe and all, and the quieting of that into a file name is done elsewhere rather than spelled here. That name has to be agreed on by the recorder, the uploader and this, and only this side would ever find out they had stopped agreeing - by a reader tapping a word and hearing nothing at all.";
  arguments_assert(arguments, 2);
  let file_name = gloss_word_sound_path(word, voice);
  let destination =
    app_en_learn_bible_gloss_urdu_words_sound_upload_path(file_name);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  let stamp = app_en_learn_bible_gloss_urdu_words_sound_version();
  let stamped = text_combine_multiple([url, "&v=", stamp]);
  return stamped;
}
