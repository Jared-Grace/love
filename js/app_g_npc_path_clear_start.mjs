import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { app_g_toast } from "./app_g_toast.mjs";
import { g_npc_path_clear_tiles } from "./g_npc_path_clear_tiles.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { g_coordinates_land_index } from "./g_coordinates_land_index.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_offset } from "./g_coordinates_offset.mjs";
import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { g_coordinates_distance_squared } from "./g_coordinates_distance_squared.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { each_index } from "./each_index.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export async function app_g_npc_path_clear_start(situation, div_map) {
  "stand the people where one named arrangement wants them, put the gold on the tile to tap, and say in one line what to watch for.";
  "It is the DOOR onto the crowd opening, never a second one of it. Nothing here moves anybody out of the player's way - it only decides who is standing where before the player taps, and everything after the tap is the game's own walk.";
  "NEARNESS is what makes it look like a place rather than a stage. Each spot is filled by whoever is nearest to it who is not already standing where they are wanted, so the people who arrive are the ones who were nearly there anyway, and the rest of the map is left as it was.";
  "The strays are then sent AWAY rather than left standing. One person who happens to be nearby is enough to give a way round where the arrangement says there is none, and then nothing parts and the screen quietly shows the wrong thing.";
  "TWO PEOPLE MAY NEVER BE SENT TO ONE TILE, and the reason is worse than an ugly picture: a person's picture and the cross over them are remembered by where that person is standing, so a second person arriving on a tile takes over the first one's drawer, and the first one afterwards drags somebody else's picture about. So whoever is already standing where they are wanted is left alone rather than moved, spots are filled only by people standing somewhere else, and every stray is sent to a tile nobody is on.";
  let g = await app_g_game_save_get();
  let player = await app_g_player_get();
  let coordinates = property_get(g, "coordinates");
  let npcs = property_get(g, "npcs");
  let land_index = g_coordinates_land_index(coordinates);
  let wanted = g_npc_path_clear_tiles(situation, player, land_index);
  let wanted_index = g_coordinates_index(wanted);
  function wanted_is(npc) {
    let key = g_coordinates_key(npc);
    let b = property_exists(wanted_index, key);
    return b;
  }
  let staying = list_filter(npcs, wanted_is);
  let staying_index = g_coordinates_index(staying);
  function empty_is(tile) {
    let key = g_coordinates_key(tile);
    let b = property_exists(staying_index, key);
    let r = not(b);
    return r;
  }
  let to_fill = list_filter(wanted, empty_is);
  function moving_is(npc) {
    let b = wanted_is(npc);
    let r = not(b);
    return r;
  }
  let moving = list_filter(npcs, moving_is);
  function nearness(npc) {
    let d = g_coordinates_distance_squared(npc, player);
    return d;
  }
  list_sort_number_mapper(moving, nearness);
  function fill(tile, index) {
    let npc = moving[index];
    let none = undefined_is(npc);
    if (none) {
      ("fewer people on the map than the arrangement asks for - stand the ones there are and leave it short, because a shape missing somebody still shows most of what it is for");
      return;
    }
    app_g_npc_move(npc, tile, 0);
  }
  each_index(to_fill, fill);
  ("near enough to matter: about ten tiles, which reaches past the furthest tile any of these arrangements names. It is a straight line rather than a walk, because what is being asked is who is close enough to be IN the picture, not who could reach it");
  let near_squared = 121;
  function stray_is(npc) {
    let d = g_coordinates_distance_squared(npc, player);
    let near = less_than(d, near_squared);
    let placed = wanted_is(npc);
    let unplaced = not(placed);
    let r = near && unplaced;
    return r;
  }
  let strays = list_filter(npcs, stray_is);
  let npc_index = g_coordinates_index(npcs);
  function far_free_is(tile) {
    let d = g_coordinates_distance_squared(tile, player);
    let far = greater_than(d, near_squared);
    let key = g_coordinates_key(tile);
    let occupied = property_exists(npc_index, key);
    let free = not(occupied);
    let r = far && free;
    return r;
  }
  let land = g_coordinates_land(coordinates);
  let away = list_filter(land, far_free_is);
  function evacuate(npc, index) {
    let tile = away[index];
    let none = undefined_is(tile);
    if (none) {
      return;
    }
    app_g_npc_move(npc, tile, 0);
  }
  each_index(strays, evacuate);
  let place = g_coordinates_tile(player);
  let tap = property_get(situation, "tap");
  let gold = g_coordinates_offset(place, tap);
  app_g_day_guide_highlight(div_map, gold);
  let what = property_get(situation, "what");
  ("the line stays up long enough to tap and watch, because what it names happens once and is over in about a second");
  app_g_toast(what, 12000);
  let filled = list_size(to_fill);
  let sent = list_size(strays);
  let r = {
    filled,
    sent,
    gold,
  };
  return r;
}
