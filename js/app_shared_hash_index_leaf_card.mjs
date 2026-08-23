import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_hash_index_card } from "./app_shared_hash_index_card.mjs";
import { app_shared_hash_index_leaf_link } from "./app_shared_hash_index_leaf_link.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_hash_index_leaf_card(parent, label, hash, new_tab) {
  arguments_assert(arguments, 4);
  ("one choosable screen in a directory: a card wearing the whole of a link, so the reader taps the card rather than the words on it.");
  ("the address stays on the anchor whichever way the card goes, so the card can always be copied or opened by hand.");
  let card = app_shared_hash_index_card(parent);
  let link = app_shared_hash_index_leaf_link(card, label, hash, new_tab);
  html_display_block(link);
  html_style_assign(link, {
    color: "inherit",
    "text-decoration": "none",
  });
  return card;
}
