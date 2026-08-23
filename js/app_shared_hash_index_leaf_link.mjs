import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { html_click_new_tab_is } from "./html_click_new_tab_is.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function app_shared_hash_index_leaf_link(card, label, hash, new_tab) {
  arguments_assert(arguments, 4);
  ("the link on a directory card, and the whole of what the two kinds of directory disagree about: whether picking something LEAVES the list or opens it beside the list.");
  ("A NEW TAB needs nothing but the address. A tab opened fresh reads the whole url it was given, hash and all, and starts the app on that screen - so there is no listener to wait for and nothing to do by hand.");
  ("Going there HERE cannot lean on the address the same way, because the address is already this page and only the word after the hash changes. That change asks a listener to notice, and the listener is registered while the app starts up, so a start-up that fails takes every card on the page with it. Reloading on the spot needs nobody.");
  ("Which is why the same-tab card still asks whether the reader wanted a new tab anyway. The address is on the anchor either way, so ctrl-click opens one on its own - and without the question this handler would then run as well and take the tab the reader was standing on to the same screen.");
  let href = "#" + hash;
  if (new_tab) {
    let link_new = html_a_href_text_new_tab(card, href, label);
    return link_new;
  }
  let link = html_a_href_text(card, href, label);
  function go(event) {
    if (html_click_new_tab_is(event)) {
      return;
    }
    html_hash_name_reload(hash);
  }
  html_on_click(link, go);
  return link;
}
