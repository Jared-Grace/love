import { html_element_width } from "./html_element_width.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { app_g_bless_camera_still_start } from "./app_g_bless_camera_still_start.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { equal } from "./equal.mjs";
import { app_g_bless_camera_still_end } from "./app_g_bless_camera_still_end.mjs";
import { html_scroll_center_coordinates } from "./html_scroll_center_coordinates.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_scroll_animate_start } from "./html_scroll_animate_start.mjs";
import { app_g_bless_camera_glide_frames } from "./app_g_bless_camera_glide_frames.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { html_scroll_center_target } from "./html_scroll_center_target.mjs";
export async function app_g_bless_camera_glide(
  container_map,
  div_map,
  player_img_c,
  size,
  focus,
) {
  arguments_assert(arguments, 5);
  ("Travels the camera to a new square size while keeping one square in the middle of the");
  ("screen the whole way, and returns once it has arrived.");
  ("Zoom and pan are one move here rather than two. They were two, and the seam showed: the");
  ("size jumped in a single frame and the scroll then slid smoothly to somewhere the map no");
  ("longer was, so a player watching a household get its prayer saw the street snap and");
  ("then drift. Where the box must stand to hold a square in the middle is a sum ABOUT the");
  ("square size, so the two cannot be run side by side and be right - one has to be worked");
  ("out from the other, every frame.");
  ("How far to go is measured rather than worked out. The size wanted may be written as a");
  ("sum the browser does - the ordinary playing size is - so the only honest way to learn");
  ("what it comes to is to write it, let the page lay itself out, and read a square back.");
  ("The old size is then written again straight away, and neither of those two states is");
  ("ever seen: a browser paints once, after all of this has run, so what it paints is the");
  ("first frame of the journey.");
  ("A journey to the size the map is already at is not a journey. There the squares are");
  ("left alone and it is an ordinary scroll, which matters for more than tidiness: holding");
  ("everything still is what a moving size needs, and it would also hold still every light");
  ("this game celebrates a prayer with. A prayer over one person moves the camera and never");
  ("resizes it, and its light has to be free to open while the camera travels.");
  ("The journey claims the same token an ordinary scroll claims, so the two can overtake");
  ("each other in either order. Without that a camera still travelling when the next prayer");
  ("scrolled somewhere else would fight it for the rest of its journey.");
  ("The size wanted is written once more at the end, as it was given rather than as the");
  ("number it came to. The ordinary playing size is a sum the browser redoes whenever the");
  ("window changes, and a map left holding the plain number that sum happened to come to");
  ("would stop answering to the window being turned.");
  let container = app_shared_game_div_map_container_get(div_map);
  let container_e = html_component_element_get(container);
  let variable = g_img_square_size_variable();
  app_g_bless_camera_still_start(container_map);
  let from = html_element_width(player_img_c);
  html_style_variable_set(container_map, variable, size);
  html_reflow_force(div_map);
  let to = html_element_width(player_img_c);
  let same = equal(from, to);
  if (same) {
    app_g_bless_camera_still_end(container_map);
    await html_scroll_center_coordinates(focus, player_img_c, container);
    return;
  }
  let back = text_combine_multiple([from, "px"]);
  html_style_variable_set(container_map, variable, back);
  html_reflow_force(div_map);
  let claim = html_scroll_animate_start(container_e);
  let token = property_get(claim, "token");
  let animate = app_g_bless_camera_glide_frames(
    container_map,
    player_img_c,
    container,
    focus,
    variable,
    from,
    to,
    token,
  );
  let promise = new Promise(animate);
  await promise;
  html_style_variable_set(container_map, variable, size);
  html_reflow_force(div_map);
  ("The last placing is skipped when something else has taken the camera over. It would be");
  ("one frame of this journey's destination in the middle of somebody else's, and the map");
  ("belongs to whoever claimed it last.");
  let taken = not_equal(container_e.scroll_animation_token, token);
  if (not(taken)) {
    let target = html_scroll_center_target(focus, player_img_c, container);
    container_e.scrollLeft = property_get(target, "left");
    container_e.scrollTop = property_get(target, "top");
  }
  app_g_bless_camera_still_end(container_map);
}
