import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { app_bible_verses } from "../../../love/public/src/app_bible_verses.mjs";
import { app_bible_languages } from "../../../love/public/src/app_bible_languages.mjs";
import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_bible_books } from "../../../love/public/src/app_bible_books.mjs";
import { app_bible_home } from "../../../love/public/src/app_bible_home.mjs";
export function app_bible_screens() {
  let a = [app_bible_home];
  let screens = list_concat(a, [
    app_bible_books,
    app_bible_chapters,
    app_bible_verses,
    app_bible_languages,
  ]);
  return screens;
}
