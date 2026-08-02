import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { app_bible_verse_set } from "./app_bible_verse_set.mjs";
export async function app_bible_verse_open(context, verse_number) {
  app_bible_verse_set(verse_number);
  await app_shared_bible_screen_home_set(context);
}
