import { app_shared_bible_verse_set } from "./app_shared_bible_verse_set.mjs";
import { app_shared_bible_screen_home_set_write } from "./app_shared_bible_screen_home_set_write.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
export async function app_shared_bible_chapter_verse_open(
  context,
  chapter,
  verse_number,
) {
  function write() {
    app_shared_bible_chapter_set(chapter);
    app_shared_bible_verse_set(verse_number);
  }
  await app_shared_bible_screen_home_set_write(context, write);
}
