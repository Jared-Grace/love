import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { g_coordinates_part_way } from "./g_coordinates_part_way.mjs";
import { html_scroll_center_target } from "./html_scroll_center_target.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_camera_glide_frames_draw(
  value,
  {
    container_map,
    variable,
    focus,
    player_img_c,
    container,
    container_e,
    centered,
    ease,
  },
) {
  arguments_assert(arguments, 2);
  ("One frame of a camera journey: the squares are drawn at the size this frame calls for,");
  ("and the box is moved to hold the point this frame is looking at in the middle.");
  ("BOTH ends of the journey move on the same eased fraction. The size walks from the size");
  ("it started at to the size it is going to, and the point being held in the middle walks");
  ("from wherever the camera was standing to the square it was sent to. Only the size used");
  ("to move: the middle was set to the destination square on every frame, first one");
  ("included, so the entire pan across the street happened in a single frame and the zoom");
  ("then played out over a camera that had already arrived. A player who prayed over a");
  ("family from a pulled-back view saw the screen snap onto the house and only then zoom in,");
  ("which reads as a cut followed by a move rather than as one journey.");
  ("The point aimed at is a fraction of a square rather than a square, which is the whole of");
  ("what makes the pan smooth. Rounded to squares the camera would tick across the street a");
  ("square at a time.");
  ("The size is written FIRST and the standing place worked out afterwards, in that order,");
  ("because where the box has to stand is a sum about how big a square is drawn. Asked");
  ("before the size is written it answers for the previous frame, and the picture slides");
  ("half a frame behind the zoom the whole way.");
  let size = text_combine_multiple([value, "px"]);
  html_style_variable_set(container_map, variable, size);
  let aim = g_coordinates_part_way(centered, focus, ease);
  let target = html_scroll_center_target(aim, player_img_c, container);
  container_e.scrollLeft = property_get(target, "left");
  container_e.scrollTop = property_get(target, "top");
}
