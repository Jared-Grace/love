import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_shared_hash_index_card(parent) {
  arguments_assert(arguments, 1);
  ("a search-style blue card, but standing at the neighbor gap instead of the small gap a shared card wears, so the #index choices read as one list rather than as separate cards (the search results want the room; a dev directory does not)");
  let card = app_shared_container_blue(parent);
  let gap = app_shared_spaced_neighbor_gap();
  html_style_margin_y(card, gap);
  return card;
}
