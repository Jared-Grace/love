import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_reply_buttons_refresh } from "../../../love/public/src/app_reply_buttons_refresh.mjs";
import { html_on_keydown_body } from "../../../love/public/src/html_on_keydown_body.mjs";
import { string_take_less_1 } from "../../../love/public/src/string_take_less_1.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { prayer_blessing_expand } from "../../../love/public/src/prayer_blessing_expand.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_reply_love } from "../../../love/public/src/app_reply_love.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_sort_string_property } from "../../../love/public/src/list_sort_string_property.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_reply_initialize } from "../../../love/public/src/app_reply_initialize.mjs";
export async function app_reply_main(context) {
  marker("1");
  let r = await app_reply_initialize(context);
  let choices = object_property_get(r, "choices");
  let languages = object_property_get(r, "languages");
  let english_choices = await ebible_versions_english_choices();
  let languages_chosen_default = list_take(languages, 2);
  let languages_chosen = [];
  languages_chosen_reset();
  list_sort_string_property(languages, "name");
  let root = object_property_get(r, "root");
  let en = object_property_get(r, "en");
  let encouragement = object_property_get(r, "encouragement");
  let bible_texts = [];
  let responses = [];
  let responses_buttons = [];
  let typed = null;
  typed_reset();
  let p = app_reply_languages_prompt(root);
  function languages_chosen_reset() {
    app_reply_languages_chosen_reset(
      languages_chosen,
      languages_chosen_default,
    );
  }
  async function love() {
    let languages_chosen_before = languages_chosen;
    languages_chosen = [];
    languages_chosen_reset();
    function lambda13(language) {
      list_add(languages_chosen, language);
    }
    await app_reply_love(languages, lambda13);
    await update(3);
    languages_chosen = languages_chosen_before;
  }
  let component4 = html_button(root, "❤️", love);
  app_reply_buttons_languages(languages_chosen, root, languages);
  html_p_text(
    root,
    "2. How many Bible passages do you want? This will reset any responses below. You may need to choose 'Copy' button.",
  );
  let choices_verse_count = [];
  function lambda10(item2) {
    list_add(choices_verse_count, item2);
  }
  each_range_from(1, 4, lambda10);
  function lambda4(item) {
    let c = item * 2;
    list_add(choices_verse_count, c);
  }
  each_range_from(3, 6, lambda4);
  list_add(choices_verse_count, 20);
  list_add(choices_verse_count, 40);
  function lambda2(c) {
    async function lambda3() {
      await update(c);
    }
    let component = html_button(root, c, lambda3);
  }
  each(choices_verse_count, lambda2);
  async function update(verse_count) {
    list_empty(bible_texts);
    list_empty(responses);
    list_empty(responses_buttons);
    list_shuffle(encouragement);
    log({
      verse_count,
    });
    let taken = list_take(encouragement, verse_count);
    let reference_current = null;
    async function lambda6(reference) {
      let verse_range = await ebible_references_parse_lines([en], [reference]);
      async function lambda5(l) {
        let bible_folder = object_property_get(l, "bible_folder");
        let right = ebible_folder_english();
        if (equal(bible_folder, right)) {
          let r = list_random_item(english_choices);
          bible_folder = r;
          log({
            bible_folder,
          });
        }
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
    buttons_refresh();
    await copy_refresh();
  }
  function lambda12() {}
  let component3 = html_button(root, "Copy", copy_refresh);
  html_p_text(root, "3. (Optional) Choose any responses:");
  function lambda9(choice) {
    let b = null;
    let text = object_property_get(choice, "text");
    async function lambda11() {
      let response = object_property_get(choice, "response");
      list_add(responses, response);
      list_add(responses_buttons, b);
      await copy_refresh();
      typed_reset();
      buttons_refresh();
    }
    b = html_button(root, text, lambda11);
    return b;
  }
  let buttons = list_map(choices, lambda9);
  async function copy_refresh() {
    let v22 = prayer_blessing_expand();
    let copy = list_copy_reverse(languages_chosen);
    let mapped = list_map_property(copy, "language_code");
    let result = list_join_comma(mapped);
    let concated = list_concat_multiple([
      responses,
      [v22],
      bible_texts,
      [result],
    ]);
    let joined = await list_join_newline_2_copy(concated);
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
  html_on_keydown_body(lambda6);
  let typed_get = function lambda15() {
    return typed;
  };
  let buttons_refresh = app_reply_buttons_refresh(
    typed_get,
    responses_buttons,
    buttons,
  );
  function typed_reset() {
    typed = "";
  }
}
