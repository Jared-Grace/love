import { text_empty_not_is } from "../../../love/public/src/text_empty_not_is.mjs";
import { ebible_language_original } from "../../../love/public/src/ebible_language_original.mjs";
import { ebible_language_en } from "../../../love/public/src/ebible_language_en.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { app_reply_verses_add } from "../../../love/public/src/app_reply_verses_add.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { app_reply_buttons_refresh } from "../../../love/public/src/app_reply_buttons_refresh.mjs";
import { html_on_keydown_body } from "../../../love/public/src/html_on_keydown_body.mjs";
import { text_take_less_1 } from "../../../love/public/src/text_take_less_1.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { prayer_blessing_expand } from "../../../love/public/src/prayer_blessing_expand.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_reply_love } from "../../../love/public/src/app_reply_love.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_reply_initialize } from "../../../love/public/src/app_reply_initialize.mjs";
export async function app_reply_main(context) {
  let r = await app_reply_initialize(context);
  let choices = property_get(r, "choices");
  let languages = property_get(r, "languages");
  let english_choices = await ebible_versions_english_choices();
  let en_l = ebible_language_en();
  let o = ebible_language_original();
  let languages_chosen_default = [o, en_l];
  let languages_chosen = [];
  languages_chosen_reset();
  let root = property_get(r, "root");
  let en = property_get(r, "en");
  let encouragement = property_get(r, "encouragement");
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
      languages,
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
  let visible_count = null;
  async function update(verse_count) {
    list_empty(bible_texts);
    list_empty(responses);
    list_empty(responses_buttons);
    let taken = list_shuffle_take(encouragement, verse_count);
    let reference_current = null;
    async function lambda6(reference) {
      reference_current = await app_reply_verses_add(
        en,
        reference,
        english_choices,
        reference_current,
        bible_texts,
        languages_chosen,
      );
    }
    await each_async(taken, lambda6);
    visible_count = buttons_refresh();
    await copy_refresh();
  }
  function lambda12() {}
  let component3 = html_button(root, "Copy", copy_refresh);
  html_p_text(root, "3. (Optional) Choose any responses:");
  function lambda9(choice) {
    let b = null;
    let text = property_get(choice, "text");
    async function lambda11() {
      let response = property_get(choice, "response");
      list_add(responses, response);
      list_add(responses_buttons, b);
      await copy_refresh();
      typed_reset();
      visible_count = buttons_refresh();
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
    let key = property_get(event, "key");
    if (equal(key, "Backspace")) {
      let ne = text_empty_not_is(typed);
      if (ne) {
        typed = text_take_less_1(typed);
      }
    } else {
      if (visible_count > 0) {
        typed += key;
      }
    }
    visible_count = buttons_refresh();
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
