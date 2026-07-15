import { app_g_click_npc } from "./app_g_click_npc.mjs";
export async function app_g_click_npc_if(
  npc_clicked,
  div_map,
  npcs_matched,
  player_img_c,
) {
  if (npc_clicked) {
    await app_g_click_npc(div_map, npcs_matched, player_img_c);
  }
}
