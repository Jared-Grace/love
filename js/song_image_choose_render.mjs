import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_nav_column } from "./song_image_nav_column.mjs";
import { song_image_frame_column } from "./song_image_frame_column.mjs";
import { song_image_candidate_column } from "./song_image_candidate_column.mjs";
export function song_image_choose_render(root, state, on_change) {
  "draw the whole picker as three columns - which couplet, how the picture reads in frame, which candidates exist - so the eye moves left to right once per decision";
  let row = html_div(root);
  html_style_set(row, "display", "flex");
  html_style_set(row, "gap", "22px");
  html_style_set(row, "align-items", "flex-start");
  html_style_set(row, "flex-wrap", "wrap");
  song_image_nav_column(row, state, on_change);
  song_image_frame_column(row, state, on_change);
  song_image_candidate_column(row, state, on_change);
}
