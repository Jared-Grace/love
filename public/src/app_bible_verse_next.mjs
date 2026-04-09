import { app_bible_verse_change } from "../../../love/public/src/app_bible_verse_change.mjs";
import { app_bible_chapter_next } from "../../../love/public/src/app_bible_chapter_next.mjs";
import { list_next_try } from "../../../love/public/src/list_next_try.mjs";
export async function app_bible_verse_next(
  verses,
  verse_current,
  context,
  chapter_code,
) {
  let verse_get = list_next_try;
  let chapter_change = app_bible_chapter_next;
  await app_bible_verse_change(
    verse_get,
    verse_current,
    chapter_change,
    context,
    chapter_code,
  );
}
