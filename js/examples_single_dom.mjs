import { html_style_gap } from "./html_style_gap.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { html_div } from "./html_div.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { example_card_dom } from "./example_card_dom.mjs";
("The single-example screen: a nav row (back to menu, prev, next, position) and");
("just the one selected card — no scrolling through the rest.");
export function examples_single_dom(
  parent,
  examples,
  index,
  on_prev,
  on_next,
  on_menu,
) {
  let count = list_size(examples);
  html_progress_bar(parent, index, count, "example");
  let nav = html_div(parent);
  html_display_flex(nav);
  html_style_gap(nav, "0.5rem");
  html_style_set(nav, "flex-wrap", "wrap");
  html_align_items_center(nav);
  html_style_margin_bottom(nav, "1rem");
  app_shared_button(nav, "☰ All examples", on_menu);
  let left = emoji_arrow_left();
  let text = text_combine(left, " Prev");
  app_shared_button(nav, text, on_prev);
  let text2 = app_shared_button_next_text();
  app_shared_button(nav, text2, on_next);
  let example = list_get(examples, index);
  example_card_dom(parent, example);
}
