import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
// The blue card surface every example sits on — the medium step of the graduated
// blue nesting (light outer frame -> medium example card), matching app_search.
export function example_card_container_dom(parent) {
  let card = html_div(parent);
  html_style_background_color_set(card, app_shared_container_blue_medium_background_color());
  html_border(card, "1px", app_shared_container_blue_border_color());
  html_style_set(card, "border-radius", "8px");
  html_style_set(card, "padding", "1.25rem");
  html_style_set(card, "margin", "1.5rem 0");
  return card;
}
