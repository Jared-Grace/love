import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_main_shortcuts } from "./app_reply_main_shortcuts.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_reply_response_button } from "./app_reply_response_button.mjs";
import { list_map_existing } from "./list_map_existing.mjs";
export function app_reply_cards_shortcuts_meeting_responses({
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
}) {
  arguments_assert(arguments, 1);
  let card = app_shared_container_blue(root);
  let languages_chosen = property_get(
    languages_chosen_held,
    "languages_chosen",
  );
  app_reply_main_shortcuts(
    card,
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
  app_shared_button(card4, "Meeting requested", lambda5);
  let card5 = app_shared_container_blue(root);
  app_shared_text_body(card5, "5. (Optional) Choose any responses:");
  function lambda9(choice) {
    let r = app_reply_response_button(
      choice,
      responses,
      responses_buttons,
      copy_refresh,
      typed_reset,
      buttons_refresh,
      visible_count_held,
      card5,
    );
    return r;
  }
  list_map_existing(choices, lambda9, buttons_responses);
}
