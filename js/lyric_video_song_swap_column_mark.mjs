import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function lyric_video_song_swap_column_mark(column, chosen_is) {
  "$plain column";
  "$plain chosen_is";
  "Shows whether one picture in a row being compared is chosen: a thick green frame when it is, none when it is not.";
  arguments_assert(arguments, 2);
  let outline = chosen_is ? "4px solid #2a7" : "none";
  html_style_assign(column, {
    outline,
    "outline-offset": "2px",
  });
}
