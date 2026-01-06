import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
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
import { app_search_main } from "../../../love/public/src/app_search_main.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { json_decompress_object } from "../../../love/public/src/json_decompress_object.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
export async function app_search_results(context) {
  marker("1");
  let en = ebible_folder_english();
  let english_choices = [en];
  let books = await ebible_version_books(en);
  let root = object_property_get(context, "root");
  let value = html_value_get(input);
  let words = string_to_words(value);
  async function lambda(word) {
    let destination = app_bible_search_word_path(word);
    let c = await firebase_storage_download_json(destination);
    let o = await json_decompress_object(c);
    log({
      o,
    });
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
  html_clear(root);
  let p3 = html_p_text(root, value);
  async function back() {
    await app_search_main(context);
  }
  let text = app_karate_button_back_text();
  let component2 = html_button_width_full(root, text, back);
  function lambda7(verse_numbers, chapter_code) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let e = ebible_book_exists(books, book_code);
    if (not(e)) {
      return;
    }
    function lambda8(verse_number) {
      let div_verse = html_div(root);
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [verse_number],
      );
      let b = null;
      async function lambda3() {
        html_remove(b);
        let c = html_button_copy(div_verse, lambda12);
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
        async function lambda12() {
          list_add_first(bible_texts, reference);
          await list_join_newline_2_copy(bible_texts);
        }
      }
      b = html_button_width_full(div_verse, reference, lambda3);
    }
    each(verse_numbers, lambda8);
  }
  each_object(dictionary, lambda7);
}
