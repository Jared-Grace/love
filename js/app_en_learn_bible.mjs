import { app_en_learn_bible_home } from "./app_en_learn_bible_home.mjs";
import { app_en_learn_bible_screens } from "./app_en_learn_bible_screens.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
export async function app_en_learn_bible(context) {
  "Learn English from the Bible: read a verse in English with every word explained in the language you already read.";
  "The app is named for the language being learned rather than for the language being read from, so a reader of another language is served by this same app choosing another store of explanations, not by an app of their own.";
  let app_fn = app_en_learn_bible;
  let screens = app_en_learn_bible_screens();
  let screen_home = app_en_learn_bible_home;
  await app_shared_bible_initialize(context, app_fn, screens, screen_home);
}
