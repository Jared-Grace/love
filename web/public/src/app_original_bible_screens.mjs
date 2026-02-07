import { app_bible_languages } from "../../../love/public/src/app_bible_languages.mjs";
import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_bible_books } from "../../../love/public/src/app_bible_books.mjs";
export function app_original_bible_screens() {
  let screens = [
    app_original_bible_home,
    app_bible_books,
    app_bible_chapters,
    app_bible_languages,
  ];
  return screens;
}
