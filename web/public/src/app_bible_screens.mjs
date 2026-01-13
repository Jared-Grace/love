import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_bible_books } from "../../../love/public/src/app_bible_books.mjs";
import { app_bible_home } from "../../../love/public/src/app_bible_home.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_bible_screens() {
  marker("screens");
  let screens = {
    home: app_bible_home,
    books: app_bible_books,
    chapters: app_bible_chapters,
  };
  return screens;
}
