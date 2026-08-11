import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_g_dev_index_index_card(parent) {
  arguments_assert(arguments, 1);
  ("a search-style blue card, but with the shared 10px margin-y overridden to a TIGHTER 0.15rem so the #index choices sit close together (the search results want the room; a dev directory does not)");
  let card = app_shared_container_blue(parent);
  html_style_margin_y(card, "0.15rem");
  return card;
}
