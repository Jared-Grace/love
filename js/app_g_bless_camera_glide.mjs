import { html_scroll_centered_coordinates } from "./html_scroll_centered_coordinates.mjs";
import { app_g_bless_camera_people_get } from "./app_g_bless_camera_people_get.mjs";
import { app_g_bless_people_still_start } from "./app_g_bless_people_still_start.mjs";
import { app_g_bless_people_still_end } from "./app_g_bless_people_still_end.mjs";
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
  ("Travels the camera to a new square size and to a new square in the middle of the");
  ("screen, moving both of those together, and returns once it has arrived.");
  ("The pan is eased exactly as the zoom is. It was not: the square being aimed at was put");
  ("dead centre on every frame including the first, so the whole journey across the street");
  ("happened in one frame and only the size moved afterwards. A player who prayed over a");
  ("family from a pulled-back view saw the screen snap onto the house and zoom in after,");
  ("which is a cut followed by a move rather than the one journey they asked for.");
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
  ("The crowd is stopped where it stands BEFORE sliding is switched off, and that order is");
  ("the whole of it. Switching sliding off does not pause a step that is under way, it");
  ("FINISHES it: a person half way across a square arrives in one frame. Everybody walking");
  ("is half way across a square nearly all the time, so the moment a journey begins the");
  ("whole street jumps - which is what a player sees straight after praying. Written down");
  ("where they have got to first, there is no step left under way for the switch to finish.");
  ("They are asked of the map rather than handed in, so that a journey knows about the");
  ("crowd without every caller of one having to.");
  let crowd = app_g_bless_camera_people_get(container_map);
  app_g_bless_people_still_start(crowd, player_img_c);
  app_g_bless_camera_still_start(container_map);
  let from = html_element_width(player_img_c);
  html_style_variable_set(container_map, variable, size);
  html_reflow_force(div_map);
  let to = html_element_width(player_img_c);
  let same = equal(from, to);
  if (same) {
    app_g_bless_camera_still_end(container_map);
    ("Let go again at once when this turned out not to be a journey. Nothing here changes");
    ("how big a square is, so nothing was ever going to jump, and a plain scroll across a");
    ("street where everybody has stopped dead is a street that looks broken. This is the");
    ("common case - a prayer over one person moves the camera and never resizes it - so the");
    ("crowd carries on walking through almost every camera move the player ever sees.");
    app_g_bless_people_still_end(crowd);
    await html_scroll_center_coordinates(focus, player_img_c, container);
    return;
  }
  let back = text_combine_multiple([from, "px"]);
  html_style_variable_set(container_map, variable, back);
  html_reflow_force(div_map);
  ("Where the camera is standing as the journey begins is read off the box itself, and read");
  ("as a place on the grid rather than as a scroll offset. It is read here, with the old");
  ("size written back, so it is the place the player is actually looking at. Kept as an");
  ("offset it would mean somewhere else by the second frame, because the squares it counts");
  ("are about to change size underneath it.");
  let centered = html_scroll_centered_coordinates(player_img_c, container);
  let claim = html_scroll_animate_start(container_e);
  let token = property_get(claim, "token");
  let animate = app_g_bless_camera_glide_frames({
    container_map,
    player_img_c,
    container,
    focus,
    variable,
    from,
    to,
    token,
    centered,
  });
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
  ("The crowd is let go last of all, once sliding is back on. Nobody is put anywhere: each");
  ("of them is standing where their picture had got to when the journey began, and their");
  ("next step slides them on from there, so the street simply starts moving again. Let go");
  ("before sliding was restored, that next step would be placed rather than walked, which");
  ("is the very thing this pair exists to prevent.");
  app_g_bless_people_still_end(crowd);
}
