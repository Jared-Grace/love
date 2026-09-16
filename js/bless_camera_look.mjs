import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_scroll_center_coordinates } from "./html_scroll_center_coordinates.mjs";
export async function bless_camera_look(div_map, player_img_c, at) {
  arguments_assert(arguments, 3);
  ("Slides the screen until a given square is in the middle of it, without changing how");
  ("large the squares are drawn. Returns once it has settled.");
  ("This is the camera MOVING rather than the camera travelling, and the difference is worth");
  ("the separate name. A journey that changes the size of the squares has to hold the whole");
  ("street still while it runs, or every person on it sets off walking to the place they are");
  ("already standing in - so it is an expensive thing that takes the map over. Nothing about");
  ("a plain slide moves anybody: the ground is the same size before and after, and the crowd");
  ("can go on walking through it.");
  ("So this is the one to reach for whenever the answer to where should the camera be has");
  ("changed and how close it is has not - following a look up the road, say - and it costs");
  ("almost nothing to ask for often.");
  let container = app_shared_game_div_map_container_get(div_map);
  await html_scroll_center_coordinates(at, player_img_c, container);
}
