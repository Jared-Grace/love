import { app_bible_chapter_verse_open } from "../../../love/public/src/app_bible_chapter_verse_open.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export function app_bible_chapter_set_default(hash, context) {
  let n = property_exists_not(hash, "c");
  if (n) {
    app_bible_chapter_verse_open(context, "JHN01", "1");
  }
}
