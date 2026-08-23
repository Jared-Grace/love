import { html_click_new_tab_is } from "./html_click_new_tab_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_hash_index_card } from "./app_shared_hash_index_card.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_hash_index_leaf_card(parent, label, hash) {
  arguments_assert(arguments, 3);
  let card = app_shared_hash_index_card(parent);
  let href = "#" + hash;
  let link = html_a_href_text(card, href, label);
  ("the address stays on the anchor so the card can still be copied or opened in a new tab, but the going-there is done by hand: a bare href only changes the hash and waits for a listener to reload, and that listener is registered while the app starts up, so a start-up that fails takes every card on this page with it");
  ("which is why a click asking for a NEW TAB is handed straight back to the browser. The anchor already carries the address, so ctrl-click opened the route in a new tab on its own - and then this handler ran as well and took the tab the reader was standing on to the same screen. Two tabs showing one route, and the page they came from gone.");
  function go(event) {
    if (html_click_new_tab_is(event)) {
      return;
    }
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
