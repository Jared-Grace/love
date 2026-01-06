import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { html_button_copy_text } from "../../../love/public/src/html_button_copy_text.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_reply_verses_add } from "../../../love/public/src/app_reply_verses_add.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_button_copy } from "../../../love/public/src/html_button_copy.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { ebible_book_exists } from "../../../love/public/src/ebible_book_exists.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { app_karate_button_back_text } from "../../../love/public/src/app_karate_button_back_text.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { json_decompress_object } from "../../../love/public/src/json_decompress_object.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
export async function app_search_results(context, div_results) {
  marker("1");
  let languages_chosen = object_property_get(context, "languages_chosen");
  let en = ebible_folder_english();
  let english_choices = [en];
  let books = await ebible_version_books(en);
  let query = object_property_get(context, "query");
  let words = string_to_words(query);
  async function lambda(word) {
    let destination = app_bible_search_word_path(word);
    let c = await firebase_storage_download_json(destination);
    let o = await json_decompress_object(c);
    return o;
  }
  let mapped = await list_map_unordered_async(words, lambda);
  let keys = list_map(mapped, object_properties);
  let chapter_codes_match = list_intersect_multiple(keys);
  function lambda4(m) {
    let to = object_properties_from_empty(m, chapter_codes_match);
    return to;
  }
  list_map(mapped, lambda4);
  function lambda5(chapter_code) {
    let mapped3 = list_map_property(mapped, chapter_code);
    let i = list_intersect_multiple(mapped3);
    return i;
  }
  let dictionary = list_to_dictionary_value(chapter_codes_match, lambda5);
  html_clear(div_results);
  let text = app_karate_button_back_text();
  let button_list = null;
  let expand_all_div = html_div(div_results);
  let expand_all = null;
  async function lambda2() {
    async function lambda9(b) {
      let click2 = object_property_get(b, "click");
      await catch_ignore_async(click2);
      log({
        b,
      });
      let bible_texts2 = object_property_get(b, "bible_texts");
      return bible_texts2;
    }
    let waited = await list_map_unordered_async(button_list, lambda9);
    html_remove(expand_all);
    let c2 = html_button_copy_text();
    async function lambda6() {
      let squashed = list_squash(waited);
      await list_join_newline_2_copy(squashed);
    }
    let component = html_button_width_full(
      expand_all_div,
      c2 + " all",
      lambda6,
    );
  }
  expand_all = html_button_width_full(div_results, "Expand all", lambda2);
  let list = object_to_list(dictionary);
  log({
    dictionary,
  });
  function lambda7(vk) {
    let verse_numbers = object_property_get(vk, "value");
    let chapter_code = object_property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let e = ebible_book_exists(books, book_code);
    if (not(e)) {
      let v = null;
      return v;
    }
    function lambda8(verse_number) {
      let div_verse = html_div(div_results);
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [verse_number],
      );
      let b = null;
      async function click() {
        html_remove(b);
        let c = html_button_copy(div_verse, copy);
        html_width_full(c);
        let bible_texts = [];
        await app_reply_verses_add(
          en,
          reference,
          english_choices,
          null,
          bible_texts,
          languages_chosen,
        );
        html_p_text_multiple(div_verse, bible_texts);
        object_property_set_exists_not(b, "bible_texts", bible_texts);
        async function copy() {
          await list_join_newline_2_copy(bible_texts);
        }
      }
      b = html_button_width_full(div_verse, reference, click);
      object_property_set_exists_not(b, "click", click);
      return b;
    }
    let bs = list_map(verse_numbers, lambda8);
    return bs;
  }
  let button_lists = list_map(list, lambda7);
  let mapped2 = list_filter(button_lists, null_not_is);
  button_list = list_squash(button_lists);
}
