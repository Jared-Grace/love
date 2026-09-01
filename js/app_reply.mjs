import { app_reply_response_button } from "./app_reply_response_button.mjs";
import { app_reply_love_all_click } from "./app_reply_love_all_click.mjs";
import { app_reply_verses_refresh } from "./app_reply_verses_refresh.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_reply_key_down } from "./app_reply_key_down.mjs";
import { app_reply_visible_count } from "./app_reply_visible_count.mjs";
import { app_reply_copy_refresh } from "./app_reply_copy_refresh.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { log } from "./log.mjs";
import { list_map_existing } from "./list_map_existing.mjs";
import { app_shared_bible_languages_chosen_default } from "./app_shared_bible_languages_chosen_default.mjs";
import { app_reply_main_shortcuts } from "./app_reply_main_shortcuts.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { app_reply_languages_prompt } from "./app_reply_languages_prompt.mjs";
import { app_reply_buttons_refresh } from "./app_reply_buttons_refresh.mjs";
import { html_on_keydown_body } from "./html_on_keydown_body.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_initialize } from "./app_reply_initialize.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
export async function app_reply(context) {
  app_shared_app_fn_set(context, app_reply);
  let r = await app_reply_initialize(context);
  let choices = property_get(r, "choices");
  let languages = property_get(r, "languages");
  await ebible_versions_english_choices_browser();
  let languages_chosen_default = app_shared_bible_languages_chosen_default();
  let languages_chosen_held = {
    languages_chosen: [],
  };
  languages_chosen_reset();
  let root = property_get(r, "root");
  property_get(r, "en");
  ("the legacy reply app keeps the authored list in its own bundle; the verses app, by contrast, now fetches the list from firebase as data");
  let encouragement = bible_verses_uplifting();
  let encouragement_singles = list_filter_text_includes_not(encouragement, "-");
  let bible_texts = [];
  let responses = [];
  let responses_buttons = [];
  let typed_held = {
    typed: null,
  };
  typed_reset();
  let card = app_shared_container_blue(root);
  app_reply_languages_prompt(card);
  function languages_chosen_reset() {
    let languages_chosen2 = property_get(
      languages_chosen_held,
      "languages_chosen",
    );
    app_reply_languages_chosen_reset(
      languages_chosen2,
      languages_chosen_default,
      languages,
    );
  }
  async function love() {
    let r5 = await app_reply_love_all_click(
      languages_chosen_held,
      languages_chosen_reset,
      languages,
      update,
    );
    return r5;
  }
  let languages_chosen3 = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  let r3 = app_reply_visible_count(
    card,
    love,
    languages_chosen3,
    languages,
    root,
    update,
  );
  let visible_count_held = {
    visible_count: property_get(r3, "visible_count"),
  };
  let card2 = property_get(r3, "card2");
  let buttons_languages = property_get(r3, "buttons_languages");
  async function update(verse_count) {
    let r4 = await app_reply_verses_refresh(
      verse_count,
      bible_texts,
      responses,
      responses_buttons,
      encouragement,
      encouragement_singles,
      languages_chosen_held,
      buttons_refresh,
      visible_count_held,
      copy_refresh,
    );
    return r4;
  }
  let buttons_responses = [];
  app_shared_button_copy(card2, copy_refresh);
  let card3 = app_shared_container_blue(root);
  let languages_chosen5 = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  app_reply_main_shortcuts(
    card3,
    languages_chosen5,
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
  app_shared_button(card4, "Meeting requested", lambda5);
  let card5 = app_shared_container_blue(root);
  app_shared_text_body(card5, "5. (Optional) Choose any responses:");
  function lambda9(choice) {
    let r6 = app_reply_response_button(
      choice,
      responses,
      responses_buttons,
      copy_refresh,
      typed_reset,
      buttons_refresh,
      visible_count_held,
      card5,
    );
    return r6;
  }
  list_map_existing(choices, lambda9, buttons_responses);
  async function copy_refresh() {
    let languages_chosen6 = property_get(
      languages_chosen_held,
      "languages_chosen",
    );
    let r2 = await app_reply_copy_refresh(
      languages_chosen6,
      responses,
      bible_texts,
    );
    return r2;
  }
  function lambda6(event) {
    let typed2 = property_get(typed_held, "typed");
    let visible_count2 = property_get(visible_count_held, "visible_count");
    let app_reply_key_down_answer = app_reply_key_down(
      event,
      typed2,
      visible_count2,
      buttons_refresh,
    );
    let value2 = property_get(app_reply_key_down_answer, "typed");
    property_set(typed_held, "typed", value2);
    let value5 = property_get(app_reply_key_down_answer, "visible_count");
    property_set(visible_count_held, "visible_count", value5);
  }
  html_on_keydown_body(lambda6);
  let typed_get = function lambda15() {
    let value = property_get(typed_held, "typed");
    return value;
  };
  log(app_reply.name, {
    buttons_responses,
  });
  let buttons_refresh = app_reply_buttons_refresh(
    typed_get,
    responses_buttons,
    buttons_responses,
  );
  let value6 = buttons_refresh();
  property_set(visible_count_held, "visible_count", value6);
  function typed_reset() {
    property_set(typed_held, "typed", "");
  }
  app_shared_footer(root);
}
