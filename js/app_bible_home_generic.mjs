import { verse_number_key } from "./verse_number_key.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { app_shared_bar_content } from "./app_shared_bar_content.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { app_bible_settings } from "./app_bible_settings.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_bible_mode_switch } from "./app_bible_mode_switch.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_arrows_wide_unit } from "./app_shared_arrows_wide_unit.mjs";
import { app_bible_button_chapter_previous } from "./app_bible_button_chapter_previous.mjs";
import { app_shared_bible_button_chapter_next } from "./app_shared_bible_button_chapter_next.mjs";
import { app_bible_chapter_set_default } from "./app_bible_chapter_set_default.mjs";
import { noop } from "./noop.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_bible_verse_previous } from "./app_bible_verse_previous.mjs";
import { app_bible_verse_next } from "./app_bible_verse_next.mjs";
import { app_shared_bible_verse_texts } from "./app_shared_bible_verse_texts.mjs";
import { html_button_biblehub_open_commentary } from "./html_button_biblehub_open_commentary.mjs";
import { html_button_biblehub_open_parallel } from "./html_button_biblehub_open_parallel.mjs";
import { html_button_biblehub_open_interlinear } from "./html_button_biblehub_open_interlinear.mjs";
import { app_bible_hash_v_get } from "./app_bible_hash_v_get.mjs";
import { app_bible_verses } from "./app_bible_verses.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_bible_toggle_update } from "./app_shared_bible_toggle_update.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { not } from "./not.mjs";
import { html_div } from "./html_div.mjs";
import { html_p } from "./html_p.mjs";
import { app_bible_chapters } from "./app_bible_chapters.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { list_map_unordered_add_async } from "./list_map_unordered_add_async.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
export async function app_bible_home_generic(
  context,
  lambda$a,
  bar_extra,
  app_fn,
) {
  let frame = app_shared_bar_content(context);
  let content = property_get(frame, "content");
  app_shared_content_column_pad(content);
  let bar = property_get(frame, "bar");
  html_centered(bar);
  bar_extra(bar);
  let e = ebible_folder_english();
  if (await app_bible_chapter_set_default(context)) {
    return null;
  }
  let hash = html_hash_object_get();
  let verse_number_hash = app_bible_hash_v_get(hash);
  let chapter_code = app_shared_bible_chapter_hash_get(hash);
  let v2 = ebible_chapter_code_parse(chapter_code);
  let chapter_name = property_get(v2, "chapter_name");
  let book_code = property_get(v2, "book_code");
  async function lambda_books_en() {
    let r = await ebible_version_books_browser(e);
    return r;
  }
  async function lambda_verses_en() {
    let r = await ebible_verses_browser(e, chapter_code);
    return r;
  }
  let fetched_en = await invoke_multiple_unordered_async([
    lambda_books_en,
    lambda_verses_en,
  ]);
  let books = list_first(fetched_en);
  let verses = list_second(fetched_en);
  let book_name = ebible_book_code_to_name(books, book_code);
  app_bible_button_chapter_previous(bar, context, chapter_code);
  app_shared_screen_set_button(bar, context, app_shared_bible_books, book_name);
  app_shared_screen_set_button(bar, context, app_bible_chapters, chapter_name);
  app_shared_bible_button_chapter_next(bar, context, chapter_code);
  app_shared_screen_set_button(
    bar,
    context,
    app_bible_verses,
    verse_number_hash,
  );
  let text2 = app_shared_gear_settings_text();
  app_shared_screen_set_button(bar, context, app_bible_settings, text2);
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
  let languages_chosen = app_shared_bible_languages_chosen_get();
  async function lambda_language(lc) {
    let property_name3 = bible_folder_key();
    let bible_folder = property_get(lc, property_name3);
    async function get() {
      async function lambda_verses_l() {
        let r_verses = await ebible_verses_browser(bible_folder, chapter_code);
        return r_verses;
      }
      async function lambda_books_l() {
        let r_books = await ebible_version_books_browser(bible_folder);
        return r_books;
      }
      let fetched_l = await invoke_multiple_unordered_async([
        lambda_verses_l,
        lambda_books_l,
      ]);
      let verses_l = list_first(fetched_l);
      let books_l = list_second(fetched_l);
      let v = {
        language: lc,
        verses: verses_l,
        books: books_l,
      };
      return v;
    }
    let r = await catch_null_async(get);
    return r;
  }
  let fetched = [];
  await list_map_unordered_add_async(
    languages_chosen,
    lambda_language,
    fetched,
  );
  let languages_available = list_filter_null_not_is(fetched);
  function lambda_text_map(item) {
    let verses_l = property_get(item, "verses");
    let property_name4 = verse_number_key();
    let verse_current_l = list_find_property_or_null(
      verses_l,
      property_name4,
      verse_number_hash,
    );
    let nn = null_not_is(verse_current_l);
    if (nn) {
      let language = property_get(item, "language");
      let text_l = property_get(verse_current_l, "text");
      let v = {
        language,
        text: text_l,
      };
      return v;
    }
    return null;
  }
  let text_languages = list_map_filter_null_not_is(
    languages_available,
    lambda_text_map,
  );
  if (list_empty_is(languages_available)) {
    languages_available = [
      {
        language: ebible_language_english(),
        verses,
        books,
      },
    ];
  }
  if (list_empty_is(text_languages)) {
    text_languages = [
      {
        language: ebible_language_english(),
        text,
      },
    ];
  }
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
  let hidden = true;
  toggle();
  html_button_biblehub_open_interlinear(
    bottom,
    chapter_name,
    book_name,
    verse_number,
  );
  html_button_biblehub_open_parallel(
    bottom,
    chapter_name,
    book_name,
    verse_number,
  );
  html_button_biblehub_open_commentary(
    bottom,
    chapter_name,
    book_name,
    verse_number,
  );
  async function lambda3() {
    let mode = app_shared_bible_mode_chapter();
    await app_bible_mode_switch(context, mode, app_fn);
  }
  let component2 = app_shared_button(bottom, "📖 Whole chapter", lambda3);
  let component = app_shared_button_copy(bottom, noop);
  let v3 = app_shared_bible_toggle_update(
    updates,
    verse_numbers_chosen,
    verse_number,
    chapter_code,
    languages_verses,
    p_verse,
  );
  let choose = property_get(v3, "choose");
  html_on_click(component, choose);
  let update = property_get(v3, "update");
  list_add(updates, update);
  function toggle() {
    hidden = not(hidden);
    html_display_none_or_block(hidden, bottom);
  }
  ("the verse NUMBER is not printed above the text here: the bar already carries it as the verse-picker button, so a single-verse view would show it twice. the WHOLE-CHAPTER reader is different — it prints each verse's number inline (",
    fn_name("app_shared_bible_read"),
    ") because that is the only place the number appears there. shared by ",
    fn_name("app_bible"),
    " and ",
    fn_name("app_g_bible"),
    ", so both single-verse views drop the duplicate together.");
  let show_language_names = list_multiple_is(text_languages);
  function to_entry(item) {
    let name = "";
    if (show_language_names) {
      let language = property_get(item, "language");
      name = property_get(language, "name");
    }
    let text_l = property_get(item, "text");
    let entry = {
      name,
      text: text_l,
    };
    return entry;
  }
  let entries = list_map(text_languages, to_entry);
  app_shared_bible_verse_texts(top, entries);
  let p = html_p(content);
  await lambda$a({
    p_verse,
    p,
    chapter_code,
    verse_number,
  });
  async function lambda() {
    await app_bible_verse_previous(context, chapter_code, verse_current);
  }
  async function lambda7() {
    await app_bible_verse_next(context, chapter_code, verse_current);
  }
  app_shared_arrows_wide_unit(content, "verse", lambda, lambda7);
  html_page_bottom_space(content);
  list_add_multiple(languages_verses, languages_available);
  let v4 = {
    bar,
  };
  return v4;
}
