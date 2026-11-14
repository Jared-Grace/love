import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_picker_card_bare } from "./app_shared_bible_picker_card_bare.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_bible_picker_card_parts_bold(parent, parts) {
  arguments_assert(arguments, 2);
  ("the bible picker card headed by pieces that take turns being plain and bold, so a heading can stress one word in it - the book's name over its chapters - while the words around it stay plain");
  let card = app_shared_bible_picker_card_bare(parent);
  let title_div = html_div(card);
  html_centered(title_div);
  html_cycle_bold(title_div, parts);
  ("color the heading in the deep blue of the cards, not gray");
  let color = app_shared_color_blue_dark();
  html_font_color_set(title_div, color);
  return card;
}
