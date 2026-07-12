import { app_bible_languages } from "./app_bible_languages.mjs";
import { app_bible_verses } from "./app_bible_verses.mjs";
import { app_bible_chapters } from "./app_bible_chapters.mjs";
import { app_bible_books } from "./app_bible_books.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_bible_screens_base(a) {
  let concated = list_concat(a, [
    app_bible_books,
    app_bible_chapters,
    app_bible_verses,
    app_bible_languages,
  ]);
  return concated;
}
