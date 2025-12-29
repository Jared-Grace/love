import { log } from "../../../love/public/src/log.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { app_reply_button } from "../../../love/public/src/app_reply_button.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_reply_initialize } from "../../../love/public/src/app_reply_initialize.mjs";
export async function reply_2(context) {
  let r = await app_reply_initialize(context);
  let books = object_property_get(r, "books");
  let choices = object_property_get(r, "choices");
  let languages = object_property_get(r, "languages");
  let root = object_property_get(r, "root");
  let original = object_property_get(r, "original");
  let en = object_property_get(r, "en");
  let encouragement = object_property_get(r, "encouragement");
  let languages_chosen = list_take(languages, 2);
  let bible_texts = [];
  let responses = [];
  let p = html_p_text(
    root,
    "1. Choose the language or languages you want the Bible verses to be translated into",
  );
  function lambda(language) {
    let name = object_property_get(language, "name");
    let component = app_reply_button(languages_chosen, language, root, name);
  }
  each(languages, lambda);
  html_p_text(
    root,
    "2. How many Bible passages do you want? (This will reset any responses below)",
  );
  let choices_verse_count = [1];
  function lambda4(item) {
    let c = item * 2;
    list_add(choices_verse_count, c);
  }
  each_range_from(1, 6, lambda4);
  list_add(choices_verse_count, 20);
  function lambda2(c) {
    function lambda3() {
      update(c);
    }
    let component = html_button(root, c, lambda3);
  }
  each(choices_verse_count, lambda2);
  async function update(verse_count) {
    list_empty(bible_texts);
    list_empty(responses);
    list_shuffle(encouragement);
    let taken = list_take(encouragement, verse_count);
    let reference_current = null;
    async function lambda6(reference) {
      let verse_range = await ebible_references_parse_lines([en], [reference]);
      async function lambda5(l) {
        let bible_folder = object_property_get(l, "bible_folder");
        async function lambda8(verse) {
          let chapter_code = object_property_get(verse, "chapter_code");
          let verse_number = object_property_get(verse, "verse_number");
          let d = await ebible_verse(bible_folder, chapter_code, verse_number);
          return d;
        }
        let verses = await list_map_unordered_async(verse_range, lambda8);
        function lambda7(v) {
          if (equal_not(reference, reference_current)) {
            list_add(bible_texts, reference);
            reference_current = reference;
          }
          let text = object_property_get(v, "text");
          list_add(bible_texts, text);
        }
        each(verses, lambda7);
      }
      let copy = list_copy_reverse(languages_chosen);
      await each_async(copy, lambda5);
    }
    await each_async(taken, lambda6);
  }
  html_p_text(root, "3. (Optional) Choose a response");
  function lambda9(choice) {
    let text = object_property_get(choice, "text");
    async function lambda11() {
      let response = object_property_get(choice, "response");
      list_add(responses, response);
      let concated = list_concat(responses, bible_texts);
      let joined = await list_join_newline_2_copy(concated);
      log(joined);
    }
    let component2 = html_button(root, text, lambda11);
  }
  each(choices, lambda9);
}
