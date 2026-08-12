import { app_g_player_beside_is } from "./app_g_player_beside_is.mjs";
import { app_g_day_water_tap_if } from "./app_g_day_water_tap_if.mjs";
import { app_g_day_travel_blocked_is } from "./app_g_day_travel_blocked_is.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_click_npc_if } from "./app_g_click_npc_if.mjs";
import { app_g_player_coordinates_update_move } from "./app_g_player_coordinates_update_move.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
export async function app_g_click_map(
  clicked_coordinates,
  player_img_c,
  div_map,
) {
  if (app_g_day_travel_blocked_is(clicked_coordinates)) {
    app_g_discern_prevented_overlay(5000);
    return;
  }
  let watered = await app_g_day_water_tap_if(
    clicked_coordinates,
    player_img_c,
    div_map,
  );
  if (watered) {
    return;
  }
  let npcs = await app_g_npcs_get();
  let npcs_matched = list_filter_object_includes(npcs, clicked_coordinates);
  let npc_clicked = list_empty_not_is(npcs_matched);
  await app_g_player_coordinates_update_move(
    npc_clicked,
    clicked_coordinates,
    player_img_c,
    div_map,
  );
  ("a tap on somebody is two things at once: walk over to them, and speak to them once you are there. the second only happens if the first did. a walk that was refused, or one that stopped short because the way was never opened, leaves the player where they were - and a conversation opened from across the room reads as talking through whoever is standing in between");
  let beside = await app_g_player_beside_is(clicked_coordinates);
  let npc_reached = npc_clicked && beside;
  await app_g_click_npc_if(npc_reached, div_map, npcs_matched, player_img_c);
}
