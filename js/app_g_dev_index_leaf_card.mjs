import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_dev_index_index_card } from "./app_g_dev_index_index_card.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_dev_index_leaf_card(parent, label, hash) {
  arguments_assert(arguments, 3);
  let card = app_g_dev_index_index_card(parent);
  let href = "#" + hash;
  let link = html_a_href_text(card, href, label);
  ("the address stays on the anchor so the card can still be copied or opened in a new tab, but the going-there is done by hand: a bare href only changes the hash and waits for a listener to reload, and that listener is registered while the app starts up, so a start-up that fails takes every card on this page with it");
  function go() {
    html_hash_name_reload(hash);
  }
  html_on_click(link, go);
  html_display_block(link);
  html_style_assign(link, {
    color: "inherit",
    "text-decoration": "none",
  });
  return card;
}
