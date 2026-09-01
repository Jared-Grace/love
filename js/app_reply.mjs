import { app_reply_cards_shortcuts_meeting_responses } from "./app_reply_cards_shortcuts_meeting_responses.mjs";
import { app_reply_typed_get } from "./app_reply_typed_get.mjs";
import { app_reply_copy_refresh_chosen } from "./app_reply_copy_refresh_chosen.mjs";
import { app_reply_key_down_handle } from "./app_reply_key_down_handle.mjs";
import { app_reply_love_all_click } from "./app_reply_love_all_click.mjs";
import { app_reply_verses_refresh } from "./app_reply_verses_refresh.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_reply_visible_count } from "./app_reply_visible_count.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { log } from "./log.mjs";
import { app_shared_bible_languages_chosen_default } from "./app_shared_bible_languages_chosen_default.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { app_reply_languages_prompt } from "./app_reply_languages_prompt.mjs";
import { app_reply_buttons_refresh } from "./app_reply_buttons_refresh.mjs";
import { html_on_keydown_body } from "./html_on_keydown_body.mjs";
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
  let typed_get = app_reply_typed_get(typed_held);
  let buttons_refresh = app_reply_buttons_refresh(
    typed_get,
    responses_buttons,
    buttons_responses,
  );
  app_reply_cards_shortcuts_meeting_responses(
    root,
    languages_chosen_held,
    languages,
    update,
    buttons_languages,
    buttons_responses,
    responses,
    responses_buttons,
    copy_refresh,
    typed_reset,
    buttons_refresh,
    visible_count_held,
    choices,
  );
  async function copy_refresh() {
    let r8 = await app_reply_copy_refresh_chosen(
      languages_chosen_held,
      responses,
      bible_texts,
    );
    return r8;
  }
  function lambda6(event) {
    let r7 = app_reply_key_down_handle(
      event,
      typed_held,
      visible_count_held,
      buttons_refresh,
    );
    return r7;
  }
  html_on_keydown_body(lambda6);
  log(app_reply.name, {
    buttons_responses,
  });
  let value = buttons_refresh();
  property_set(visible_count_held, "visible_count", value);
  function typed_reset() {
    property_set(typed_held, "typed", "");
  }
  app_shared_footer(root);
}
