import { html_on_click } from "./html_on_click.mjs";
import { window_open_google_define_later } from "./window_open_google_define_later.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_on_click_google_define(parent, item, search_term) {
  "The word shown is the one in the text, and the words looked up are whatever the";
  "caller asked for - the reader in the Bible adds '(Bible)' to the search so the";
  "answer is about the word as scripture uses it.";
  let item_span = html_span_text(parent, item);
  let lambda = window_open_google_define_later(search_term);
  html_on_click(item_span, lambda);
}
