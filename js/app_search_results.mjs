import { app_shared_bible_open } from "../../love/js/app_shared_bible_open.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { html_style_margin_y } from "../../love/js/html_style_margin_y.mjs";
import { app_shared_container_blue } from "../../love/js/app_shared_container_blue.mjs";
import { html_br_2 } from "../../love/js/html_br_2.mjs";
import { firebase_storage_url_project_jg } from "../../love/js/firebase_storage_url_project_jg.mjs";
import { ebible_version_books_browser } from "../../love/js/ebible_version_books_browser.mjs";
import { list_single } from "../../love/js/list_single.mjs";
import { list_size_1 } from "../../love/js/list_size_1.mjs";
import { app_replace_button_wide } from "../../love/js/app_replace_button_wide.mjs";
import { firebase_storage_download_json_decompress } from "../../love/js/firebase_storage_download_json_decompress.mjs";
import { list_filter } from "../../love/js/list_filter.mjs";
import { null_not_is } from "../../love/js/null_not_is.mjs";
import { property_set_exists_not } from "../../love/js/property_set_exists_not.mjs";
import { html_button_copy_text } from "../../love/js/html_button_copy_text.mjs";
import { list_squash } from "../../love/js/list_squash.mjs";
import { object_to_list } from "../../love/js/object_to_list.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { ebible_folder_english } from "../../love/js/ebible_folder_english.mjs";
import { list_join_newline_2_copy } from "../../love/js/list_join_newline_2_copy.mjs";
import { html_p_text } from "../../love/js/html_p_text.mjs";
import { each } from "../../love/js/each.mjs";
import { equal } from "../../love/js/equal.mjs";
import { app_reply_verses_add } from "../../love/js/app_reply_verses_add.mjs";
import { html_remove } from "../../love/js/html_remove.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../love/js/ebible_parts_chapter_code_to_reference.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { not } from "../../love/js/not.mjs";
import { ebible_book_exists } from "../../love/js/ebible_book_exists.mjs";
import { ebible_chapter_code_to_book } from "../../love/js/ebible_chapter_code_to_book.mjs";
import { app_shared_button_back_text } from "../../love/js/app_shared_button_back_text.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { list_to_dictionary_value } from "../../love/js/list_to_dictionary_value.mjs";
import { list_map_property } from "../../love/js/list_map_property.mjs";
import { properties_from_empty } from "../../love/js/properties_from_empty.mjs";
import { list_intersect_multiple } from "../../love/js/list_intersect_multiple.mjs";
import { properties_get } from "../../love/js/properties_get.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { list_map_unordered_async } from "../../love/js/list_map_unordered_async.mjs";
import { app_bible_search_word_path } from "../../love/js/app_bible_search_word_path.mjs";
import { text_to_words } from "../../love/js/text_to_words.mjs";
import { catch_ignore_async } from "../../love/js/catch_ignore_async.mjs";
import { emoji_book_open } from "../../love/js/emoji_book_open.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
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
    let component = app_replace_button_wide(expand_all_div, text2, lambda6);
  }
  expand_all = app_replace_button_wide(
    div_results,
    "Expand all",
    expand_all_lambda,
  );
  html_br_2(div_results);
  let results = object_to_list(dictionary);
  function each_result(vk) {
    let verse_numbers = property_get(vk, "value");
    let chapter_code = property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let e = ebible_book_exists(books, book_code);
    if (not(e)) {
      return null;
    }
    function each_verse_number(verse_number) {
      let div_verse = app_shared_container_blue(div_results);
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [verse_number],
      );
      let b = null;
      async function click() {
        html_remove(b);
        let cb_text = html_button_copy_text();
        let cb = app_replace_button_wide(div_verse, cb_text, copy);
        html_style_margin_y(cb, "0.2em");
        function lambda3() {
          app_shared_bible_open(languages_chosen, chapter_code, verse_number);
        }
        let oc_text = text_combine(emoji_book_open(), " Open chapter");
        let oc = app_replace_button_wide(div_verse, oc_text, lambda3);
        html_style_margin_y(oc, "0.2em");
        let bible_texts = [];
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
        property_set_exists_not(b, "bible_texts", bible_texts);
        async function copy() {
          await list_join_newline_2_copy(bible_texts);
        }
      }
      b = app_replace_button_wide(div_verse, reference, click);
      html_style_margin_y(b, "0.2em");
      property_set_exists_not(b, "click", click);
      return b;
    }
    let bs = list_map(verse_numbers, each_verse_number);
    return bs;
  }
  let button_lists = list_map(results, each_result);
  let mapped2 = list_filter(button_lists, null_not_is);
  button_list = list_squash(mapped2);
  let s = list_size_1(button_list);
  if (s) {
    let only = list_single(button_list);
    only();
  }
}
