import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
// The white card surface every example sits on.
export function example_card_container_dom(parent) {
  let card = html_div(parent);
  html_style_set(card, "background", "#fff");
  html_style_set(card, "border", "1px solid #e0e0e0");
  html_style_set(card, "border-radius", "8px");
  html_style_set(card, "padding", "1.25rem");
  html_style_set(card, "margin", "1.5rem 0");
  return card;
}
