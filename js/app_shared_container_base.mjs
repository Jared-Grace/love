import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_card } from "./html_card.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_container_base(parent) {
  let div = html_div(parent);
  html_card(div);
  ("the room a card keeps from the card above and below it, taken from the shared scale rather than counted in pixels: written in pixels it stayed the same ten wherever the writing around it grew or shrank, and a card sitting in larger writing wants a larger gap for the same reason its own words do");
  let gap = app_shared_spaced_small_gap();
  html_style_margin_y(div, gap);
  return div;
}
