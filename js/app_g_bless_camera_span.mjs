import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_bless_camera_glide } from "./app_g_bless_camera_glide.mjs";
export async function app_g_bless_camera_span(
  container_map,
  div_map,
  player_img_c,
  span,
  focus,
) {
  arguments_assert(arguments, 5);
  ("Takes the camera to one square of the map and, on the way, pulls back far enough that a");
  ("patch this many squares across fits on the screen. It stays where it is when what has");
  ("to fit already does, and returns once the camera has arrived.");
  ("Pulling back and travelling are asked for together because they are one movement to");
  ("watch. Asked separately they were two, and the join was the thing a player noticed: the");
  ("street changed size in a single frame and then slid.");
  ("Only ever backwards, never forwards. Something worth showing that is wider than the");
  ("screen is shown badly whatever else is done about it, so there the pull-back is the only");
  ("answer; but a thing that already fits gains nothing from being pushed closer, and a");
  ("camera that moved in as well would change how big the street looks after every prayer.");
  ("The player would be reading a different map each time they looked up.");
  ("A few squares of room are added on top of what has to fit, because a face lit exactly at");
  ("the edge of the screen is a face half of which is off it. The light around them wants");
  ("room too, and it is the light that has to be seen.");
  ("How far back it goes is measured from what is actually on the screen rather than worked");
  ("out from the window: the width of a square as it is currently drawn, and the width of the");
  ("box that scrolls. That box is not the window - it can have room around the map inside it");
  ("- and squares can already have been shrunk on a narrow phone. Both are read rather than");
  ("assumed, so this is right on a phone and on a desktop without knowing which it is on.");
  ("When nothing has to be pulled back it asks for the ordinary playing size, which is the");
  ("size the map is already at, so the journey is a plain scroll and the squares are never");
  ("touched. Saying the size out loud in both cases rather than branching keeps one road");
  ("through here, and the travelling knows how to notice a size that is not moving.");
  ("A pull-back writes a plain number of pixels, which is the one thing this does that the");
  ("game does not: normally the size is written as a sum the browser redoes whenever the");
  ("window changes. So the map stops answering to a window being resized while this is in");
  ("force, which is why what puts it in force is also responsible for putting it back.");
  let container = app_shared_game_div_map_container_get(div_map);
  let container_e = html_component_element_get(container);
  let rect = html_bounding_client_rect(player_img_c);
  let tile_now = property_get(rect, "width");
  let across = span + 4;
  let room = divide(container_e.clientWidth, across);
  let wider = less_than(room, tile_now);
  let size = app_g_bless_tile_size();
  if (wider) {
    size = text_combine_multiple([room, "px"]);
  }
  await app_g_bless_camera_glide(
    container_map,
    div_map,
    player_img_c,
    size,
    focus,
  );
}
