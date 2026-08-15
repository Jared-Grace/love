import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_index_card(root, label, text, opened) {
  "one card on the index page: a wide button that opens something, and a line under it saying what that something is for. a card with nothing to say leaves the line out rather than showing an empty one";
  let card = app_shared_container_blue(root);
  app_shared_button_wide(card, label, opened);
  let has_text = text_empty_not_is(text);
  if (has_text) {
    html_div_text_centered(card, text);
  }
}
