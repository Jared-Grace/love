import { app_bible_verses } from "../../../love/public/src/app_bible_verses.mjs";
import { app_shared_screen_later } from "../../../love/public/src/app_shared_screen_later.mjs";
import { app_bible_chapter_set } from "../../../love/public/src/app_bible_chapter_set.mjs";
export function app_bible_chapter_open(context, chapter_code) {
  app_bible_chapter_set(chapter_code);
  app_shared_screen_later(context, app_bible_verses);
}
