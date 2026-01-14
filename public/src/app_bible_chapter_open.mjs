import { marker } from "../../../love/public/src/marker.mjs";
import { app_bible_home } from "../../../love/public/src/app_bible_home.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { app_bible_chapter_set } from "../../../love/public/src/app_bible_chapter_set.mjs";
export function app_bible_chapter_open(context, hash, chapter_code) {
  marker("1");
  app_bible_chapter_set(hash, chapter_code);
  app_generic_screen_set(context, app_bible_home);
}
