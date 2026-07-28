import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { app_code_column_cap } from "./app_code_column_cap.mjs";
export function app_code_feedback_slot_style(slot) {
  "style the one slot that holds BOTH the success message and the correction, stacked in the same single grid cell so the slot is always as tall as the TALLER of the two and never grows or shrinks when one replaces the other - nothing shifts under the learner. Vertically centre whichever one is showing, and cap it to the button column so it lines up.";
  html_display_grid(slot);
  html_align_items_center(slot);
  app_code_column_cap(slot);
}
