import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_bible_verses } from "./app_bible_verses.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
export async function app_shared_bible_chapter_open(context, chapter_code) {
  arguments_assert(arguments, 2);
  app_shared_bible_chapter_set(chapter_code);
  await app_shared_screen_set(context, app_bible_verses);
}
