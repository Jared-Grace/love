import { app_bible_verse_open } from "../../../love/public/src/app_bible_verse_open.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_bible_chapter_next } from "../../../love/public/src/app_bible_chapter_next.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { list_next_try } from "../../../love/public/src/list_next_try.mjs";
export async function app_bible_verse_next(
  verses,
  verse_current,
  context,
  chapter_code,
) {
  let verse_get = list_next_try;
  let chpater_change = app_bible_chapter_next;
  let next = verse_get(verses, verse_current);
  let ni = null_is(next);
  if (ni) {
    await chpater_change(context, chapter_code);
  } else {
    let verse_number = property_get(next, "verse_number");
    app_bible_verse_open(context, verse_number);
  }
}
