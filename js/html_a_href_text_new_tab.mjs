import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_a_new_tab } from "./html_a_new_tab.mjs";
export function html_a_href_text_new_tab(root, href, text) {
  "A link that always opens in a new tab, leaving the page it was clicked from still open behind it, even when it stays on this site.";
  arguments_assert(arguments, 3);
  let a = html_a_href_text(root, href, text);
  html_a_new_tab(a);
  return a;
}
