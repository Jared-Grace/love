import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_map_generate } from "./app_g_map_generate.mjs";
import { g_coordinates } from "./g_coordinates.mjs";
import { g_coordinates_land_reachable_get } from "./g_coordinates_land_reachable_get.mjs";
import { g_player_img_get } from "./g_player_img_get.mjs";
import { g_player_initialize } from "./g_player_initialize.mjs";
import { app_g_bless_people } from "./app_g_bless_people.mjs";
import { app_g_bless_world } from "./app_g_bless_world.mjs";
export function app_g_bless_world_new() {
  arguments_assert(arguments, 0);
  ("A fresh world to walk about in - ground, a player standing on it, and a crowd.");
  ("Every step of it is the gospel game's own generator. The ground it makes, the way it");
  ("works out which land is actually reachable, and the way it places somebody on it are");
  ("not opinions about that game; they are what a walkable world is. Writing a second set");
  ("would have given this game a world that walked slightly differently, and every later fix");
  ("to walking would then have to be made twice.");
  ("Only the crowd is this game's own, because only the crowd differs: those people are");
  ("here to be seen and prayed for, not to be talked to.");
  ("The land list is consumed as it is handed out - the player takes a tile off it and the");
  ("crowd takes the rest they need - so nobody is ever placed on top of anybody else.");
  let rows = app_g_map_generate();
  let coordinates = g_coordinates(rows);
  let coordinates_land = g_coordinates_land_reachable_get(coordinates);
  let player_img = g_player_img_get();
  let player = g_player_initialize(player_img, coordinates_land);
  let npcs = app_g_bless_people(player_img, coordinates_land);
  let world = app_g_bless_world(rows, coordinates, player, npcs);
  return world;
}
