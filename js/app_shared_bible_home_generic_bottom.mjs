import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { app_shared_bible_passage_kept_set } from "./app_shared_bible_passage_kept_set.mjs";
import { app_shared_bible_home_chapter_data } from "./app_shared_bible_home_chapter_data.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_home_bar_buttons } from "./app_shared_bible_home_bar_buttons.mjs";
import { app_shared_bible_home_verse_current_languages } from "./app_shared_bible_home_verse_current_languages.mjs";
import { app_shared_bible_verse_frame } from "./app_shared_bible_verse_frame.mjs";
import { app_shared_bible_verse_buttons_row } from "./app_shared_bible_verse_buttons_row.mjs";
export async function app_shared_bible_home_generic_bottom(
  hash,
  context,
  bar,
  content,
) {
  arguments_assert(arguments, 4);
  let verse_number_hash = app_shared_bible_hash_v_get(hash);
  let chapter_code = app_shared_bible_chapter_hash_get(hash);
  ("The passage is remembered for this tab here, so that going off to choose another one can be changed one's mind about. It is said by the screen that shows the passage rather than by the button that leaves it, because there is more than one way out of here and only one way in - and said here rather than in each app, because every app that draws a verse this way draws it through this.");
  app_shared_bible_passage_kept_set(context, chapter_code, [verse_number_hash]);
  let r = await app_shared_bible_home_chapter_data(chapter_code);
  let book_name = property_get(r, "book_name");
  let book_name_reading = property_get(r, "book_name_reading");
  let books = property_get(r, "books");
  let verses = property_get(r, "verses");
  let chapter_name = property_get(r, "chapter_name");
  app_shared_bible_home_bar_buttons(
    bar,
    context,
    chapter_code,
    book_name_reading,
    chapter_name,
    verse_number_hash,
  );
  let languages_verses = [];
  let r2 = await app_shared_bible_home_verse_current_languages(
    verses,
    verse_number_hash,
    chapter_code,
    books,
  );
  let languages_available = property_get(r2, "languages_available");
  let text_languages = property_get(r2, "text_languages");
  let verse_number = property_get(r2, "verse_number");
  let verse_current = property_get(r2, "verse_current");
  let r3 = app_shared_bible_verse_frame(content, text_languages);
  let top = property_get(r3, "top");
  let p_verse = property_get(r3, "p_verse");
  let bottom = app_shared_bible_verse_buttons_row(
    p_verse,
    chapter_name,
    book_name,
    verse_number,
  );
  let r4 = {
    chapter_code,
    book_name,
    chapter_name,
    languages_verses,
    languages_available,
    text_languages,
    verse_number,
    verse_current,
    top,
    p_verse,
    bottom,
  };
  return r4;
}
