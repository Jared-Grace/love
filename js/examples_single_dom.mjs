import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { example_card_dom } from "./example_card_dom.mjs";
// The single-example screen: a nav row (back to menu, prev, next, position) and
// just the one selected card — no scrolling through the rest.
export function examples_single_dom(
  parent,
  examples,
  index,
  on_prev,
  on_next,
  on_menu,
) {
  let nav = html_div(parent);
  html_style_set(nav, "display", "flex");
  html_style_set(nav, "gap", "0.5rem");
  html_style_set(nav, "flex-wrap", "wrap");
  html_style_set(nav, "align-items", "center");
  html_style_set(nav, "margin-bottom", "1rem");
  app_shared_button(nav, "☰ All examples", on_menu);
  app_shared_button(nav, text_combine(emoji_arrow_left(), " Prev"), on_prev);
  app_shared_button(nav, app_shared_button_next_text(), on_next);
  let position = html_div(nav);
  let count = list_size(examples);
  html_text_set(position, text_combine(index + 1, " / " + count));
  html_style_set(position, "color", "#888");
  html_style_set(position, "font-size", "0.85rem");
  let example = list_get(examples, index);
  example_card_dom(parent, example);
}
