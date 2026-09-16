import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { bless_camera_people_get } from "./bless_camera_people_get.mjs";
import { bless_people_still_start } from "./bless_people_still_start.mjs";
import { bless_camera_still_start } from "./bless_camera_still_start.mjs";
import { html_scroll_centered_coordinates } from "./html_scroll_centered_coordinates.mjs";
import { html_element_width_layout } from "./html_element_width_layout.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { equal } from "./equal.mjs";
import { bless_camera_still_end } from "./bless_camera_still_end.mjs";
import { bless_people_still_end } from "./bless_people_still_end.mjs";
import { html_scroll_center_coordinates } from "./html_scroll_center_coordinates.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_scroll_center_target } from "./html_scroll_center_target.mjs";
import { property_get } from "./property_get.mjs";
import { html_scroll_animate_start } from "./html_scroll_animate_start.mjs";
import { html_component_offset_parent_corner } from "./html_component_offset_parent_corner.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { html_component_offset_parent } from "./html_component_offset_parent.mjs";
import { bless_camera_glide_frames } from "./bless_camera_glide_frames.mjs";
import { html_scale_translate_clear } from "./html_scale_translate_clear.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export async function bless_camera_glide(
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
  ("then drift. Where the map must be drawn to hold a square in the middle is a sum ABOUT the");
  ("square size, so the two cannot be run side by side and be right - one has to be worked");
  ("out from the other, every frame.");
  ("The travelling is DRAWN rather than laid out. Giving the squares a new size makes the page");
  ("work out afresh where every square and every person on the street goes, which measured at");
  ("about thirty milliseconds on a laptop against a frame that lasts under seventeen - so the");
  ("journey could not keep up with itself and the zoom arrived in steps. The human reported it");
  ("as rocky. Drawing the same picture bigger and shifted measured at nought, because the");
  ("browser already has the picture. So the squares keep the size they started at for the");
  ("whole journey and only the drawing moves; the real size is written once, at the end.");
  ("Everything the frames need is therefore worked out HERE, while nothing is drawn over and");
  ("the page can still be asked where things are. Once a scale is drawn on the map, what the");
  ("page says about where a thing appears counts that scale, so a sum asked mid-journey would");
  ("answer about the picture instead of about the street.");
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
  let crowd = bless_camera_people_get(container_map);
  bless_people_still_start(crowd, player_img_c);
  bless_camera_still_start(container_map);
  let centered = html_scroll_centered_coordinates(player_img_c, container);
  let from = html_element_width_layout(player_img_c);
  html_style_variable_set(container_map, variable, size);
  html_reflow_force(div_map);
  let to = html_element_width_layout(player_img_c);
  let same = equal(from, to);
  if (same) {
    bless_camera_still_end(container_map);
    ("Let go again at once when this turned out not to be a journey. Nothing here changes");
    ("how big a square is, so nothing was ever going to jump, and a plain scroll across a");
    ("street where everybody has stopped dead is a street that looks broken. This is the");
    ("common case - a prayer over one person moves the camera and never resizes it - so the");
    ("crowd carries on walking through almost every camera move the player ever sees.");
    bless_people_still_end(crowd);
    await html_scroll_center_coordinates(focus, player_img_c, container);
    return;
  }
  let back = text_combine_multiple([from, "px"]);
  html_style_variable_set(container_map, variable, back);
  html_reflow_force(div_map);
  ("THE STANDING PLACE IS PUT BACK TOO, and not only the size. Measuring how far to go");
  ("writes the new size for a moment, and while it is written the map is a different size -");
  ("so a browser holding a box scrolled further along than the new map is wide pulls the");
  ("scrolling back to fit, there and then. Writing the old size again does not undo that");
  ("pull: the map grows back and the box stays where it was dragged to. Left alone, a");
  ("journey that zooms a long way out began by throwing the picture sideways, and the");
  ("further out it went the further it was thrown - which is the jump this was all meant to");
  ("remove, hiding one step upstream of the frames that were fixed.");
  ("It is put back from the place on the grid rather than from a remembered offset, so it");
  ("lands where the player was looking whatever the browser did in between.");
  let standing = html_scroll_center_target(centered, player_img_c, container);
  let scroll_left = property_get(standing, "left");
  let scroll_top = property_get(standing, "top");
  container_e.scrollLeft = scroll_left;
  container_e.scrollTop = scroll_top;
  let claim = html_scroll_animate_start(container_e);
  let token = property_get(claim, "token");
  ("That standing place is then FIXED for the whole journey, and the frames travel by drawing");
  ("the map somewhere else instead of by scrolling the box. Scrolling would be free, but");
  ("where to scroll to is a sum about how big a square is drawn, and asking it is what cost");
  ("the journey its smoothness.");
  ("Both ends of the pan are asked here, while the squares are still the size they started");
  ("at. The answer for the far end is not where the box will finally stand - the squares will");
  ("be a different size by then - but it does not need to be: the two are in proportion, so a");
  ("reach measured at the starting size and multiplied by how much bigger this frame is comes");
  ("out at the same place. That proportion is the whole reason this may be asked once.");
  ("A reach is counted from the corner the grid is drawn out of, and NOT from the corner of");
  ("the box that scrolls. A wrapper holds blank room around the grid so that an outermost");
  ("square can still be brought to the middle of the window, and that room does not grow when");
  ("the squares do - so a distance holding it inside grows by more than it should, and the map");
  ("drifts further off the further it has zoomed.");
  let arriving = html_scroll_center_target(focus, player_img_c, container);
  let corner = html_component_offset_parent_corner(player_img_c);
  let corner_left = property_get(corner, "left");
  let corner_top = property_get(corner, "top");
  let half_width = divide(container_e.clientWidth, 2);
  let half_height = divide(container_e.clientHeight, 2);
  let middle_left = add(scroll_left, half_width);
  let middle_top = add(scroll_top, half_height);
  let reach_start = {
    left: subtract(middle_left, corner_left),
    top: subtract(middle_top, corner_top),
  };
  let arriving_left = property_get(arriving, "left");
  let arriving_top = property_get(arriving, "top");
  let arriving_middle_left = add(arriving_left, half_width);
  let arriving_middle_top = add(arriving_top, half_height);
  let reach_end = {
    left: subtract(arriving_middle_left, corner_left),
    top: subtract(arriving_middle_top, corner_top),
  };
  ("The scale is drawn on the thing the squares are POSITIONED by, which is the one element");
  ("every coordinate on this map is already counted from. Drawn on the wrapper outside it the");
  ("blank room would scale too; drawn on anything inside it, only part of the street would.");
  let map_c = html_component_offset_parent(player_img_c);
  let animate = bless_camera_glide_frames({
    container,
    map_c,
    reach_start,
    reach_end,
    from,
    to,
    token,
  });
  let promise = new Promise(animate);
  await promise;
  ("The drawn-on scale comes off BEFORE the real size is written, and before anything else is");
  ("measured. Left on, the two would multiply and the map would be drawn at nearly twice the");
  ("size it just arrived at; and every sum below about where to stand would answer about the");
  ("picture rather than about the street.");
  html_scale_translate_clear(map_c);
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
  bless_camera_still_end(container_map);
  ("The crowd is let go last of all, once sliding is back on. Nobody is put anywhere: each");
  ("of them is standing where their picture had got to when the journey began, and their");
  ("next step slides them on from there, so the street simply starts moving again. Let go");
  ("before sliding was restored, that next step would be placed rather than walked, which");
  ("is the very thing this pair exists to prevent.");
  bless_people_still_end(crowd);
}
