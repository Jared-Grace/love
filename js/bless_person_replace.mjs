import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_genders_without_img } from "./g_genders_without_img.mjs";
import { list_size } from "./list_size.mjs";
import { bless_person_new } from "./bless_person_new.mjs";
import { property_set } from "./property_set.mjs";
import { set_new } from "./set_new.mjs";
import { set_add } from "./set_add.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
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
export function bless_person_replace(world, div_map, gone, blocked) {
  arguments_assert(arguments, 4);
  ("Somebody new joins the street in the place of somebody who has left it, so the crowd stays the size it was made.");
  ("They take over the one who left's address and home, so they are set down among the same neighbours and walk the same stretch of street. Who they look like, how fast they walk and whether they are out walking at all are their own, made fresh, so nobody reads them as the one who left come back.");
  ("They are kept off every square somebody is standing on, every square named in the blocked list, and every square that is already somebody's id. An id is the square a person first stood on and it is what their picture is filed under, so a newcomer set down on a square an older person started from would be handed that person's picture.");
  ("They fade in rather than appear, and start walking straight away like everybody else.");
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let coordinates = property_get(world, "coordinates");
  let player_img = property_get(player, "img");
  let genders = g_genders_without_img(player_img);
  let index = list_size(npcs);
  let person = bless_person_new(index, genders);
  let value = property_get(gone, "places");
  property_set(person, "places", value);
  let value2 = property_get(gone, "home");
  property_set(person, "home", value2);
  let value3 = property_get(gone, "roam");
  property_set(person, "roam", value3);
  let taken = set_new();
  let item = g_coordinates_key(player);
  set_add(taken, item);
  function tile_take(tile) {
    let item2 = g_coordinates_key(tile);
    set_add(taken, item2);
  }
  each(blocked, tile_take);
  function npc_take(npc) {
    tile_take(npc);
    let item3 = g_npc_id(npc);
    set_add(taken, item3);
  }
  each(npcs, npc_take);
  let land = g_coordinates_land_reachable_get(coordinates);
  bless_people_place([person], land, taken);
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
