import { app_bible_verse_previous } from "../../../love/public/src/app_bible_verse_previous.mjs";
import { app_bible_verse_next } from "../../../love/public/src/app_bible_verse_next.mjs";
import { app_bible_chapter_previous } from "../../../love/public/src/app_bible_chapter_previous.mjs";
import { app_bible_chapter_next } from "../../../love/public/src/app_bible_chapter_next.mjs";
import { html_words_on_click_google_define } from "../../../love/public/src/html_words_on_click_google_define.mjs";
import { html_button_biblehub_open_commentary } from "../../../love/public/src/html_button_biblehub_open_commentary.mjs";
import { html_button_biblehub_open_parallel } from "../../../love/public/src/html_button_biblehub_open_parallel.mjs";
import { html_button_biblehub_open_interlinear } from "../../../love/public/src/html_button_biblehub_open_interlinear.mjs";
import { html_span } from "../../../love/public/src/html_span.mjs";
import { app_bible_chapter_verse_open } from "../../../love/public/src/app_bible_chapter_verse_open.mjs";
import { app_bible_hash_v_get } from "../../../love/public/src/app_bible_hash_v_get.mjs";
import { app_bible_verses } from "../../../love/public/src/app_bible_verses.mjs";
import { app_shared_screen_set_button } from "../../../love/public/src/app_shared_screen_set_button.mjs";
import { html_div_centered } from "../../../love/public/src/html_div_centered.mjs";
import { html_button_arrow_right } from "../../../love/public/src/html_button_arrow_right.mjs";
import { html_button_arrow_left } from "../../../love/public/src/html_button_arrow_left.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "../../../love/public/src/ebible_version_books_browser.mjs";
import { app_bible_hash_key_scroll_top } from "../../../love/public/src/app_bible_hash_key_scroll_top.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { html_hash_object_property_set } from "../../../love/public/src/html_hash_object_property_set.mjs";
import { html_scroll_top_set } from "../../../love/public/src/html_scroll_top_set.mjs";
import { html_scroll_top_get } from "../../../love/public/src/html_scroll_top_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_button_copy_text } from "../../../love/public/src/html_button_copy_text.mjs";
import { app_chapter_toggle_update } from "../../../love/public/src/app_chapter_toggle_update.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_bible_books } from "../../../love/public/src/app_bible_books.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { ebible_chapter_code_parse } from "../../../love/public/src/ebible_chapter_code_parse.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_bar_content_padded } from "../../../love/public/src/html_bar_content_padded.mjs";
import { html_on_scroll } from "../../../love/public/src/html_on_scroll.mjs";
export async function app_bible_home_generic(context, lambda$a) {
  let root = html_clear_context(context);
  html_clear(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  let bar = property_get(bc, "bar");
  html_centered(bar);
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let n = property_exists_not(hash, "c");
  if (n) {
    app_bible_chapter_verse_open(context, "JHN01", verse_number);
    return;
  }
  let verse_number_hash = app_bible_hash_v_get(hash);
  let chapter_code = property_get(hash, "c");
  let v2 = ebible_chapter_code_parse(chapter_code);
  let chapter_name = property_get(v2, "chapter_name");
  let book_code = property_get(v2, "book_code");
  let books = await ebible_version_books_browser(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  async function chapter_previous() {
    await app_bible_chapter_previous(context, chapter_code);
  }
  html_button_arrow_left(bar, chapter_previous);
  app_shared_screen_set_button(bar, context, app_bible_books, book_name);
  app_shared_screen_set_button(bar, context, app_bible_chapters, chapter_name);
  async function chapter_next() {
    await app_bible_chapter_next(context, chapter_code);
  }
  html_button_arrow_right(bar, chapter_next);
  app_shared_screen_set_button(
    bar,
    context,
    app_bible_verses,
    verse_number_hash,
  );
  const scroll_top_key = app_bible_hash_key_scroll_top();
  let verses = await ebible_verses_browser(e, chapter_code);
  let verse_numbers_chosen = [];
  let languages_verses = [];
  let updates = [];
  let verse_current = list_find_property(
    verses,
    "verse_number",
    verse_number_hash,
  );
  let verse_number = property_get(verse_current, "verse_number");
  let text = property_get(verse_current, "text");
  let p_verse = html_p(content);
  let top = html_div(p_verse);
  let bottom = html_div(p_verse);
  html_centered(bottom);
  let hidden = true;
  toggle();
  html_button_biblehub_open_interlinear(
    verse_number,
    bottom,
    book_name,
    chapter_name,
  );
  html_button_biblehub_open_parallel(
    verse_number,
    bottom,
    book_name,
    chapter_name,
  );
  html_button_biblehub_open_commentary(
    verse_number,
    bottom,
    book_name,
    chapter_name,
  );
  function lambda8() {}
  let text4 = html_button_copy_text();
  let component6 = html_button(bottom, text4, lambda8);
  let v3 = app_chapter_toggle_update(
    updates,
    component6,
    verse_numbers_chosen,
    verse_number,
    chapter_code,
    languages_verses,
    p_verse,
  );
  let update = property_get(v3, "update");
  list_add(updates, update);
  function toggle() {
    hidden = not(hidden);
    html_display_none_or_block(hidden, bottom);
  }
  html_span(top, verse_number);
  html_words_on_click_google_define(top, text);
  let p = html_p(content);
  await lambda$a({
    p_verse,
    p,
    chapter_code,
    verse_number,
  });
  let verse_pickers = html_div_centered(content);
  async function lambda() {
    await app_bible_verse_previous(verse_current, context, chapter_code);
  }
  html_button_arrow_left(verse_pickers, lambda);
  async function lambda7() {
    await app_bible_verse_next(verse_current, context, chapter_code);
  }
  html_button_arrow_right(verse_pickers, lambda7);
  list_add(languages_verses, {
    verses,
    books,
  });
  function on_scroll() {
    let scroll_top = html_scroll_top_get(content);
    html_hash_object_property_set(scroll_top_key, scroll_top);
  }
  html_on_scroll(content, on_scroll);
  let exists = property_exists(hash, scroll_top_key);
  if (exists) {
    let value = property_get(hash, scroll_top_key);
    html_scroll_top_set(content, value);
  }
  let v4 = {
    bar,
  };
  return v4;
}
