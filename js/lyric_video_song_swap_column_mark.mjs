import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_green_chosen } from "./app_shared_color_green_chosen.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function lyric_video_song_swap_column_mark(column, chosen_is) {
  "$plain column";
  "$plain chosen_is";
  "Shows whether one picture in a row being compared is chosen: a thick green frame when it is, none when it is not.";
  "The green is asked for rather than spelled here, because a colour a person sees is named in one place for the whole of the screen; the width stands beside it because how thick the frame is belongs to this mark alone.";
  arguments_assert(arguments, 2);
  let green = app_shared_color_green_chosen();
  let frame = text_combine("4px solid ", green);
  let outline = chosen_is ? frame : "none";
  html_style_assign(column, {
    outline,
    "outline-offset": "2px",
  });
}
