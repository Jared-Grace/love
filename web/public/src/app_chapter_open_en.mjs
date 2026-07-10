import { app_chapter_open } from "../../../love/public/src/app_chapter_open.mjs";
import { ebible_language_en_code } from "../../../love/public/src/ebible_language_en_code.mjs";
export function app_chapter_open_en(chapter_code, verse_number) {
  let v = ebible_language_en_code();
  app_chapter_open([v], chapter_code, verse_number);
}
