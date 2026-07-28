import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
export function app_code_feedback_slot_style(slot) {
  "style the one slot that holds BOTH the success message and the correction, stacked in the same single grid cell so the slot is always as tall as the TALLER of the two and never grows or shrinks when one replaces the other - nothing shifts under the learner. Vertically centre whichever one is showing. The slot is left full width so the correction (itself a light-blue card) self-caps to the card width; the success message is capped to that same width by its own content-cap.";
  html_display_grid(slot);
  html_align_items_center(slot);
}
