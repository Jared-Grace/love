import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_on } from "./html_on.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { bless_people_walk } from "./bless_people_walk.mjs";
import { bless_vehicles_drive } from "./bless_vehicles_drive.mjs";
export function bless_street_start(
  container_map,
  world,
  div_map,
  player_img_c,
  tapped,
  render,
) {
  arguments_assert(arguments, 6);
  ("A drawn street brought to life: taps are listened for, the first frame is drawn, the view goes to the player, and the crowd and the traffic start moving.");
  let player = property_get(world, "player");
  html_on(div_map, "click", tapped);
  render();
  app_shared_game_player_center(player, player_img_c, div_map);
  ("the crowd is set walking before the prayer goes up rather than after the amen, so the");
  ("world the player uncovers is one already in motion rather than one that starts when they");
  ("look at it");
  bless_people_walk(world, render);
  ("and the traffic starts with them, so the street comes to life as one street rather than");
  ("as a pavement that moves and a road that waits");
  bless_vehicles_drive(world, container_map);
}
