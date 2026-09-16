import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_genders_without_img } from "./g_genders_without_img.mjs";
import { list_size } from "./list_size.mjs";
import { bless_person_new } from "./bless_person_new.mjs";
import { property_set } from "./property_set.mjs";
import { set_new } from "./set_new.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { set_add } from "./set_add.mjs";
import { each } from "./each.mjs";
import { g_npc_id } from "./g_npc_id.mjs";
import { g_coordinates_land_reachable_get } from "./g_coordinates_land_reachable_get.mjs";
import { bless_people_place } from "./bless_people_place.mjs";
import { g_npc_id_ensure } from "./g_npc_id_ensure.mjs";
import { g_character_img } from "./g_character_img.mjs";
import { app_shared_game_npc_img_set } from "./app_shared_game_npc_img_set.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
import { list_add } from "./list_add.mjs";
import { bless_person_walk } from "./bless_person_walk.mjs";
export function bless_person_replace(world, div_map, neighbour, blocked) {
  arguments_assert(arguments, 4);
  ("Somebody new joins the street in the place of somebody who has left it, so the crowd stays the size it was made.");
  ("They move in beside the neighbour they are handed - the same address, the same home, the same stretch of street - and are set down near that door. The caller chooses the neighbour: somebody who has left is the wrong one to copy when what emptied the street is still standing there, because every newcomer would walk straight back into it. Who they look like, how fast they walk and whether they are out walking at all are their own, made fresh.");
  ("They are kept off every square somebody is standing on, every square named in the blocked list, and every square that is already somebody's id. An id is the square a person first stood on and it is what their picture is filed under, so a newcomer set down on a square an older person started from would be handed that person's picture.");
  ("They fade in rather than appear, and start walking straight away like everybody else.");
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let coordinates = property_get(world, "coordinates");
  let player_img = property_get(player, "img");
  let genders = g_genders_without_img(player_img);
  let index = list_size(npcs);
  let person = bless_person_new(index, genders);
  let places = property_get(neighbour, "places");
  property_set(person, "places", places);
  let home = property_get(neighbour, "home");
  property_set(person, "home", home);
  let roam = property_get(neighbour, "roam");
  property_set(person, "roam", roam);
  let taken = set_new();
  let key = g_coordinates_key(player);
  set_add(taken, key);
  function tile_take(tile) {
    let tile_key = g_coordinates_key(tile);
    set_add(taken, tile_key);
  }
  each(blocked, tile_take);
  function npc_take(npc) {
    tile_take(npc);
    let id = g_npc_id(npc);
    set_add(taken, id);
  }
  each(npcs, npc_take);
  let land = g_coordinates_land_reachable_get(coordinates);
  ("A newcomer joins the street on the PAVEMENT, never in the road, for the same reason");
  ("nobody else may be set down there: the ring around their door reaches well past the kerb,");
  ("and once somebody is standing on the road they are allowed to go on walking along it.");
  let roads = property_get(world, "roads");
  let footway = bless_coordinates_footway(land, roads);
  bless_people_place([person], footway, taken);
  g_npc_id_ensure(person);
  let ci = g_character_img(div_map, person);
  app_shared_game_npc_img_set(person, ci);
  html_animate_start(
    ci,
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 900,
      easing: "ease-out",
    },
  );
  list_add(npcs, person);
  bless_person_walk(world, person);
  return person;
}
