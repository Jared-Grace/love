import { app_bible_verse_change } from "./app_bible_verse_change.mjs";
import { app_bible_chapter_previous } from "./app_bible_chapter_previous.mjs";
import { list_previous_try } from "./list_previous_try.mjs";
export async function app_bible_verse_previous(
  context,
  chapter_code,
  verse_current,
) {
  let verse_get = list_previous_try;
  let chapter_change = app_bible_chapter_previous;
  await app_bible_verse_change(
    context,
    chapter_code,
    verse_current,
    verse_get,
    chapter_change,
  );
}
