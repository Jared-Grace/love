import { object_property_names } from "./object_property_names.mjs";
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
import { set_new } from "./set_new.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { set_add } from "./set_add.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { properties_size } from "./properties_size.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_missing() {
  "The words nobody has a recording of yet, and which voices are short of each one.";
  "★ IT IS THE OTHER HALF OF THE QUESTION THE JUNK-FINDER BESIDE IT ASKS, AND ONLY THE TWO TOGETHER SAY WHETHER THE RECORDINGS ARE FINISHED. That one walks the folder and asks what no word claims; this walks the words and asks what no file answers to. A folder with nothing junk in it can still be half empty, and a folder with every word in it can still be carrying a pile nobody wants, so neither answer stands in for the other.";
  "★ THE ONLY WAY TO LEARN THIS TODAY IS TO START THE RECORDER, WHICH IS WHY IT IS WORTH A NAME. The recorder works out its own missing set and then immediately spends four seconds of this machine on every word of it, so asking what is left has until now cost the same as doing it. Asked here it costs two folder reads, and it can be asked while a recording run is going on.";
  "★ IT ASKS BOTH WORD SOURCES FOR THE SAME REASON THE JUNK-FINDER DOES. Two recorders fill this folder - one fed by the explanations already authored and one fed by the bible text, which runs ahead of the authoring - so a word is wanted if either list spells it, and asking one source alone would call the other's whole vocabulary missing.";
  "It compares the filed name rather than the word, because the name is what the disk holds and the rule that makes one is not reversible - an apostrophe and a comma both arrive as an underline.";
  "The voices short of a word travel with it rather than being counted, because a word missing from one mouth of four and a word nobody has ever said are the same number otherwise, and they are not the same problem.";
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
  let said = {};
  function sound_is(name) {
    let is = text_ends_with(name, ".mp3");
    return is;
  }
  async function voice_each(voice) {
    let spoken = gloss_word_sound_voice_folder(folder, voice);
    let names = await folder_read_files_exists_ensure(spoken);
    let heard = list_filter(names, sound_is);
    let recorded = set_new();
    function heard_each(name) {
      let key = text_suffix_without(name, ".mp3");
      set_add(recorded, key);
    }
    each(heard, heard_each);
    property_set(said, voice, recorded);
  }
  await each_async(voices, voice_each);
  let missing = [];
  let key_names = object_property_names(keys);
  function key_each(key) {
    let short = [];
    function voice_short(voice) {
      let recorded = property_get(said, voice);
      let has = set_includes(recorded, key);
      if (has) {
        return;
      }
      list_add(short, voice);
    }
    each(voices, voice_short);
    let none = list_empty_is(short);
    if (none) {
      return;
    }
    let entry = {
      key: key,
      voices: short,
    };
    list_add(missing, entry);
  }
  each(key_names, key_each);
  let r = {
    voices: list_size(voices),
    words: properties_size(keys),
    missing: missing,
  };
  return r;
}
