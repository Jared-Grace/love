import { html_style_margin } from "./html_style_margin.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
("The blue card surface every example sits on — the medium step of the graduated blue nesting (light outer frame -> medium example card), matching ",
  fn_name("app_search"),
  ".");
export function example_card_container_dom(parent) {
  let card = html_div(parent);
  let background = app_shared_container_blue_medium_background_color();
  html_style_background_color_set(card, background);
  let border_color = app_shared_color_blue_pale();
  html_border(card, "1px", border_color);
  html_border_radius(card, "8px");
  html_style_padding(card, "1.25rem");
  html_style_margin(card, "1.5rem 0");
  return card;
}
