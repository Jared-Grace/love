import { app_g_view_npc } from "./app_g_view_npc.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npc_phase_get } from "./app_g_npc_phase_get.mjs";
import { app_g_view_set_render } from "./app_g_view_set_render.mjs";
import { list_single } from "./list_single.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_day_convert_tap_if } from "./app_g_day_convert_tap_if.mjs";
export async function app_g_click_npc(div_map, npcs_matched, player_img_c) {
  let npc = list_single(npcs_matched);
  let converted = await app_g_day_convert_tap_if(div_map, npc);
  if (converted) {
    return;
  }
  ("a believer the player has come back for is GATHERED by the tap rather than talked to - the day is past talking with them, and the group is on its way to the water");
  let collected = await app_g_day_collect_tap_if(npc);
  if (collected) {
    return;
  }
  let player = await app_g_player_get();
  let npc_img = app_g_npc_img_get(npc);
  let direction_npc = g_direction(npc, player);
  app_g_character_face(npc, npc_img, direction_npc);
  let direction_player = g_direction(player, npc);
  app_g_character_face(player, player_img_c, direction_player);
  let phase = app_g_npc_phase_get(player);
  let view = app_g_view_npc(npc, phase);
  await app_g_view_set_render(view, div_map);
}
