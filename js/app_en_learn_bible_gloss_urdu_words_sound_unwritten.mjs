import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_en_learn_bible_gloss_urdu_words } from "./app_en_learn_bible_gloss_urdu_words.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_book_codes_new_testament_first } from "./ebible_book_codes_new_testament_first.mjs";
import { ebible_version_book_words } from "./ebible_version_book_words.mjs";
import { each_async } from "./each_async.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { gloss_word_sound_voice_folder } from "./gloss_word_sound_voice_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_filter } from "./list_filter.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
import { properties_size } from "./properties_size.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_unwritten() {
  "The recordings of English words sitting on this machine that no word anybody actually wrote is filed under.";
  "★ A RECORDING NOBODY CAN REACH IS INVISIBLE UNTIL SOMETHING ASKS THIS QUESTION. It is a real file of real audio filed under a real-looking name, so nothing about it looks wrong from the disk, from storage, or from the run that made it. The only thing that can call it junk is the list of words somebody wrote, and that list lives in two different places.";
  "★ IT ASKS BOTH WORD SOURCES AND WOULD BE DANGEROUS ASKING ONE. Two recorders fill this same folder: one takes its words from the gloss store, so it holds what has been authored, and one takes them from the bible, so it holds what is knowable ahead. A recording missing from either list is still wanted if the other list spells it, and a sweep built on one source alone would call several thousand good recordings junk.";
  "It compares the filed name rather than the word, because the name is what the disk holds and the rule that makes one is not reversible - an apostrophe and a comma both arrive here as an underline, so a word cannot be read back out of a file name.";
  "Nothing is removed here. What comes back is a list to look at, because the answer is the argument for deleting and the deleting is not undoable.";
  arguments_assert(arguments, 0);
  let keys = {};
  function word_each(word) {
    let key = gloss_word_sound_key(word);
    property_set(keys, key, true);
  }
  let found = await app_en_learn_bible_gloss_urdu_words();
  let authored = property_get(found, "words");
  each(authored, word_each);
  let bible_folder = ebible_folder_english();
  let book_codes = ebible_book_codes_new_testament_first();
  async function book_each(book_code) {
    let spelled = await ebible_version_book_words(bible_folder, book_code);
    each(spelled, word_each);
  }
  await each_async(book_codes, book_each);
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let folder = local_function_folder(sound_fn);
  let voices = gloss_word_sound_voices();
  let unwritten = [];
  let held = 0;
  function sound_is(name) {
    let is = text_ends_with(name, ".mp3");
    return is;
  }
  async function voice_each(voice) {
    let spoken = gloss_word_sound_voice_folder(folder, voice);
    let names = await folder_read_files_exists_ensure(spoken);
    let said = list_filter(names, sound_is);
    let right = list_size(said);
    held = add(held, right);
    function said_each(name) {
      let key = text_suffix_without(name, ".mp3");
      let written = property_get_or_null(keys, key);
      if (written) {
        return;
      }
      let relative = path_join([voice, name]);
      list_add(unwritten, relative);
    }
    each(said, said_each);
  }
  await each_async(voices, voice_each);
  let r = {
    voices: list_size(voices),
    words: properties_size(keys),
    held: held,
    unwritten: unwritten,
  };
  return r;
}
