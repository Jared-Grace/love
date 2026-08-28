import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_scroll_center_target } from "./html_scroll_center_target.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_camera_glide_frames_draw(
  value,
  container_map,
  variable,
  focus,
  player_img_c,
  container,
  container_e,
) {
  arguments_assert(arguments, 7);
  let size = text_combine_multiple([value, "px"]);
  html_style_variable_set(container_map, variable, size);
  let target = html_scroll_center_target(focus, player_img_c, container);
  container_e.scrollLeft = property_get(target, "left");
  container_e.scrollTop = property_get(target, "top");
}
