import { arguments_assert } from "./arguments_assert.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { bless_camera_close_factor } from "./bless_camera_close_factor.mjs";
import { multiply } from "./multiply.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bless_camera_map_get } from "./bless_camera_map_get.mjs";
import { bless_camera_glide } from "./bless_camera_glide.mjs";
export async function bless_camera_close(div_map, player_img_c, focus) {
  arguments_assert(arguments, 3);
  ("Brings the camera in close on one square and stays there, so that something small enough");
  ("to be missed at playing distance can be watched happening. Returns once it has arrived.");
  ("Something that changes a person rather than the street is invisible at the distance this");
  ("game is played at. A head turning to look up the road, a player standing a little taller");
  ("than she did a moment ago - both are a few pixels of a figure the height of a thumbnail,");
  ("and a player who is not already looking for them will never know they happened. Moving");
  ("the camera is what says LOOK AT THIS, and it says it about whatever is in the middle.");
  ("How close is asked from the size the map is at NOW rather than from the size the game");
  ("plays at. The two are usually the same and are not always - a camera already pulled back");
  ("over a crowd would be thrown past the ordinary distance instead of leaning in from where");
  ("the player is actually looking.");
  ("The way back out is a separate call on purpose, because how long to stay is the caller's");
  ("question and never this one's. A wait at a kerb lasts as long as the traffic does.");
  let tile_now = html_element_width(player_img_c);
  let factor = bless_camera_close_factor();
  let near = multiply(tile_now, factor);
  let size = text_combine_multiple([near, "px"]);
  let container_map = bless_camera_map_get(div_map);
  await bless_camera_glide(container_map, div_map, player_img_c, size, focus);
}
