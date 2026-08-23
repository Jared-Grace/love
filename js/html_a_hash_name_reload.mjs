import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_click_new_tab_is } from "./html_click_new_tab_is.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function html_a_hash_name_reload(parent, hash, text) {
  arguments_assert(arguments, 3);
  ("a link to another screen of THIS page, named by the word after the hash: the address is really on the anchor, and a plain click loads the page again on that name.");
  ("the address has to be there whatever the click does, because it is the whole of what a browser can act on. Open in a new tab, copy the link, keep it for later, middle-click - none of those are offered for anything but a real link, and a screen worth handing to somebody is worth being able to hand.");
  ("a plain click reloads rather than only changing the hash, because changing the hash asks a listener to notice, and the listener is registered while the page starts up - so a start-up that fails takes every link on the page with it. Reloading needs nobody.");
  ("and it asks FIRST whether the reader wanted a new tab anyway. The address is on the anchor, so ctrl-click opens one on its own; without the question this handler would run as well and take the tab the reader was standing on to the same screen.");
  let href = "#" + hash;
  let link = html_a_href_text(parent, href, text);
  function go(event) {
    if (html_click_new_tab_is(event)) {
      return;
    }
    html_hash_name_reload(hash);
  }
  html_on_click(link, go);
  return link;
}
