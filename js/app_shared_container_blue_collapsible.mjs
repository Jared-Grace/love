import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_container_trim_tiny } from "./app_shared_container_trim_tiny.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
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
  ("this card only holds one line of its own - the title - so it wears the framing card's trim: this is the outermost of four cards nested one inside the next, and every bit of padding here comes off both the height of the page and the width of the verse text at the bottom of them");
  app_shared_container_trim_tiny(card);
  let caret_open = app_shared_caret_open();
  let title = text_combine_multiple([caret_open, " ", title_text]);
  let title_div = html_div_text_bold(card, title);
  html_centered(title_div);
  html_cursor_pointer(title_div);
  let body = html_div(card);
  let collapsed = false;
  function collapsed_set(value) {
    collapsed = value;
    html_display_none_or_block(collapsed, body);
    let caret_closed = app_shared_caret_closed();
    let caret = collapsed ? caret_closed : caret_open;
    let text = text_combine_multiple([caret, " ", title_text]);
    html_text_set(title_div, text);
  }
  function toggle() {
    let next = not(collapsed);
    collapsed_set(next);
  }
  html_on_click(title_div, toggle);
  ("the setter comes back beside the body because a card is also shut and opened from outside itself - a page-wide open-everything button that could not reach in here would leave a folded card looking broken");
  let r = {
    body,
    collapsed_set,
  };
  return r;
}
