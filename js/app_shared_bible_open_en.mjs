import { ebible_language_english } from "../../love/js/ebible_language_english.mjs";
import { app_shared_bible_open } from "../../love/js/app_shared_bible_open.mjs";
export function app_shared_bible_open_en(chapter_code, verse_number) {
  let v = ebible_language_english();
  app_shared_bible_open([v], chapter_code, verse_number);
}
