import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow } from "./app_en_learn_bible_gloss_urdu_words_sound_slow.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { gloss_word_sound_voice_folder } from "./gloss_word_sound_voice_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_filter } from "./list_filter.mjs";
import { set_new } from "./set_new.mjs";
import { set_add } from "./set_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { set_includes } from "./set_includes.mjs";
import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_slow_orphaned() {
  "The slower readings sitting on this machine that no ordinary recording is left underneath.";
  "★ THE SLOWER READINGS ARE MADE OUT OF THE ORDINARY ONES, SO A RECORDING TAKEN AWAY LEAVES ITS SLOW COPY BEHIND. Removing a recording removes it from the folder it was recorded into and from storage, and neither of those is the folder the slower ones live in - nothing about a slow file changes when the file it was made from stops existing. So a sweep over the ordinary recordings quietly leaves a matching pile of junk in the slow folder, and the pile only grows.";
  "★ THE QUESTION HERE IS SIMPLER THAN THE ONE ASKED OF THE ORDINARY RECORDINGS, AND DELIBERATELY SO. An ordinary recording is junk when no word anybody wrote is filed under it, which needs both lists of words to answer. A slow reading is junk when the recording it was made from is gone, which needs nothing but the two folders - and it stays right however the word lists change afterwards, because the ordinary folder is already the answer to that question.";
  "The comparison is made inside one voice rather than across all of them, because each person's recordings are their own folder and a name only means the same file when the voice is the same.";
  "Nothing is removed here. What comes back is a list to look at, because the answer is the argument for deleting and the deleting is not undoable.";
  arguments_assert(arguments, 0);
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let slow_fn = app_en_learn_bible_gloss_urdu_words_sound_slow;
  let folder_from = local_function_folder(sound_fn);
  let folder_to = local_function_folder(slow_fn);
  let voices = gloss_word_sound_voices();
  let orphaned = [];
  let held = 0;
  function sound_is(name) {
    let is = text_ends_with(name, ".mp3");
    return is;
  }
  async function voice_each(voice) {
    let spoken = gloss_word_sound_voice_folder(folder_from, voice);
    let names = await folder_read_files_exists_ensure(spoken);
    let said = list_filter(names, sound_is);
    let recorded = set_new();
    function said_each(name) {
      set_add(recorded, name);
    }
    each(said, said_each);
    let slower = gloss_word_sound_voice_folder(folder_to, voice);
    let slow_names = await folder_read_files_exists_ensure(slower);
    let slowed = list_filter(slow_names, sound_is);
    let right = list_size(slowed);
    held = add(held, right);
    function slowed_each(name) {
      let recorded_is = set_includes(recorded, name);
      if (recorded_is) {
        return;
      }
      let relative = path_join([voice, name]);
      list_add(orphaned, relative);
    }
    each(slowed, slowed_each);
  }
  await each_async(voices, voice_each);
  let r = {
    voices: list_size(voices),
    held: held,
    orphaned: orphaned,
  };
  return r;
}
