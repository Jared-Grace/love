import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { lyric_video_picture_url } from "./lyric_video_picture_url.mjs";
import { html_img } from "./html_img.mjs";
export function lyric_video_song_swap_column(row, label, path) {
  "$plain row";
  "$plain label";
  "$plain path";
  "One picture standing in a row of pictures to be compared, with the words saying which one it is above it.";
  "EVERY COLUMN TAKES AN EQUAL SHARE OF THE ROW, so the current picture and each candidate are seen at the same size, which is the only fair way to compare them.";
  arguments_assert(arguments, 3);
  let column = html_div(row);
  html_style_assign(column, {
    flex: "1 1 0",
    "min-width": "0",
  });
  app_shared_text_quiet(column, label);
  let picture = {
    path,
  };
  let url = lyric_video_picture_url(picture);
  let drawing = html_img(column, url);
  html_style_assign(drawing, {
    width: "100%",
    "margin-top": "4px",
  });
  return column;
}
