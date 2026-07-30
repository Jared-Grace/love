import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_caret_open } from "./app_shared_caret_open.mjs";
import { app_shared_caret_closed } from "./app_shared_caret_closed.mjs";
import { not } from "./not.mjs";

export function app_shared_container_blue_collapsible(parent, title_text) {
  "a blue card whose bold centered title folds everything inside it away when tapped, with a caret saying which way it is - so a phone reader can shut a whole group and jump past it to the next one. it hands back the div to draw into, which starts open";
  let card = app_shared_container_blue(parent);
  let caret_open = app_shared_caret_open();
  let title = text_combine_multiple([caret_open, " ", title_text]);
  let title_div = html_div_text_bold(card, title);
  html_centered(title_div);
  html_cursor_pointer(title_div);
  let body = html_div(card);
  let collapsed = false;
  function toggle() {
    collapsed = not(collapsed);
    html_display_none_or_block(collapsed, body);
    let caret_closed = app_shared_caret_closed();
    let caret = collapsed ? caret_closed : caret_open;
    let text = text_combine_multiple([caret, " ", title_text]);
    html_text_set(title_div, text);
  }
  html_on_click(title_div, toggle);
  return body;
}
