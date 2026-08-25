import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
export function app_shared_bible_screen_open(context, back) {
  "start a bible settings screen: clear the page, then stand a fresh box inside it holding the one reading column these apps share, and lead with the back button that leaves it; returns that column for the caller to fill";
  "The column is held by a box made fresh for this screen rather than by the page root, which outlives it - the reason is written where the padding is done. Without it the screen stood edge to edge while the row of buttons the page adds underneath stood in the column, so the way out of the screen and the things the screen offered were each a different width from the two buttons below them.";
  let page = html_clear_context(context);
  html_centered(page);
  html_page_padding_x(page);
  let content = html_div(page);
  let column = app_shared_content_column_pad(content);
  app_shared_button_back(content, back);
  return content;
}
