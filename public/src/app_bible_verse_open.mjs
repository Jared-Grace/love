import { app_bible_chapter_open } from "../../../love/public/src/app_bible_chapter_open.mjs";
import { app_bible_verse_set } from "../../../love/public/src/app_bible_verse_set.mjs";
export function app_bible_verse_open(context, hash, chapter_code) {
  app_bible_verse_set(hash, chapter_code);
  app_bible_chapter_open(hash, context);
}
