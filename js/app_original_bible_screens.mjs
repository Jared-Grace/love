import { app_original_bible_home } from "./app_original_bible_home.mjs";
import { app_bible_languages } from "./app_bible_languages.mjs";
import { app_bible_chapters } from "./app_bible_chapters.mjs";
import { app_bible_books } from "./app_bible_books.mjs";
export function app_original_bible_screens() {
  let screens = [
    app_original_bible_home,
    app_bible_books,
    app_bible_chapters,
    app_bible_languages,
  ];
  return screens;
}
