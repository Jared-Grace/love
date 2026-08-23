import { app_index_card_frame } from "./app_index_card_frame.mjs";
import { app_shared_button_wide_link } from "./app_shared_button_wide_link.mjs";
import { app_index_card_caption } from "./app_index_card_caption.mjs";
export function app_index_card_link(root, label, text, url) {
  "one card on the index page that leads somewhere: a wide link wearing the face of a button, and a line under it saying what the place it leads to is for";
  "Beside the twin that carries a lambda. A card that only ever goes to an address is written this way so that the address is really there on the page - which is what lets a browser open it in a new tab, hold it under a long press, or copy it, none of which it will do for a button.";
  let card = app_index_card_frame(root, text);
  app_shared_button_wide_link(card, label, url);
  app_index_card_caption(card, text);
}
