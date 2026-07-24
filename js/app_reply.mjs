import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { log } from "./log.mjs";
import { list_map_existing } from "./list_map_existing.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { app_reply_languages_chosen_default } from "./app_reply_languages_chosen_default.mjs";
import { app_reply_main_shortcuts } from "./app_reply_main_shortcuts.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { text_alphabet_includes } from "./text_alphabet_includes.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_reply_verses_add } from "./app_reply_verses_add.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "./app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "./app_reply_languages_prompt.mjs";
import { app_reply_buttons_refresh } from "./app_reply_buttons_refresh.mjs";
import { html_on_keydown_body } from "./html_on_keydown_body.mjs";
import { text_take_less_1 } from "./text_take_less_1.mjs";
import { equal } from "./equal.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { each_async } from "./each_async.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_empty } from "./list_empty.mjs";
import { each_range_from } from "./each_range_from.mjs";
import { each } from "./each.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_reply_love } from "./app_reply_love.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_initialize } from "./app_reply_initialize.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { multiply } from "./multiply.mjs";
export async function app_reply(context) {
  let r = await app_reply_initialize(context);
  let choices = property_get(r, "choices");
  let languages = property_get(r, "languages");
  let english_choices = await ebible_versions_english_choices_browser();
  let languages_chosen_default = app_reply_languages_chosen_default();
  let languages_chosen = [];
  languages_chosen_reset();
  let root = property_get(r, "root");
  let en = property_get(r, "en");
  "the legacy reply app keeps the authored list in its own bundle; the verses app, by contrast, now fetches the list from firebase as data";
  let encouragement = bible_verses_uplifting();
  let encouragement_singles = list_filter_text_includes_not(encouragement, "-");
  let bible_texts = [];
  let responses = [];
  let responses_buttons = [];
  let typed = null;
  typed_reset();
  let card = app_shared_container_blue(root);
  let p = app_reply_languages_prompt(card);
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
  let component4 = app_shared_button(card, "❤️", love);
  let buttons_languages = app_reply_buttons_languages(
    languages_chosen,
    card,
    languages,
  );
  let card2 = app_shared_container_blue(root);
  app_shared_text_body(
    card2,
    "2. How many Bible passages do you want? This will reset any responses below. You may need to choose 'Copy' button.",
  );
  let choices_verse_count = [];
  function lambda10(item2) {
    list_add(choices_verse_count, item2);
  }
  each_range_from(1, 4, lambda10);
  function lambda4(item) {
    let c = multiply(item, 2);
    list_add(choices_verse_count, c);
  }
  each_range_from(3, 6, lambda4);
  list_add_multiple(choices_verse_count, [20, 40]);
  function lambda2(c) {
    async function lambda3() {
      await update(c);
    }
    let component = app_shared_button(card2, c, lambda3);
  }
  each(choices_verse_count, lambda2);
  let visible_count = null;
  async function update(verse_count) {
    list_empty(bible_texts);
    list_empty(responses);
    list_empty(responses_buttons);
    let e = encouragement;
    if (equal(verse_count, 1)) {
      e = encouragement_singles;
    }
    let taken = list_shuffle_take(e, verse_count);
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
  let buttons_responses = [];
  let text2 = html_button_copy_text();
  let component3 = app_shared_button(card2, text2, copy_refresh);
  let card3 = app_shared_container_blue(root);
  app_reply_main_shortcuts(
    card3,
    languages_chosen,
    languages,
    update,
    buttons_languages,
    buttons_responses,
  );
  let card4 = app_shared_container_blue(root);
  app_shared_text_body(card4, "4. (Optional) Meeting:");
  async function lambda5() {
    await clipboard_copy(
      "If God wills: I am willing to have a meeting with you and share the word of God! I plan on sending a message to you later to choose a date and time.",
    );
  }
  let component2 = app_shared_button(card4, "Meeting requested", lambda5);
  let card5 = app_shared_container_blue(root);
  app_shared_text_body(card5, "5. (Optional) Choose any responses:");
  function lambda9(choice) {
    let b = null;
    let text = property_get(choice, "text");
    async function click() {
      log(app_reply.name, {
        choice,
      });
      let response = property_get(choice, "response");
      list_add(responses, response);
      list_add(responses_buttons, b);
      await copy_refresh();
      typed_reset();
      visible_count = buttons_refresh();
    }
    b = app_shared_button(card5, text, click);
    object_merge_set(b, choice);
    object_merge_set(b, {
      click,
    });
    return b;
  }
  list_map_existing(choices, lambda9, buttons_responses);
  async function copy_refresh() {
    let v = prayer_blessing_expand();
    let copy = list_copy_reverse(languages_chosen);
    let mapped = list_map_property(copy, "language_code");
    let result = list_join_comma(mapped);
    let concated = list_concat_multiple([
      responses,
      [v],
      bible_texts,
      [result],
    ]);
    let joined = await list_join_newline_2_copy(concated);
  }
  function lambda6(event) {
    let key = property_get(event, "key");
    key = text_lower_to(key);
    if (equal(key, "backspace")) {
      let ne = text_empty_not_is(typed);
      if (ne) {
        typed = text_take_less_1(typed);
      }
    } else {
      let includes = text_alphabet_includes(key);
      if (includes) {
        if (greater_than(visible_count, 0)) {
          typed += key;
        }
      }
    }
    visible_count = buttons_refresh();
  }
  html_on_keydown_body(lambda6);
  let typed_get = function lambda15() {
    return typed;
  };
  log(app_reply.name, {
    buttons_responses,
  });
  let buttons_refresh = app_reply_buttons_refresh(
    typed_get,
    responses_buttons,
    buttons_responses,
  );
  visible_count = buttons_refresh();
  function typed_reset() {
    typed = "";
  }
}
