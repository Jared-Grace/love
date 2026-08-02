import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_shared_container_trim_tiny(card) {
  "take a card down to the tiny gap on every side and between it and the next card - the trim a card wears when it frames other cards rather than holding words of its own. the card padding a page of text wants is the right amount once, and four of them nested one inside the next spend most of a phone screen on frames, so a card that only carries a title gives the room back to what it holds";
  "one function rather than the same three lines in each card, because the whole point is that the levels of the nesting trim by the same amount: tuning one of them alone is what makes the nesting stop reading as one family";
  let gap = app_shared_spaced_tiny_gap();
  html_style_padding_x(card, gap);
  html_style_padding_y(card, gap);
  html_style_margin_y(card, gap);
}
