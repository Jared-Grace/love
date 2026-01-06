import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { html_button_copy } from "../../../love/public/src/html_button_copy.mjs";
import { ebible_verse_download } from "../../../love/public/src/ebible_verse_download.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { app_karate_button_back_text } from "../../../love/public/src/app_karate_button_back_text.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { ebible_book_exists } from "../../../love/public/src/ebible_book_exists.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { object_adder_duplicates } from "../../../love/public/src/object_adder_duplicates.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { json_decompress_object } from "../../../love/public/src/json_decompress_object.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input_text } from "../../../karate_code/public/src/html_input_text.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_sort_string_property } from "../../../love/public/src/list_sort_string_property.mjs";
import { list_slice_count } from "../../../love/public/src/list_slice_count.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function app_search_main(context) {
  let root = html_mobile_default(context);
  html_clear(root);
  firebase_name_jg();
  let languages = ebible_languages();
  let languages_chosen = [];
  let languages_chosen_default = list_slice_count(languages, 1, 1);
  list_sort_string_property(languages, "name");
  app_reply_languages_chosen_reset(languages_chosen, languages_chosen_default);
  let p = app_reply_languages_prompt(root);
  app_reply_buttons_languages(languages_chosen, root, languages);
  const search_instructions =
    "What words would you like to search for? Separate by spaces. A verse will match if any Bible version contains the word. Spelling matters.";
  let p2 = html_p_text(root, "2. " + search_instructions);
  let input = html_input_text(root, search_instructions);
  html_value_set(input, "glory highest");
  html_width_full(input);
  html_focus(input);
  if (0) {
    ("include apocrypha etc");
    let waited = await list_map_unordered_async(
      ["engwyc2018", "engwebu"],
      ebible_version_books,
    );
    let squashed = list_squash(waited);
    function lambda9(oad) {
      function lambda10(i) {
        let book_code = object_property_get(i, "book_code");
        oad(book_code, i);
      }
      each(squashed, lambda10);
    }
    let result = object_adder_duplicates(lambda9);
    let books = object_values(result);
  }
  let books = await ebible_version_books("engbsb");
  const text = "Search";
  html_button_width_full(root, text, lambda2);
  async function lambda2() {
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
    log({
      dictionary,
    });
    html_clear(root);
    async function lambda6() {
      await app_search_main(context);
    }
    let text = app_karate_button_back_text();
    let component2 = html_button_width_full(root, text, lambda6);
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
          html_button_copy(div_verse, lambda12);
          let p3 = html_p_text(div_verse, reference);
          let o = await ebible_verse_download(
            "engbsb",
            chapter_code,
            verse_number,
          );
          let text2 = object_property_get(o, "text");
          let p4 = html_p_text(div_verse, text2);
          async function lambda12() {
            let joined = list_join_newline(list);
            await clipboard_copy(text3);
          }
        }
        b = html_button_width_full(div_verse, reference, lambda3);
      }
      each(verse_numbers, lambda8);
    }
    each_object(dictionary, lambda7);
  }
}
