import { html_a_hash_name_reload } from "./html_a_hash_name_reload.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
export function app_shared_hash_index_leaf_link(card, label, hash, new_tab) {
  arguments_assert(arguments, 4);
  ("the link on a directory card, and the whole of what the two kinds of directory disagree about: whether picking something LEAVES the list or opens it beside the list.");
  ("A NEW TAB needs nothing but the address. A tab opened fresh reads the whole url it was given, hash and all, and starts the app on that screen - so there is no listener to wait for and nothing to do by hand.");
  ("Going there HERE cannot lean on the address the same way, because the address is already this page and only the word after the hash changes - so that link is a thing of its own, and it is a thing the songs page wants too.");
  let href = "#" + hash;
  if (new_tab) {
    let link_new = html_a_href_text_new_tab(card, href, label);
    return link_new;
  }
  let link = html_a_hash_name_reload(card, hash, label);
  return link;
}
