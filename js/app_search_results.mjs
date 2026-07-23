import { app_shared_bible_open } from "./app_shared_bible_open.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding_em } from "./html_style_padding_em.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_border_radius_extra_large } from "./app_shared_border_radius_extra_large.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_page_scrolls } from "./html_page_scrolls.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { property_exists } from "./property_exists.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { list_squash } from "./list_squash.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { app_reply_verses_add } from "./app_reply_verses_add.mjs";
import { html_remove } from "./html_remove.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { html_div } from "./html_div.mjs";
import { ebible_book_exists } from "./ebible_book_exists.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { properties_from_empty } from "./properties_from_empty.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { number_pad } from "./number_pad.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { app_bible_search_word_path } from "./app_bible_search_word_path.mjs";
import { text_to_words } from "./text_to_words.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
export async function app_search_results(context, div_results) {
  let languages_chosen = property_get(context, "languages_chosen");
  let en = ebible_folder_english();
  let english_choices = [en];
  let books = await ebible_version_books_browser(en);
  let query = property_get(context, "query");
  let words = text_to_words(query);
  async function lambda(word) {
    let destination = app_bible_search_word_path(word);
    let project_url = firebase_storage_url_project_jg();
    let o = await firebase_storage_download_json_decompress(
      project_url,
      destination,
    );
    return o;
  }
  let mapped = await list_map_unordered_async(words, lambda);
  let keys = list_map(mapped, properties_get);
  let chapter_codes_match = list_intersect_multiple(keys);
  function lambda4(m) {
    let to = properties_from_empty(m, chapter_codes_match);
    return to;
  }
  list_map(mapped, lambda4);
  function value_get(chapter_code) {
    let mapped3 = list_map_property(mapped, chapter_code);
    let i = list_intersect_multiple(mapped3);
    return i;
  }
  let dictionary = list_to_dictionary_value(chapter_codes_match, value_get);
  html_clear(div_results);
  let text = app_shared_button_back_text();
  let button_list = null;
  let expand_all_div = html_div(div_results);
  let expand_all = null;
  async function expand_all_lambda() {
    async function lambda9(b) {
      let click2 = property_get(b, "click");
      await catch_ignore_async(click2);
      let bible_texts2 = property_get(b, "bible_texts");
      return bible_texts2;
    }
    let waited = await list_map_unordered_async(button_list, lambda9);
    html_remove(expand_all);
    let c = html_button_copy_text();
    async function lambda6() {
      let squashed = list_squash(waited);
      await list_join_newline_2_copy(squashed);
    }
    let text2 = text_combine(c, " all");
    let component = app_shared_button_wide(expand_all_div, text2, lambda6);
  }
  expand_all = app_shared_button_wide(
    div_results,
    "Expand all",
    expand_all_lambda,
  );
  html_br_2(div_results);
  let results_all = object_to_list(dictionary);
  function result_verses_exist(vk) {
    "a chapter can hold every query word and still have no single verse holding them all, so the verse intersection comes back empty";
    let verse_numbers = property_get(vk, "value");
    let e = list_empty_not_is(verse_numbers);
    return e;
  }
  let results_verses = list_filter(results_all, result_verses_exist);
  function result_book_exists(vk) {
    let chapter_code = property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let e = ebible_book_exists(books, book_code);
    return e;
  }
  let results = list_filter(results_verses, result_book_exists);
  function bible_order_key(vk) {
    let chapter_code = property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let book_index = list_index_of_property(books, "book_code", book_code);
    let book_index_padded = number_pad(book_index, 2);
    let key = text_combine_multiple([book_index_padded, "-", chapter_code]);
    return key;
  }
  list_sort_text_mapper(results, bible_order_key);
  let book_code_shown = null;
  let div_book_body = null;
  let book_collapse_setters = [];
  function book_card_add(book_code) {
    let same = equal(book_code, book_code_shown);
    if (same) {
      return;
    }
    book_code_shown = book_code;
    let div_book = app_shared_container_blue(div_results);
    let book_name = ebible_book_code_to_name(books, book_code);
    let header = html_div_text_bold(div_book, book_name);
    html_cursor_pointer(header);
    let div_body = html_div(div_book);
    div_book_body = div_body;
    let collapsed = false;
    function collapsed_set(value) {
      collapsed = value;
      if (collapsed) {
        html_display_none(div_body);
        html_display_inline_block(div_book);
        html_style_margin_x(div_book, "0.15em");
        html_style_margin_bottom(header, "0");
      } else {
        html_display_block(div_body);
        html_display_block(div_book);
        html_style_margin_x(div_book, "0");
        html_style_margin_bottom(header, "0.3em");
      }
    }
    function toggle() {
      let next = not(collapsed);
      collapsed_set(next);
      let expanded = not(next);
      if (expanded) {
        html_scroll_center(div_book);
      }
    }
    html_on_click(header, toggle);
    collapsed_set(false);
    list_add(book_collapse_setters, collapsed_set);
  }
  function each_result(vk) {
    let verse_numbers = property_get(vk, "value");
    let chapter_code = property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    book_card_add(book_code);
    let chapter_name = ebible_chapter_code_to_name(chapter_code);
    let div_chapter = html_div(div_book_body);
    html_display_inline_block(div_chapter);
    let color_background = app_shared_container_blue_medium_background_color();
    html_style_background_color_set(div_chapter, color_background);
    html_border(div_chapter, "0.1em", app_shared_container_blue_border_color());
    html_border_radius(div_chapter, app_shared_border_radius_extra_large());
    html_style_padding_em(div_chapter, "0.5");
    html_style_margin_x(div_chapter, "0.15em");
    html_style_margin_y(div_chapter, "0.15em");
    let chapter_header_text = text_combine_multiple([
      "Chapter ",
      chapter_name,
      ":",
    ]);
    let chapter_header = html_div_text_bold(div_chapter, chapter_header_text);
    html_style_margin_bottom(chapter_header, "0.3em");
    function each_verse_number(verse_number) {
      let div_verse = html_div(div_chapter);
      html_display_inline_block(div_verse);
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [verse_number],
      );
      let b = null;
      async function click() {
        let already_expanded = property_exists(b, "bible_texts");
        if (already_expanded) {
          return;
        }
        let bible_texts = [];
        property_set_exists_not(b, "bible_texts", bible_texts);
        html_display_block(div_verse);
        html_remove(b);
        let cb_text = html_button_copy_text();
        let cb = app_shared_button_wide(div_verse, cb_text, copy);
        html_style_margin_y(cb, "0.2em");
        function lambda3() {
          "this button offers the whole chapter, so land in the chapter reader with this verse in view";
          app_shared_bible_open(
            languages_chosen,
            chapter_code,
            verse_number,
            app_shared_bible_mode_chapter(),
          );
        }
        let oc_text = text_combine(emoji_book_open(), " Open chapter");
        let oc = app_shared_button_wide(div_verse, oc_text, lambda3);
        html_style_margin_y(oc, "0.2em");
        await app_reply_verses_add(
          en,
          reference,
          english_choices,
          null,
          bible_texts,
          languages_chosen,
        );
        function each_bible_text(bible_text) {
          let p = html_p_text(div_verse, bible_text);
          let is_reference = equal(bible_text, reference);
          if (is_reference) {
            app_shared_text_deemphasized(p);
          }
        }
        each(bible_texts, each_bible_text);
        async function copy() {
          await list_join_newline_2_copy(bible_texts);
        }
      }
      b = app_shared_button_inline(div_verse, verse_number, click);
      property_set_exists_not(b, "click", click);
      return b;
    }
    list_sort_number_mapper(verse_numbers, integer_to_try);
    let bs = list_map(verse_numbers, each_verse_number);
    return bs;
  }
  let button_lists = list_map(results, each_result);
  button_list = list_squash(button_lists);
  let scrolls = html_page_scrolls();
  if (scrolls) {
    function collapse_book(collapsed_set) {
      collapsed_set(true);
    }
    each(book_collapse_setters, collapse_book);
  }
  let s = list_size_1(button_list);
  if (s) {
    let only = list_single(button_list);
    let only_click = property_get(only, "click");
    await only_click();
  }
}
