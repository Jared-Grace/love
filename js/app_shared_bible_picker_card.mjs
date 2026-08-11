import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_bible_picker_card(parent, title_text) {
  "the card a bible picker puts its choices in, headed by what they are choices of; the caller draws into the card itself rather than into a body under the heading, because the verse picker heads the same card twice - once with the book and once with the chapter";
  "one function rather than the card built again beside each picker, so the chapter picker on its own screen and the one the whole-chapter reader draws in place cannot drift into two looks";
  "hold the choices in a medium-blue card, matching the book picker's section cards";
  let card = app_shared_container_blue_medium(parent);
  ("trim the card's left-right padding to match the book-section cards, giving the number buttons more of the row width");
  let pad_x = app_shared_spaced_tiny_gap();
  html_style_padding_x(card, pad_x);
  let title_div = html_div_text_centered(card, title_text);
  ("color the heading in the deep blue of the cards, not gray");
  let color = app_shared_color_blue_dark();
  html_font_color_set(title_div, color);
  return card;
}
