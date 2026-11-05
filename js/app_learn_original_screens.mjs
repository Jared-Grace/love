import { app_learn_original_home } from "./app_learn_original_home.mjs";
import { app_shared_bible_languages } from "./app_shared_bible_languages.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
export function app_learn_original_screens() {
  let screens = [
    app_learn_original_home,
    app_shared_bible_books,
    app_shared_bible_chapters,
    app_shared_bible_languages,
  ];
  return screens;
}
