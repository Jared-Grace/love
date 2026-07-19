import { ebible_language_english } from "./ebible_language_english.mjs";
import { app_shared_bible_open } from "./app_shared_bible_open.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
export function app_shared_bible_open_en(chapter_code, verse_number) {
  let v = ebible_language_english();
  ("these links point at one verse, so open the verse reader");
  app_shared_bible_open(
    [v],
    chapter_code,
    verse_number,
    app_shared_bible_mode_verse(),
  );
}
