import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { promise_later } from "./promise_later.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
import { list_map_add_async } from "./list_map_add_async.mjs";
import { list_map_unordered_add_async } from "./list_map_unordered_add_async.mjs";
import { app_chapter_toggle_update } from "./app_chapter_toggle_update.mjs";
import { app_chapter_chosen_max } from "./app_chapter_chosen_max.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_interleave_halves } from "./list_interleave_halves.mjs";
import { app_shared_gradient_color } from "./app_shared_gradient_color.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { html_bar_content_padded } from "./html_bar_content_padded.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_p } from "./html_p.mjs";
import { html_div } from "./html_div.mjs";
import { app_bible_on_click_google_define } from "./app_bible_on_click_google_define.mjs";
import { html_span_text_bold } from "./html_span_text_bold.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty } from "./list_empty.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { html_button_biblehub_open_interlinear } from "./html_button_biblehub_open_interlinear.mjs";
import { html_button_biblehub_open_parallel } from "./html_button_biblehub_open_parallel.mjs";
import { html_button_biblehub_open_commentary } from "./html_button_biblehub_open_commentary.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { html_flex_column_gap } from "./html_flex_column_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_pad_space_quote_double } from "./text_pad_space_quote_double.mjs";
import { app_replace_button_arrow_left } from "./app_replace_button_arrow_left.mjs";
import { app_replace_button_arrow_right } from "./app_replace_button_arrow_right.mjs";
import { app_chapter_languages_gear } from "./app_chapter_languages_gear.mjs";
import { app_chapter_book_chapter } from "./app_chapter_book_chapter.mjs";
import { app_chapter_choose_chapter } from "./app_chapter_choose_chapter.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_split } from "./text_split.mjs";
import { list_join } from "./list_join.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_number_gutter } from "./app_shared_number_gutter.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_last } from "./list_last.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_dismissable_message } from "./app_shared_dismissable_message.mjs";
import { app_chapter_change } from "./app_chapter_change.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
export async function app_chapter(context) {
  let root = html_mobile_default(context);
  html_margin_0(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  html_flex_column_gap(content, "0");
  let bar = property_get(bc, "bar");
  let t = html_button_copy_text();
  let max = app_chapter_chosen_max();
  let help_text = text_combine_multiple([
    "Tap up to ",
    number_to_words(max),
    " verse numbers, then ",
    text_pad_space_quote_double(t),
    " to save that passage",
  ]);
  let hash = html_hash_object_get();
  let c = property_get_or(hash, "c", "");
  let b = property_get_or(hash, "b", "");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  let primary_folder = ebible_language_to_bible_folder(
    list_last(languages_chosen),
  );
  let books = await ebible_version_books_browser(primary_folder);
  html_centered(bar);
  if (text_empty_is(c) && text_empty_not_is(b)) {
    await app_chapter_choose_chapter(bar, content, b, books, primary_folder);
    app_chapter_languages_gear(bar, content, languages_chosen);
    return;
  }
  app_shared_dismissable_message(app_chapter, bar, "chapter_help_dismissed", help_text);
  let chapter_code = text_empty_is(c) ? "JHN01" : c;
  let v_hash = property_get_or(hash, "v", "");
  async function chapter_previous() {
    await app_chapter_change(chapter_code, languages_chosen, list_previous_wrap);
  }
  async function chapter_next() {
    await app_chapter_change(chapter_code, languages_chosen, list_next_wrap);
  }
  let verse_numbers_chosen = text_empty_is(v_hash) ? [] : text_split(v_hash, "-");
  let languages_verses = [];
  let updates = [];
  let verse_rows = [];
  function selected_single() {
    let empty = list_empty_is(verse_numbers_chosen);
    let multiple = list_multiple_is(verse_numbers_chosen);
    if (not(empty) && not(multiple)) {
      return list_first(verse_numbers_chosen);
    }
    return null;
  }
  function persist_selection() {
    let v = list_join(verse_numbers_chosen, "-");
    html_hash_property_set("v", v);
  }
  function selection_last() {
    if (list_empty_is(verse_numbers_chosen)) {
      return null;
    }
    let sorted = list_copy(verse_numbers_chosen);
    list_sort_number_mapper(sorted, integer_to_try);
    return list_last(sorted);
  }
  async function verse_move(delta, chapter_move) {
    let current = selected_single();
    if (null_is(current)) {
      await chapter_move();
      return;
    }
    let ordered = list_map_property(verse_rows, "verse_number");
    let index = list_index_of(ordered, current);
    let target_index = index + delta;
    let inside = target_index >= 0 && target_index < list_size(verse_rows);
    if (not(inside)) {
      await chapter_move();
      return;
    }
    let row = list_get(verse_rows, target_index);
    list_empty(verse_numbers_chosen);
    list_add(verse_numbers_chosen, property_get(row, "verse_number"));
    persist_selection();
    invoke_multiple(updates);
    await html_scroll_center_now(property_get(row, "p"));
  }
  async function arrow_left() {
    await verse_move(-1, chapter_previous);
  }
  async function arrow_right() {
    await verse_move(1, chapter_next);
  }
  let books_en = await ebible_version_books_browser(ebible_folder_english());
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let book_name = ebible_book_code_to_name(books_en, book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  app_replace_button_arrow_left(bar, arrow_left);
  app_chapter_book_chapter(bar, content, chapter_code, books);
  app_replace_button_arrow_right(bar, arrow_right);
  app_chapter_languages_gear(bar, content, languages_chosen);
  async function fetch_language(lc) {
    async function get() {
      let bible_folder = ebible_language_to_bible_folder(lc);
      let verses = await ebible_verses_browser(bible_folder, chapter_code);
      let books = await ebible_version_books_browser(bible_folder);
      let language = list_find_property(ebible_languages(), "language_code", lc);
      let v2 = {
        language_code: lc,
        language,
        books,
        verses,
      };
      return v2;
    }
    let r = await catch_null_async(get);
    return r;
  }
  await list_map_unordered_add_async(
    languages_chosen,
    fetch_language,
    languages_verses,
  );
  languages_verses = list_filter_null_not_is(languages_verses);
  let show_language_names = list_multiple_is(languages_verses);
  let language_count = list_size(languages_verses);
  function language_color(entry, index) {
    return app_shared_gradient_color(index, language_count);
  }
  let language_colors = list_interleave_halves(
    list_map_index(languages_verses, language_color),
  );
  let primary_entry = list_last(languages_verses);
  let primary_verses = property_get(primary_entry, "verses");
  async function render_verse(v) {
    let verse_number_v = property_get(v, "verse_number");
    let p = html_p(content);
    html_display_grid(p);
    let columns = text_combine(app_shared_number_gutter(), " 1fr");
    html_style_set(p, "grid-template-columns", columns);
    html_style_set(p, "column-gap", app_shared_spaced_small_gap());
    let r = app_chapter_toggle_update(
      updates,
      verse_numbers_chosen,
      verse_number_v,
      chapter_code,
      languages_verses,
      p,
    );
    let select = property_get(r, "select");
    function select_persist() {
      select();
      persist_selection();
    }
    let number = app_replace_button(p, verse_number_v, select_persist);
    html_style_set(number, "justify-self", "end");
    let text_cell = html_div(p);
    function render_language_line(entry, index) {
      let verses_l = property_get(entry, "verses");
      let verse_l = list_find_property_or_null(
        verses_l,
        "verse_number",
        verse_number_v,
      );
      let nn = null_not_is(verse_l);
      if (nn) {
        let text_l = property_get(verse_l, "text");
        let line = html_div(text_cell);
        if (show_language_names) {
          let language = property_get(entry, "language");
          let name = property_get(language, "name");
          html_span_text_bold(line, text_combine(name, ": "));
          html_font_color_set(line, list_get(language_colors, index));
        }
        app_bible_on_click_google_define(line, text_l);
      }
    }
    each_index(languages_verses, render_language_line);
    html_margin_0(p);
    html_style_padding_y(p, app_shared_spaced_tiny_gap());
    html_style_padding_x(p, app_shared_spaced_tiny_gap());
    let update = property_get(r, "update");
    let copy = property_get(r, "copy");
    let actions = html_div(content);
    html_centered(actions);
    html_display_none(actions);
    let verse_buttons = html_div(actions);
    html_button_biblehub_open_interlinear(
      verse_buttons,
      chapter_name,
      book_name,
      verse_number_v,
    );
    html_button_biblehub_open_parallel(
      verse_buttons,
      book_name,
      chapter_name,
      verse_number_v,
    );
    html_button_biblehub_open_commentary(
      verse_buttons,
      chapter_name,
      book_name,
      verse_number_v,
    );
    app_replace_button(actions, t, copy);
    function row_update() {
      update();
      let is_last = verse_number_v === selection_last();
      html_display_none_or_block(not(is_last), actions);
      let single = is_last && not(list_multiple_is(verse_numbers_chosen));
      html_display_none_or_block(not(single), verse_buttons);
    }
    list_add(verse_rows, {
      verse_number: verse_number_v,
      p,
    });
    return row_update;
  }
  await list_map_add_async(primary_verses, render_verse, updates);
  function resume() {
    if (list_empty_is(verse_numbers_chosen)) {
      return;
    }
    invoke_multiple(updates);
    let ordered = list_map_property(verse_rows, "verse_number");
    let index = list_index_of(ordered, list_first(verse_numbers_chosen));
    if (index >= 0) {
      let row = list_get(verse_rows, index);
      html_scroll_center_now(property_get(row, "p"));
    }
  }
  promise_later(resume);
}
