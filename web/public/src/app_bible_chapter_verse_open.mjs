import { app_bible_verse_open } from "../../../love/public/src/app_bible_verse_open.mjs";
import { app_bible_chapter_set } from "../../../love/public/src/app_bible_chapter_set.mjs";
export function app_bible_chapter_verse_open(chapter, context, verse_number) {
  app_bible_chapter_set(chapter);
  app_bible_verse_open(context, verse_number);
}
