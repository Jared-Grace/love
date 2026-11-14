import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
export function app_shared_bible_picker_card_bare(parent) {
  arguments_assert(arguments, 1);
  ("the card a bible picker puts its choices in, before any heading is written into it; a heading of plain words and a heading with an emphasized word both start from this one card, so the two cannot drift into two looks");
  ("hold the choices in a medium-blue card, matching the book picker's section cards");
  let card = app_shared_container_blue_medium(parent);
  ("trim the card's left-right padding to match the book-section cards, giving the number buttons more of the row width");
  let pad_x = app_shared_spaced_tiny_gap();
  html_style_padding_x(card, pad_x);
  return card;
}
