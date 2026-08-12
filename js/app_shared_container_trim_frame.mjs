import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
export function app_shared_container_trim_frame(card) {
  "take a card down to the frame gap on every side and between it and the next card - the trim a card wears when it frames other cards rather than holding words of its own. the card padding a page of text wants is the right amount once, and four of them nested one inside the next spend most of a phone screen on frames, so a card that only carries a title gives the room back to what it holds";
  "one function rather than the same three lines in each card, because the whole point is that the levels of the nesting trim by the same amount: tuning one of them alone is what makes the nesting stop reading as one family";
  "the gap to the card above is carried on top only, never on the bottom. A stack of cards needs the same gap between each pair either way, because two neighbours in a column share one gap between them - but a bottom margin is also worn by the last card in the stack, where there is no neighbour to be apart from, and there it lands on top of the frame's own padding and makes the band under the last card twice the band down its sides. The card looked lopsided for that reason alone: measured, the bottom came to 5.8 pixels against 3.81 at the left and right. Carrying the gap on top costs the stack nothing and lets a frame close the same distance from what it holds on every side.";
  "the bottom gap has to be said, not left unsaid: every card starts out wearing a roomy margin above and below, so trimming means naming the smaller number on both edges. Dropping the line rather than zeroing it let that starting margin back in, and the band under the last card went from too big to nearly four times too big.";
  let gap = app_shared_spaced_frame_gap();
  html_style_padding_x(card, gap);
  html_style_padding_y(card, gap);
  html_style_margin_top(card, gap);
  html_style_margin_bottom(card, 0);
}
