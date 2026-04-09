import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_bible_verse_set } from "../../../love/public/src/app_bible_verse_set.mjs";
export function app_bible_verse_open(context, verse_number) {
  app_bible_verse_set(verse_number);
  let screen_home = property_get(context, "screen_home");
  app_shared_screen_set(context, screen_home);
}
