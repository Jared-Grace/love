import { html_style_set } from "./html_style_set.mjs";
export function app_code_feedback_cell(cell) {
  "place a child in the single shared grid cell (row 1, column 1) so the success message and the correction OVERLAP in one slot. The slot then sizes to the taller of them, and showing one in place of the other moves nothing - the whole point of the no-shift feedback slot.";
  html_style_set(cell, "grid-area", "1 / 1");
}
