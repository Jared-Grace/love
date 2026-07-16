import { app_shared_bible_share } from "../../love/js/app_shared_bible_share.mjs";
import { app_shared_bible_fetch_language } from "../../love/js/app_shared_bible_fetch_language.mjs";
import { app_shared_bible_verse_entries } from "../../love/js/app_shared_bible_verse_entries.mjs";
import { app_shared_bible_ref_chapter_code } from "../../love/js/app_shared_bible_ref_chapter_code.mjs";
import { html_button_share_text } from "../../love/js/html_button_share_text.mjs";
import { ebible_version_books_browser } from "../../love/js/ebible_version_books_browser.mjs";
import { promise_later } from "../../love/js/promise_later.mjs";
import { html_scroll_center_now } from "../../love/js/html_scroll_center_now.mjs";
import { list_map_add_async } from "../../love/js/list_map_add_async.mjs";
import { list_map_unordered_add_async } from "../../love/js/list_map_unordered_add_async.mjs";
import { app_shared_bible_toggle_update } from "../../love/js/app_shared_bible_toggle_update.mjs";
import { app_shared_bible_chosen_max } from "../../love/js/app_shared_bible_chosen_max.mjs";
import { number_to_words } from "../../love/js/number_to_words.mjs";
import { html_button_copy_text } from "../../love/js/html_button_copy_text.mjs";
import { list_filter_null_not_is } from "../../love/js/list_filter_null_not_is.mjs";
import { app_shared_bible_verse_texts } from "../../love/js/app_shared_bible_verse_texts.mjs";
import { html_margin_0 } from "../../love/js/html_margin_0.mjs";
import { html_bar_content_padded } from "../../love/js/html_bar_content_padded.mjs";
import { html_mobile_default } from "../../love/js/html_mobile_default.mjs";
import { html_p } from "../../love/js/html_p.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { app_shared_spaced_small_gap } from "../../love/js/app_shared_spaced_small_gap.mjs";
import { html_display_none } from "../../love/js/html_display_none.mjs";
import { html_display_none_or_block } from "../../love/js/html_display_none_or_block.mjs";
import { list_multiple_is } from "../../love/js/list_multiple_is.mjs";
import { list_empty_is } from "../../love/js/list_empty_is.mjs";
import { list_first } from "../../love/js/list_first.mjs";
import { list_copy } from "../../love/js/list_copy.mjs";
import { list_sort_number_mapper } from "../../love/js/list_sort_number_mapper.mjs";
import { integer_to_try } from "../../love/js/integer_to_try.mjs";
import { list_add } from "../../love/js/list_add.mjs";
import { list_empty } from "../../love/js/list_empty.mjs";
import { list_get } from "../../love/js/list_get.mjs";
import { list_size } from "../../love/js/list_size.mjs";
import { list_index_of } from "../../love/js/list_index_of.mjs";
import { list_map_property } from "../../love/js/list_map_property.mjs";
import { invoke_multiple } from "../../love/js/invoke_multiple.mjs";
import { null_is } from "../../love/js/null_is.mjs";
import { not } from "../../love/js/not.mjs";
import { html_button_biblehub_open_interlinear } from "../../love/js/html_button_biblehub_open_interlinear.mjs";
import { html_button_biblehub_open_parallel } from "../../love/js/html_button_biblehub_open_parallel.mjs";
import { html_button_biblehub_open_commentary } from "../../love/js/html_button_biblehub_open_commentary.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { html_flex_column_gap } from "../../love/js/html_flex_column_gap.mjs";
import { html_style_padding_y } from "../../love/js/html_style_padding_y.mjs";
import { html_style_padding_x } from "../../love/js/html_style_padding_x.mjs";
import { app_shared_spaced_tiny_gap } from "../../love/js/app_shared_spaced_tiny_gap.mjs";
import { ebible_language_to_bible_folder } from "../../love/js/ebible_language_to_bible_folder.mjs";
import { ebible_folder_english } from "../../love/js/ebible_folder_english.mjs";
import { ebible_chapter_code_to_book } from "../../love/js/ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_name } from "../../love/js/ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "../../love/js/ebible_chapter_code_to_name.mjs";
import { app_next_hash_to_languages_chosen } from "../../love/js/app_next_hash_to_languages_chosen.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { property_get_or } from "../../love/js/property_get_or.mjs";
import { html_hash_object_get } from "../../love/js/html_hash_object_get.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
import { text_pad_space_quote_double } from "../../love/js/text_pad_space_quote_double.mjs";
import { app_shared_button_arrow_left } from "../../love/js/app_shared_button_arrow_left.mjs";
import { app_replace_button_arrow_right } from "../../love/js/app_replace_button_arrow_right.mjs";
import { app_shared_bible_languages_gear } from "../../love/js/app_shared_bible_languages_gear.mjs";
import { app_shared_bible_book_chapter } from "../../love/js/app_shared_bible_book_chapter.mjs";
import { app_shared_bible_code_open } from "../../love/js/app_shared_bible_code_open.mjs";
import { app_shared_bible_choose_chapter } from "../../love/js/app_shared_bible_choose_chapter.mjs";
import { text_empty_is } from "../../love/js/text_empty_is.mjs";
import { text_empty_not_is } from "../../love/js/text_empty_not_is.mjs";
import { text_split } from "../../love/js/text_split.mjs";
import { list_join } from "../../love/js/list_join.mjs";
import { html_hash_property_set } from "../../love/js/html_hash_property_set.mjs";
import { html_display_grid } from "../../love/js/html_display_grid.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { app_shared_number_gutter } from "../../love/js/app_shared_number_gutter.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { list_last } from "../../love/js/list_last.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { app_shared_dismissable_message } from "../../love/js/app_shared_dismissable_message.mjs";
import { app_shared_bible_change } from "../../love/js/app_shared_bible_change.mjs";
import { list_previous_wrap } from "../../love/js/list_previous_wrap.mjs";
import { list_next_wrap } from "../../love/js/list_next_wrap.mjs";
export async function app_shared_bible_read(context) {
  let root = html_mobile_default(context);
  html_margin_0(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  html_flex_column_gap(content, "0");
  let bar = property_get(bc, "bar");
  let t = html_button_copy_text();
  let max = app_shared_bible_chosen_max();
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
  let ref = property_get_or(hash, "ref", "");
  let ref_line = list_join(text_split(ref, "+"), " ");
  let ref_mode = text_empty_is(c) && text_empty_not_is(ref);
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  let primary_folder = ebible_language_to_bible_folder(
    list_last(languages_chosen),
  );
  let books = await ebible_version_books_browser(primary_folder);
  html_centered(bar);
  if (text_empty_is(c) && text_empty_is(ref) && text_empty_not_is(b)) {
    await app_shared_bible_choose_chapter(
      bar,
      content,
      b,
      books,
      primary_folder,
    );
    app_shared_bible_languages_gear(bar, content, languages_chosen);
    return;
  }
  app_shared_dismissable_message(
    app_shared_bible_read,
    bar,
    "chapter_help_dismissed",
    help_text,
  );
  let chapter_code = text_empty_is(c) ? "JHN01" : c;
  if (ref_mode) {
    let ref_chapter = await app_shared_bible_ref_chapter_code(ref_line);
    if (null_is(ref_chapter)) {
      ref_mode = false;
    } else {
      chapter_code = ref_chapter;
    }
  }
  let v_hash = property_get_or(hash, "v", "");
  async function chapter_previous() {
    await app_shared_bible_change(
      chapter_code,
      languages_chosen,
      list_previous_wrap,
    );
  }
  async function chapter_next() {
    await app_shared_bible_change(
      chapter_code,
      languages_chosen,
      list_next_wrap,
    );
  }
  let verse_numbers_chosen = text_empty_is(v_hash)
    ? []
    : text_split(v_hash, "-");
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
  if (ref_mode) {
    app_shared_bible_book_chapter(bar, content, chapter_code, books);
    function view_whole_chapter() {
      app_shared_bible_code_open(chapter_code);
    }
    app_shared_button(bar, "View whole chapter", view_whole_chapter);
  } else {
    app_shared_button_arrow_left(bar, arrow_left);
    app_shared_bible_book_chapter(bar, content, chapter_code, books);
    app_replace_button_arrow_right(bar, arrow_right);
  }
  app_shared_bible_languages_gear(bar, content, languages_chosen);
  async function fetch_language(lc) {
    let r = await app_shared_bible_fetch_language(
      lc,
      ref_mode,
      ref_line,
      chapter_code,
    );
    return r;
  }
  await list_map_unordered_add_async(
    languages_chosen,
    fetch_language,
    languages_verses,
  );
  languages_verses = list_filter_null_not_is(languages_verses);
  let show_language_names = list_multiple_is(languages_verses);
  let primary_entry = list_last(languages_verses);
  let primary_verses = property_get(primary_entry, "verses");
  async function render_verse(v) {
    let verse_number_v = property_get(v, "verse_number");
    let verse_chapter_code = property_get_or(v, "chapter_code", chapter_code);
    let verse_book_code = ebible_chapter_code_to_book(verse_chapter_code);
    let verse_book_name = ebible_book_code_to_name(books_en, verse_book_code);
    let verse_chapter_name = ebible_chapter_code_to_name(verse_chapter_code);
    let p = html_p(content);
    html_display_grid(p);
    let columns = text_combine(app_shared_number_gutter(), " 1fr");
    html_style_set(p, "grid-template-columns", columns);
    html_style_set(p, "column-gap", app_shared_spaced_small_gap());
    let r = app_shared_bible_toggle_update(
      updates,
      verse_numbers_chosen,
      verse_number_v,
      verse_chapter_code,
      languages_verses,
      p,
    );
    let select = property_get(r, "select");
    function select_persist() {
      select();
      persist_selection();
    }
    let number = app_shared_button(p, verse_number_v, select_persist);
    html_style_set(number, "justify-self", "end");
    let text_cell = html_div(p);
    let entries = app_shared_bible_verse_entries(
      languages_verses,
      verse_number_v,
      show_language_names,
    );
    app_shared_bible_verse_texts(text_cell, entries);
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
      verse_chapter_name,
      verse_book_name,
      verse_number_v,
    );
    html_button_biblehub_open_parallel(
      verse_buttons,
      verse_book_name,
      verse_chapter_name,
      verse_number_v,
    );
    html_button_biblehub_open_commentary(
      verse_buttons,
      verse_chapter_name,
      verse_book_name,
      verse_number_v,
    );
    app_shared_button(actions, t, copy);
    async function share() {
      await app_shared_bible_share(
        verse_book_name,
        verse_chapter_name,
        verse_numbers_chosen,
        languages_chosen,
      );
    }
    app_shared_button(actions, html_button_share_text(), share);
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
