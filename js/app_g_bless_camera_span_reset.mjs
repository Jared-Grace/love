import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
export function app_g_bless_camera_span_reset(container_map) {
  arguments_assert(arguments, 1);
  ("Puts the camera back to the distance the praying game is normally played at.");
  ("It writes the ordinary size rather than removing what was written, so the answer is the");
  ("same whether the camera was ever pulled back or not. A caller that had to know which of");
  ("those happened would be a caller keeping a second record of the camera, and two records");
  ("of one thing is the shape that drifts.");
  ("The ordinary size is asked for rather than remembered from before the pull-back. What is");
  ("wanted afterwards is where this game plays, and a size saved beforehand is only that by");
  ("accident - it would also faithfully restore a size some other pull-back had left behind.");
  ("Asking gives back a sum the browser redoes on every window change, which is what a map");
  ("that has finished celebrating and gone back to being played needs.");
  let variable = g_img_square_size_variable();
  let size = app_g_bless_tile_size();
  html_style_variable_set(container_map, variable, size);
}
