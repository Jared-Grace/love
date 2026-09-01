import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_love_all_click } from "./app_reply_love_all_click.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_visible_count } from "./app_reply_visible_count.mjs";
import { app_reply_verses_refresh } from "./app_reply_verses_refresh.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { app_reply_typed_get } from "./app_reply_typed_get.mjs";
import { app_reply_buttons_refresh } from "./app_reply_buttons_refresh.mjs";
import { app_reply_cards_shortcuts_meeting_responses } from "./app_reply_cards_shortcuts_meeting_responses.mjs";
import { app_reply_copy_refresh_chosen } from "./app_reply_copy_refresh_chosen.mjs";
import { app_reply_key_down_handle } from "./app_reply_key_down_handle.mjs";
import { html_on_keydown_body } from "./html_on_keydown_body.mjs";
import { log } from "./log.mjs";
import { property_set } from "./property_set.mjs";
export function app_reply_cards_handlers_draw(
  languages_chosen_held,
  languages_chosen_reset,
  languages,
  card,
  root,
  bible_texts,
  responses,
  responses_buttons,
  encouragement,
  encouragement_singles,
  typed_held,
  typed_reset,
  choices,
) {
  "Wires up one reply card: the language choices, the control for how many verses are showing, the response buttons, the copy that follows whichever languages are chosen, and the keys the page listens for - then draws it once so the card is ready before anybody touches it.";
  arguments_assert(arguments, 13);
  async function love() {
    let r = await app_reply_love_all_click(
      languages_chosen_held,
      languages_chosen_reset,
      languages,
      update,
    );
    return r;
  }
  let languages_chosen = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  let r3 = app_reply_visible_count(
    card,
    love,
    languages_chosen,
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
    let r4 = await app_reply_verses_refresh({
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
    });
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
  app_reply_cards_shortcuts_meeting_responses({
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
  });
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
  log(app_reply_cards_handlers_draw.name, {
    buttons_responses,
  });
  let value = buttons_refresh();
  property_set(visible_count_held, "visible_count", value);
}
