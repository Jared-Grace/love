import { not } from "./not.mjs";
import { app_en_learn_bible_language_known_ensure } from "./app_en_learn_bible_language_known_ensure.mjs";
import { app_en_learn_bible_reader_language_set } from "./app_en_learn_bible_reader_language_set.mjs";
import { app_en_learn_bible_languages_offered } from "./app_en_learn_bible_languages_offered.mjs";
import { app_shared_bible_languages_offered_key } from "./app_shared_bible_languages_offered_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_en_learn_bible_gloss_chapters_uploaded } from "./app_en_learn_bible_gloss_chapters_uploaded.mjs";
import { app_shared_bible_chapters_offered_key } from "./app_shared_bible_chapters_offered_key.mjs";
import { app_en_learn_bible_screens } from "./app_en_learn_bible_screens.mjs";
import { app_en_learn_bible_home } from "./app_en_learn_bible_home.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
export async function app_en_learn_bible(context) {
  "Learn English from the Bible: read a verse in English with every word explained in the language you already read.";
  "The app is named for the language being learned rather than for the language being read from, so a reader of another language is served by this same app choosing another store of explanations, not by an app of their own.";
  "A new reader is asked first which language they speak, and the answer is remembered. Every other bible app here opens in english, which is the one thing a reader learning english cannot read - they would arrive at a verse in the language they came here not knowing, twice over. Guessing a language instead would be the same mistake for every reader of the other one.";
  "It offers only the languages it can explain a word in. Every other bible reader here says nothing on the matter and is handed all of them, which is what they have always done.";
  "The same promise is made about chapters, and it has to be asked for rather than written down: which chapters have been explained is a fact about what has been published, and it grows without this file being told. So what is handed to the pickers is a way of asking, and it asks the store of the language the reader chose, because a chapter explained in Urdu is not one a reader of Tagalog can be shown.";
  "It is the one app here that speaks to its reader in something other than english, and it says so at the start and again on every reading screen, since the reader may change the language in between. Everything that has to know - which end a row of buttons begins at, and in time what is written on them - asks that one answer rather than guessing from whatever text happens to be on the screen, which here is english on purpose.";
  async function on_chosen() {
    await app_en_learn_bible(context);
  }
  let known = app_en_learn_bible_language_known_ensure(context, on_chosen);
  if (not(known)) {
    return;
  }
  app_en_learn_bible_reader_language_set();
  let languages_offered = app_en_learn_bible_languages_offered();
  let key = app_shared_bible_languages_offered_key();
  property_set(context, key, languages_offered);
  let chapters_ask = app_en_learn_bible_gloss_chapters_uploaded;
  let key_chapters = app_shared_bible_chapters_offered_key();
  property_set(context, key_chapters, chapters_ask);
  let app_fn = app_en_learn_bible;
  let screens = app_en_learn_bible_screens();
  let screen_home = app_en_learn_bible_home;
  await app_shared_bible_initialize(context, app_fn, screens, screen_home);
}
