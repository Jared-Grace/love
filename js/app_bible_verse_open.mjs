import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_verse_set } from "./app_bible_verse_set.mjs";
export function app_bible_verse_open(context, verse_number) {
  app_bible_verse_set(verse_number);
  let screen_home = property_get(context, "screen_home");
  app_shared_screen_set(context, screen_home);
}
