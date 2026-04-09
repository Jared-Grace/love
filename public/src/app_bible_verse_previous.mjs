import { app_bible_verse_change } from "../../../love/public/src/app_bible_verse_change.mjs";
import { app_bible_chapter_previous } from "../../../love/public/src/app_bible_chapter_previous.mjs";
import { list_previous_try } from "../../../love/public/src/list_previous_try.mjs";
export async function app_bible_verse_previous(
  chapter_code,
  verse_current,
  context,
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
