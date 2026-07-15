import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npc_phase_get } from "./app_g_npc_phase_get.mjs";
import { app_g_view_set_render } from "./app_g_view_set_render.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
export async function app_g_click_npc(div_map, npcs_matched) {
  let npc = list_single(npcs_matched);
  let x = property_get(npc, "x");
  let y = property_get(npc, "y");
  let player = await app_g_player_get();
  let direction = g_direction(npc, player);
  let npc_img = app_g_npc_img_get(npc);
  app_g_character_face(npc, npc_img, direction);
  let phase = app_g_npc_phase_get(player);
  await app_g_view_set_render(
    {
      kind: app_g_view_kind_npc(),
      x,
      y,
      phase,
    },
    div_map,
  );
}
