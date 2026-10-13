import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_body_page_or_null } from "./html_scroll_body_page_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { html_scroll_top_get } from "./html_scroll_top_get.mjs";
import { html_scroll_top_set } from "./html_scroll_top_set.mjs";
export function html_scroll_body_top_kept(draw) {
  "Draws something again without moving the reader: how far down the page's scrolling box stood is read first, the drawing is done, and the distance is given back.";
  "A drawing that empties a place before filling it makes the page short for a moment, and the browser answers a page gone short by going to its top. The reader would then be thrown to the top for pressing a button halfway down.";
  "On a page with no scrolling box of its own the drawing is simply done.";
  arguments_assert(arguments, 1);
  let body = html_scroll_body_page_or_null();
  if (null_is(body)) {
    draw();
    return;
  }
  let scroll_top = html_scroll_top_get(body);
  draw();
  html_scroll_top_set(body, scroll_top);
}
