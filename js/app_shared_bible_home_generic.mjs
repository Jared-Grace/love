import { app_shared_bible_home_frame } from "./app_shared_bible_home_frame.mjs";
import { app_shared_bible_verse_buttons_row } from "./app_shared_bible_verse_buttons_row.mjs";
import { app_shared_bible_verse_arrows } from "./app_shared_bible_verse_arrows.mjs";
import { app_shared_bible_verse_frame } from "./app_shared_bible_verse_frame.mjs";
import { app_shared_bible_home_chapter_button } from "./app_shared_bible_home_chapter_button.mjs";
import { app_shared_bible_books_verses_fetch } from "./app_shared_bible_books_verses_fetch.mjs";
import { app_shared_bible_home_share_button } from "./app_shared_bible_home_share_button.mjs";
import { app_shared_bible_home_copy_button } from "./app_shared_bible_home_copy_button.mjs";
import { app_shared_bible_home_verse_texts } from "./app_shared_bible_home_verse_texts.mjs";
import { app_shared_bible_home_bar_buttons } from "./app_shared_bible_home_bar_buttons.mjs";
import { app_shared_bible_home_languages } from "./app_shared_bible_home_languages.mjs";
import { app_shared_bible_passage_kept_set } from "./app_shared_bible_passage_kept_set.mjs";
import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_chapter_set_default } from "./app_shared_bible_chapter_set_default.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { html_p } from "./html_p.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_shared_bible_home_generic(
  context,
  lambda$a,
  bar_extra,
  app_fn,
  chapter_reader_is,
) {
  let r4 = app_shared_bible_home_frame(context, bar_extra);
  let bar = property_get(r4, "bar");
  let content = property_get(r4, "content");
  if (await app_shared_bible_chapter_set_default(context)) {
    return null;
  }
  let hash = html_hash_object_get();
  ("The same answer the chapter reader gives to a language code naming no bible we have, from the same function, so the two readers do not disagree about what a wrong link means.");
  let unknown_shown = app_shared_bible_hash_unknown_shown_is(content, hash);
  if (unknown_shown) {
    return null;
  }
  let verse_number_hash = app_shared_bible_hash_v_get(hash);
  let chapter_code = app_shared_bible_chapter_hash_get(hash);
  ("The passage is remembered for this tab here, so that going off to choose another one can be changed one's mind about. It is said by the screen that shows the passage rather than by the button that leaves it, because there is more than one way out of here and only one way in - and said here rather than in each app, because every app that draws a verse this way draws it through this.");
  app_shared_bible_passage_kept_set(context, chapter_code, [verse_number_hash]);
  let v = ebible_chapter_code_parse(chapter_code);
  let chapter_name = property_get(v, "chapter_name");
  let book_code = property_get(v, "book_code");
  let r = await app_shared_bible_books_verses_fetch(chapter_code);
  let verses = property_get(r, "verses");
  let books = property_get(r, "books");
  let book_name = ebible_book_code_to_name(books, book_code);
  app_shared_bible_home_bar_buttons(
    bar,
    context,
    chapter_code,
    book_name,
    chapter_name,
    verse_number_hash,
  );
  let verse_numbers_chosen = [];
  let languages_verses = [];
  let updates = [];
  let property_name = verse_number_key();
  let verse_current = list_find_property(
    verses,
    property_name,
    verse_number_hash,
  );
  let property_name2 = verse_number_key();
  let verse_number = property_get(verse_current, property_name2);
  let text = property_get(verse_current, "text");
  let r2 = await app_shared_bible_home_languages(
    chapter_code,
    verse_number_hash,
    verses,
    books,
    text,
  );
  let text_languages = property_get(r2, "text_languages");
  let languages_available = property_get(r2, "languages_available");
  let r3 = app_shared_bible_verse_frame(content, text_languages);
  let top = property_get(r3, "top");
  let p_verse = property_get(r3, "p_verse");
  let bottom = app_shared_bible_verse_buttons_row(
    p_verse,
    chapter_name,
    book_name,
    verse_number,
  );
  app_shared_bible_home_chapter_button(
    context,
    app_fn,
    chapter_reader_is,
    bottom,
  );
  app_shared_bible_home_copy_button(
    bottom,
    updates,
    verse_numbers_chosen,
    verse_number,
    chapter_code,
    languages_verses,
    p_verse,
  );
  app_shared_bible_home_share_button(
    hash,
    book_name,
    chapter_name,
    verse_number,
    bottom,
  );
  ("the verse NUMBER is not printed above the text here: the bar already carries it as the verse-picker button, so a single-verse view would show it twice. the WHOLE-CHAPTER reader is different — it prints each verse's number inline (",
    fn_name("app_shared_bible_read"),
    ") because that is the only place the number appears there. shared by ",
    fn_name("app_bible"),
    " and ",
    fn_name("app_g_bible"),
    ", so both single-verse views drop the duplicate together.");
  app_shared_bible_home_verse_texts(text_languages, top);
  let p = html_p(content);
  await lambda$a({
    p_verse,
    p,
    chapter_code,
    verse_number,
  });
  app_shared_bible_verse_arrows(context, chapter_code, verse_current, content);
  html_page_bottom_space(content);
  list_add_multiple(languages_verses, languages_available);
  let v4 = {
    bar,
  };
  return v4;
}
