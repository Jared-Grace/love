import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npc_phase_get } from "./app_g_npc_phase_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_render } from "./app_g_view_render.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { g_character_face_set } from "./g_character_face_set.mjs";
export async function app_g_click_npc(div_map, npcs_matched) {
  let npc = list_single(npcs_matched);
  let x = property_get(npc, "x");
  let y = property_get(npc, "y");
  let player = await app_g_player_get();
  let direction = g_direction(npc, player);
  g_character_face_set(npc, direction);
  let phase = app_g_npc_phase_get(player);
  await app_g_view_set({
    kind: app_g_view_kind_npc(),
    x,
    y,
    phase,
  });
  await app_g_view_render(div_map);
}
