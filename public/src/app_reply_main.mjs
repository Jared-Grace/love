import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { bible_verses_encouragement } from "../../../love/public/src/bible_verses_encouragement.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { firebase_storage_download_ebible } from "../../../love/public/src/firebase_storage_download_ebible.mjs";
import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { string_take_less_1 } from "../../../love/public/src/string_take_less_1.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { ebible_verse_download } from "../../../love/public/src/ebible_verse_download.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { ebible_index_flat_upload_name } from "../../../love/public/src/ebible_index_flat_upload_name.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { string_letters_only } from "../../../love/public/src/string_letters_only.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { app_reply_choices } from "../../../love/public/src/app_reply_choices.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function app_reply_main() {
  let en = ebible_folder_english();
  let languages = ebible_languages();
  list_remove_property(languages, "language_code", "en");
  let file_name = ebible_index_flat_upload_name();
  let index = await firebase_storage_download_ebible(en, file_name);
  let books = await ebible_version_books(en);
  let verses_list = null;
  await verse_random_reset();
  const root = html_document_body();
  let copied = [];
  let languages_chosens = [];
  let buttons = null;
  let preview = null;
  let chosens = [];
  let typed = "";
  async function verse_random_reset() {
    let encouragement = bible_verses_encouragement();
    let reference = list_random_item(encouragement);
    let verses = await ebible_references_parse_lines([en], [reference]);
    verses_list = [
      {
        verses,
        reference,
      },
    ];
  }
  function lambda6(event) {
    let key = object_property_get(event, "key");
    if (equal(key, "Backspace")) {
      typed = string_take_less_1(typed);
    } else {
      typed += key;
    }
    buttons_refresh();
  }
  html_on_keydown(root, lambda6);
  async function lambda4() {
    await verse_random_reset();
    list_empty(copied);
    list_empty(chosens);
    list_empty(languages_chosens);
    typed = "";
    buttons_refresh();
    preview_refresh();
  }
  let component3 = html_button(root, "Reset", lambda4);
  let component2 = html_button(root, "Copy", preview_refresh);
  function lambda5(item2) {
    let name2 = object_property_get(item2, "name");
    let bible_folder2 = object_property_get(item2, "bible_folder");
    let language_code = object_property_get(item2, "language_code");
    async function lambda7() {
      let verses_list_first = list_first(verses_list);
      let verses2 = object_property_get(verses_list_first, "verses");
      let reference = object_property_get(verses_list_first, "reference");
      async function lambda8(verse) {
        let chapter_code2 = object_property_get(verse, "chapter_code");
        let verse_number2 = object_property_get(verse, "verse_number");
        let d = await ebible_verse_download(
          bible_folder2,
          chapter_code2,
          verse_number2,
        );
        return d;
      }
      let verses = await list_map_unordered_async(verses2, lambda8);
      list_add_first(verses_list, {
        verses,
        reference,
      });
      list_add_first(languages_chosens, language_code);
      preview_refresh();
    }
    let component4 = html_button(root, name2, lambda7);
  }
  each(languages, lambda5);
  marker("1");
  let choices = app_reply_choices();
  function buttons_refresh() {
    function lambda2(item) {
      let text2 = object_property_get(item, "text");
      let letters = string_letters_only(text2);
      let lower = string_lower_to(letters);
      let sw = string_starts_with(lower, typed);
      let includes = list_includes(chosens, item);
      const condition = includes || not(sw);
      html_display_none_or_block(condition, item);
    }
    each(buttons, lambda2);
  }
  function lambda(choice) {
    let response2 = object_property_get(choice, "response");
    let text = object_property_get(choice, "text");
    let component = html_button(root, text, lambda3);
    object_property_set_exists_not(component, "text", text);
    async function lambda3() {
      list_add(copied, response2);
      await preview_refresh();
      list_add(chosens, component);
      typed = "";
      buttons_refresh();
    }
    return component;
  }
  buttons = list_map(choices, lambda);
  preview = html_p(root);
  preview_refresh();
  buttons_refresh();
  async function preview_refresh() {
    let verses_list_first = list_first(verses_list);
    let reference = object_property_get(verses_list_first, "reference");
    if (false) {
      function lambda9(item3) {}
      each(list, lambda9);
      let chapter_code2 = object_property_get(verse, "chapter_code");
      let book_code = ebible_chapter_code_to_book(chapter_code2);
      let chapter_name = ebible_chapter_code_to_name(chapter_code2);
      let book = list_find_property(books, "book_code", book_code);
      let book_name = object_property_get(book, "text");
      let verse_number2 = object_property_get(verse, "verse_number");
      let reference2 = book_name + " " + chapter_name + ":" + verse_number2;
    }
    let verses = list_map_property(verses_list, "verses");
    let squashed = list_squash(verses);
    let verse_texts = list_map_property(squashed, "text");
    list_add_first(verse_texts, reference);
    let verse_text = list_join_newline_2(verse_texts);
    const other = [verse_text];
    let ne = list_empty_not_is(languages_chosens);
    if (ne) {
      list_add(other, languages_chosens);
    }
    let concated = list_concat(copied, other);
    let joined = list_join_newline_2(concated);
    html_clear(preview);
    html_p_text_multiple(preview, concated);
    html_text_set(preview, joined);
    await clipboard_copy(joined);
  }
}
