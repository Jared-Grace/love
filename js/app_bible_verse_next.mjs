import { app_bible_verse_change } from "./app_bible_verse_change.mjs";
import { app_bible_chapter_next } from "./app_bible_chapter_next.mjs";
import { list_next_try } from "./list_next_try.mjs";
export async function app_bible_verse_next(
  context,
  chapter_code,
  verse_current,
) {
  let verse_get = list_next_try;
  let chapter_change = app_bible_chapter_next;
  await app_bible_verse_change(
    context,
    chapter_code,
    verse_current,
    verse_get,
    chapter_change,
  );
}
