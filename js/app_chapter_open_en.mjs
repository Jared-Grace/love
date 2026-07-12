import { ebible_language_english } from "./ebible_language_english.mjs";
import { app_chapter_open } from "./app_chapter_open.mjs";
export function app_chapter_open_en(chapter_code, verse_number) {
  let v = ebible_language_english();
  app_chapter_open([v], chapter_code, verse_number);
}
