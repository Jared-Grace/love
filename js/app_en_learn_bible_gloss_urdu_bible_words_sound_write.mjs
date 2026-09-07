import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_book_codes_new_testament_first } from "./ebible_book_codes_new_testament_first.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { ebible_version_book_words } from "./ebible_version_book_words.mjs";
import { gloss_words_sound_write_generic } from "./gloss_words_sound_write_generic.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_en_learn_bible_gloss_urdu_bible_words_sound_write() {
  "Records every English word the bible spells, book by book with the New Testament first, so that a word already has its sound on the day somebody authors the chapter that explains it.";
  "★ THIS ASKS THE BIBLE AND NOT THE GLOSS STORE, WHICH IS THE WHOLE DIFFERENCE FROM THE ONE BESIDE IT. Asking the store can only ever record what has already been authored, so a chapter finished this morning is silent until somebody remembers to run the recorder - and measured over one day, four passes each closed that gap and each saw it reopen within the hour, because authoring never stops and nothing triggers recording. The words are the verse's own words, so they are knowable from the text months early, and recording them ahead removes the race rather than chasing it.";
  "★ IT DOES NOT REPLACE THE STORE-FED RECORDER, IT RETIRES THE HURRY. A gloss may still spell a word the reader of the text does not produce - a possessive keeping its apostrophe is the measured case, three words in two and a half thousand - so the store-fed run stays as the thing that catches the remainder, and it now has almost nothing left to do.";
  "★ A BOOK AT A TIME, IN ALL FOUR VOICES, BEFORE MOVING ON. This is days of work and it will be stopped part way, so the unit is chosen to make what is finished worth having: stopped between books, every voice of every book before it is complete, which is a thing a reader can use. Doing a whole voice first would instead leave the entire bible readable in one mouth and silent in three.";
  "★ THE VOICES GO ONE AFTER ANOTHER FOR THE SAME REASON THEY DO NEXT DOOR: every run empties the same working folder and nothing left there says who spoke it, so two at once would file each other's words under the wrong name.";
  "Nothing here decides what is missing. Each call is handed the book's whole vocabulary and works out for itself which of it that voice has not said, so running this again after it was stopped costs only the reading, and running it after the store-fed recorder costs nothing at all.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  let book_codes = ebible_book_codes_new_testament_first();
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let voices = gloss_word_sound_voices();
  let done = [];
  async function book_each(book_code) {
    let words = await ebible_version_book_words(bible_folder, book_code);
    async function voice_each(voice) {
      let made = await gloss_words_sound_write_generic(words, sound_fn, voice);
      let noted = object_merge_set(
        {
          book_code: book_code,
        },
        made,
      );
      list_add(done, noted);
    }
    await each_async(voices, voice_each);
  }
  await each_async(book_codes, book_each);
  return done;
}
