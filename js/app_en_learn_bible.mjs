import { app_en_learn_bible_home } from "./app_en_learn_bible_home.mjs";
import { app_en_learn_bible_screens } from "./app_en_learn_bible_screens.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
import { app_shared_bible_languages_chosen_default_ensure } from "./app_shared_bible_languages_chosen_default_ensure.mjs";
import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
export async function app_en_learn_bible(context) {
  "Learn English from the Bible: read a verse in English with every word explained in the language you already read.";
  "The app is named for the language being learned rather than for the language being read from, so a reader of another language is served by this same app choosing another store of explanations, not by an app of their own.";
  "Urdu is the one language explained so far, so it is what this opens in. Every other bible app here opens in english, which is the one thing a reader learning english cannot read - they would arrive at a verse in the language they came here not knowing, twice over, and nothing they could read at all until they found the settings.";
  let language = ebible_language_urdu();
  app_shared_bible_languages_chosen_default_ensure(language);
  let app_fn = app_en_learn_bible;
  let screens = app_en_learn_bible_screens();
  let screen_home = app_en_learn_bible_home;
  await app_shared_bible_initialize(context, app_fn, screens, screen_home);
}
