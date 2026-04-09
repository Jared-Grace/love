import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { window_open_google_define_later } from "../../../love/public/src/window_open_google_define_later.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function html_span_on_click_google_define(parent, item, search_term) {
  let item_span = html_span_text(parent, item);
  let lambda9 = window_open_google_define_later(item);
  html_on_click(item_span, lambda9);
}
