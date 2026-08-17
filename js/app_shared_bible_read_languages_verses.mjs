import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_read_verse_here_is } from "./app_shared_bible_read_verse_here_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_bible_read_languages_verses(
  context,
  chapter_code,
  verse_numbers_chosen,
  ref_mode,
  bar,
  content,
  books,
  chapter_previous,
  chapter_next,
  languages_chosen,
  ref_line,
  hash,
) {
  arguments_assert(arguments, 12);
  let r = await app_shared_bible_read_verse_here_is(
    context,
    chapter_code,
    verse_numbers_chosen,
    ref_mode,
    bar,
    content,
    books,
    chapter_previous,
    chapter_next,
    languages_chosen,
    ref_line,
    hash,
  );
  let verse_here_is = property_get(r, "verse_here_is");
  let primary_verses = property_get(r, "primary_verses");
  let show_language_names = property_get(r, "show_language_names");
  let verse_rows = property_get(r, "verse_rows");
  let updates = property_get(r, "updates");
  let languages_verses = property_get(r, "languages_verses");
  let r2 = {
    verse_here_is,
    primary_verses,
    show_language_names,
    verse_rows,
    updates,
    languages_verses,
  };
  return r2;
}
