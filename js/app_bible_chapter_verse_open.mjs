import { app_bible_verse_open } from "./app_bible_verse_open.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
export async function app_bible_chapter_verse_open(
  context,
  chapter,
  verse_number,
) {
  app_shared_bible_chapter_set(chapter);
  await app_bible_verse_open(context, verse_number);
}
