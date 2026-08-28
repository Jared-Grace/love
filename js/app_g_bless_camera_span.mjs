import { app_g_bless_camera_size_set } from "./app_g_bless_camera_size_set.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
export function app_g_bless_camera_span(
  container_map,
  div_map,
  player_img_c,
  span,
) {
  arguments_assert(arguments, 4);
  ("Pulls the camera back far enough that a patch this many squares across fits on the");
  ("screen, and leaves it alone when it already does.");
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
  ("It writes a plain number of pixels, which is the one thing this does that the game does");
  ("not: normally the size is written as a sum the browser redoes whenever the window");
  ("changes. So the map stops answering to a window being resized while this is in force,");
  ("which is why what puts it in force is also responsible for putting it back.");
  ("It is written on the box the map sits in rather than on the page, so putting it back is");
  ("writing the ordinary size over it in the same place, and nothing has to remember what");
  ("the page said before.");
  let container = app_shared_game_div_map_container_get(div_map);
  let container_e = html_component_element_get(container);
  let rect = html_bounding_client_rect(player_img_c);
  let tile_now = property_get(rect, "width");
  let across = span + 4;
  let room = divide(container_e.clientWidth, across);
  let wider = less_than(room, tile_now);
  if (wider) {
    let size = text_combine_multiple([room, "px"]);
    app_g_bless_camera_size_set(container_map, div_map, size);
  }
}
