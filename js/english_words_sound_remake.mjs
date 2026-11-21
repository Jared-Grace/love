import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { app_learn_en_gloss_urdu_words_sound } from "./app_learn_en_gloss_urdu_words_sound.mjs";
import { app_learn_en_gloss_urdu_words_sound_slow } from "./app_learn_en_gloss_urdu_words_sound_slow.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { gloss_word_sound_path } from "./gloss_word_sound_path.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { each_async } from "./each_async.mjs";
import { gloss_words_sound_write_generic } from "./gloss_words_sound_write_generic.mjs";
import { gloss_words_sound_slow_write_generic } from "./gloss_words_sound_slow_write_generic.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { file_content_type } from "./file_content_type.mjs";
import { cache_control_asset_value } from "./cache_control_asset_value.mjs";
import { firebase_upload_settings } from "./firebase_upload_settings.mjs";
import { app_learn_en_gloss_urdu_words_sound_upload_path } from "./app_learn_en_gloss_urdu_words_sound_upload_path.mjs";
import { app_learn_en_gloss_urdu_words_sound_slow_upload_path } from "./app_learn_en_gloss_urdu_words_sound_slow_upload_path.mjs";
export async function english_words_sound_remake(words) {
  "$plain words";
  "Says the English words named again, in every voice, at both speeds, and sends just those recordings up over the old ones - for when a word's saying has been changed after it was already recorded.";
  "★ THE OLD FILES ARE DELETED ON THIS MACHINE FIRST, BECAUSE THE RECORDER AND THE SLOWER BOTH SKIP A WORD THAT ALREADY HAS A FILE. Without that, changing how a name is said reaches nothing that was recorded before the change: measured 2026-11-21, Cush and Susa were picked that day and the recordings a reader heard dated from September.";
  "★ ONLY THE NAMED WORDS GO UP, NOT THE WHOLE FOLDER. The folder holds tens of thousands of recordings, and sending them all to change two would take the time of the whole set.";
  "Nothing is deleted in storage: each new recording is sent to the same address and replaces the old one there. Bump both stamps in the same commit, or phones that already kept the old recording keep playing it.";
  "The words arrive as one comma-joined word, as every list does on a command line.";
  arguments_assert(arguments, 1);
  let asked = text_split_comma(words);
  let sound_fn = app_learn_en_gloss_urdu_words_sound;
  let slow_fn = app_learn_en_gloss_urdu_words_sound_slow;
  let folder = local_function_folder(sound_fn);
  let folder_slow = local_function_folder(slow_fn);
  let voices = gloss_word_sound_voices();
  let relatives = [];
  function voice_relatives(voice) {
    function word_relative(word) {
      let relative = gloss_word_sound_path(word, voice);
      list_add(relatives, relative);
    }
    each(asked, word_relative);
  }
  each(voices, voice_relatives);
  async function relative_delete(relative) {
    let fast = path_join([folder, relative]);
    let slow = path_join([folder_slow, relative]);
    await each_async([fast, slow], file_delete_if_exists);
  }
  await each_async(relatives, relative_delete);
  let spoken = [];
  async function voice_speak(voice) {
    let made = await gloss_words_sound_write_generic(asked, sound_fn, voice);
    list_add(spoken, made);
  }
  await each_async(voices, voice_speak);
  let slowed = await gloss_words_sound_slow_write_generic(sound_fn, slow_fn);
  let sent = [];
  async function send(local_folder, relative, path_get) {
    let file_path = path_join([local_folder, relative]);
    let buffer = await file_read_buffer(file_path);
    let destination = path_get(relative);
    let content_type = file_content_type(relative);
    let cache_control = cache_control_asset_value();
    let settings = {
      contentType: content_type,
      resumable: false,
      metadata: {
        contentType: content_type,
        cacheControl: cache_control,
      },
    };
    await firebase_upload_settings(destination, settings, buffer);
    list_add(sent, destination);
  }
  async function relative_send(relative) {
    await send(
      folder,
      relative,
      app_learn_en_gloss_urdu_words_sound_upload_path,
    );
    await send(
      folder_slow,
      relative,
      app_learn_en_gloss_urdu_words_sound_slow_upload_path,
    );
  }
  await each_async(relatives, relative_send);
  let r = {
    spoken,
    slowed,
    sent,
  };
  return r;
}
