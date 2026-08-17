import { app_shared_bible_languages } from "./app_shared_bible_languages.mjs";
import { app_shared_bible_verses } from "./app_shared_bible_verses.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
import { app_shared_bible_offline } from "./app_shared_bible_offline.mjs";
import { app_shared_bible_about } from "./app_shared_bible_about.mjs";
import { app_shared_bible_licences } from "./app_shared_bible_licences.mjs";
import { app_shared_bible_money } from "./app_shared_bible_money.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_bible_screens_base(a) {
  let concated = list_concat(a, [
    app_shared_bible_books,
    app_shared_bible_chapters,
    app_shared_bible_verses,
    app_shared_bible_languages,
    app_shared_bible_settings,
    app_shared_bible_offline,
    app_shared_bible_about,
    app_shared_bible_licences,
    app_shared_bible_money,
  ]);
  return concated;
}
