import { html_button_bare } from "./html_button_bare.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_aria_expanded_set } from "./html_aria_expanded_set.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_container_trim_frame } from "./app_shared_container_trim_frame.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_caret_open } from "./app_shared_caret_open.mjs";
import { app_shared_caret_closed } from "./app_shared_caret_closed.mjs";
import { not } from "./not.mjs";
export function app_shared_container_blue_collapsible(
  parent,
  title_text,
  changed,
) {
  "a blue card whose bold centered title folds everything inside it away when tapped, with a caret saying which way it is - so a phone reader can shut a whole group and jump past it to the next one. it hands back the div to draw into, which starts open";
  "it says which way it has just gone, every time it goes either way, because a page with an open-everything button has to know how many of its cards are still shut and this card is the only thing that knows when a reader taps its own title. A card on a page with no such button is handed something that does nothing with the news.";
  "THE TITLE IS A REAL BUTTON, AND IT HAS TO BE. It was a div that had been given something to do when clicked, which looks and behaves identically to anybody using a mouse and is simply not there to anybody who is not: the tab key walks straight past it, enter and space do nothing to it, and it is read out as a line of words with no hint that it opens anything. Every folding card on every page here comes through this one function, so the whole repo was unreachable by keyboard in the same way, and fixing it here fixes all of them at once.";
  "The caret says which way it is to somebody looking; the expanded mark says the same sentence to somebody being read to, and it is written again on every change because it describes right now rather than the button.";
  let card = app_shared_container_blue(parent);
  ("this card only holds one line of its own - the title - so it wears the framing card's trim: this is the outermost of four cards nested one inside the next, and every bit of padding here comes off both the height of the page and the width of the verse text at the bottom of them");
  app_shared_container_trim_frame(card);
  let caret_open = app_shared_caret_open();
  let title = text_combine_multiple([caret_open, " ", title_text]);
  let title_button = html_button_bare(card, toggle);
  html_text_set(title_button, title);
  html_bold_mild(title_button);
  html_centered(title_button);
  html_cursor_pointer(title_button);
  html_width_full(title_button);
  html_aria_expanded_set(title_button, true);
  let body = html_div(card);
  let collapsed = false;
  function collapsed_set(value) {
    collapsed = value;
    html_display_none_or_block(collapsed, body);
    let caret_closed = app_shared_caret_closed();
    let caret = collapsed ? caret_closed : caret_open;
    let text = text_combine_multiple([caret, " ", title_text]);
    html_text_set(title_button, text);
    let expanded = not(collapsed);
    html_aria_expanded_set(title_button, expanded);
    changed(collapsed);
  }
  function toggle() {
    let next = not(collapsed);
    collapsed_set(next);
  }
  ("the setter comes back beside the body because a card is also shut and opened from outside itself - a page-wide open-everything button that could not reach in here would leave a folded card looking broken");
  let r = {
    body,
    collapsed_set,
  };
  return r;
}
