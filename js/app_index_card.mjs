import { app_index_card_frame } from "./app_index_card_frame.mjs";
import { app_index_card_caption } from "./app_index_card_caption.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_index_card(root, label, text, opened) {
  "one card on the index page: a wide button that runs something when pressed, and a line under it saying what that something is for";
  "Beside the twin that carries an ADDRESS instead of a lambda. This one is for a card whose pressing is a thing only this page can do; a card that merely leads somewhere should be the twin, so that the browser can offer to open it in a new tab.";
  let card = app_index_card_frame(root, text);
  app_shared_button_wide(card, label, opened);
  app_index_card_caption(card, text);
}
