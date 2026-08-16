import { app_shared_bible_books_verses_fetch } from "./app_shared_bible_books_verses_fetch.mjs";
import { app_shared_bible_home_share_button } from "./app_shared_bible_home_share_button.mjs";
import { app_shared_bible_home_copy_button } from "./app_shared_bible_home_copy_button.mjs";
import { app_shared_bible_home_verse_texts } from "./app_shared_bible_home_verse_texts.mjs";
import { app_shared_bible_home_bar_buttons } from "./app_shared_bible_home_bar_buttons.mjs";
import { app_shared_bible_home_languages } from "./app_shared_bible_home_languages.mjs";
import { app_shared_bible_passage_kept_set } from "./app_shared_bible_passage_kept_set.mjs";
import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
import { app_shared_bible_biblehub_buttons } from "./app_shared_bible_biblehub_buttons.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { app_shared_bar_content } from "./app_shared_bar_content.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_mode_switch } from "./app_shared_bible_mode_switch.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_arrows_wide_unit } from "./app_shared_arrows_wide_unit.mjs";
import { app_shared_bible_chapter_set_default } from "./app_shared_bible_chapter_set_default.mjs";
import { app_shared_bible_verse_previous } from "./app_shared_bible_verse_previous.mjs";
import { app_shared_bible_verse_next } from "./app_shared_bible_verse_next.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { html_div } from "./html_div.mjs";
import { html_p } from "./html_p.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_shared_bible_home_generic(
  context,
  lambda$a,
  bar_extra,
  app_fn,
  chapter_reader_is,
) {
  let frame = app_shared_bar_content(context);
  let content = property_get(frame, "content");
  app_shared_content_column_pad(content);
  let bar = property_get(frame, "bar");
  html_centered(bar);
  bar_extra(bar);
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
  let p_verse = html_p(content);
  let top = html_div(p_verse);
  ("when the spine (last-chosen) language reads right-to-left, mirror the verse frame: the number moves to the right and the lines right-align, matching the chapter reader");
  let spine_text = list_last_property(text_languages, "text");
  let frame_rtl = text_rtl_is(spine_text);
  if (frame_rtl) {
    html_style_set(top, "direction", "rtl");
  }
  let bottom = html_p(p_verse);
  html_centered(bottom);
  ("the row under the verse is simply shown. It was reached through a name holding whether it was hidden and a function flipping that name, but the flipping was asked for exactly once and nothing else ever read the name, so the pair could only ever end one way - hidden set to true and immediately turned over. Whatever once turned it back has gone, and until it returns the machinery said nothing the one line does not.");
  html_display_none_or_block(false, bottom);
  app_shared_bible_biblehub_buttons(
    bottom,
    chapter_name,
    book_name,
    verse_number,
  );
  async function lambda3() {
    let mode = app_shared_bible_mode_chapter();
    await app_shared_bible_mode_switch(context, mode, app_fn);
  }
  ("only the app that actually draws a whole-chapter reader offers the way into it. the others are verse-only: the button was there for all of them, and in three of the four it switched to a mode nothing renders, so the reader was handed a way to a page that does not exist. which kind an app is cannot be read from here - it is the app that knows, so it says.");
  if (chapter_reader_is) {
    app_shared_button(bottom, "📖 Whole chapter", lambda3);
  }
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
  async function lambda() {
    await app_shared_bible_verse_previous(context, chapter_code, verse_current);
  }
  async function lambda7() {
    await app_shared_bible_verse_next(context, chapter_code, verse_current);
  }
  app_shared_arrows_wide_unit(content, "verse", lambda, lambda7);
  html_page_bottom_space(content);
  list_add_multiple(languages_verses, languages_available);
  let v4 = {
    bar,
  };
  return v4;
}
