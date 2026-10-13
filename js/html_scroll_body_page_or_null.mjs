import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_scroll_body_or_null } from "./html_scroll_body_or_null.mjs";
export function html_scroll_body_page_or_null() {
  "The box the page now showing scrolls inside, and nothing at all when the page itself is what scrolls. Asked of the whole page, for a caller that has no root of its own to hand over.";
  let page = html_component_wrap(document.body);
  let body = html_scroll_body_or_null(page);
  return body;
}
