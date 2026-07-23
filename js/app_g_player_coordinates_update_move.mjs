import { app_g_player_move } from "./app_g_player_move.mjs";
import { app_g_player_coordinates_new_get } from "./app_g_player_coordinates_new_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { app_g_map_scroll_settled } from "./app_g_map_scroll_settled.mjs";
import { app_g_sky_step_if_demo } from "./app_g_sky_step_if_demo.mjs";
import { not } from "./not.mjs";
export async function app_g_player_coordinates_update_move(
  npc_clicked,
  clicked_coordinates,
  player_img_c,
  div_map,
) {
  let coordinates_move_to = await app_g_player_coordinates_new_get(
    npc_clicked,
    clicked_coordinates,
  );
  let moved = await app_g_player_move(
    coordinates_move_to,
    player_img_c,
    div_map,
  );
  let persist_here = moved && not(npc_clicked);
  localStorage.setItem("dbg_move", "moved:" + moved + " npc:" + npc_clicked);
  if (persist_here) {
    await app_g_map_scroll_settled(div_map);
    localStorage.setItem("dbg_move2", "scroll_settled");
    let player = await app_g_player_get();
    await app_g_player_save(player);
    localStorage.setItem("dbg_move3", "player_saved");
    await app_g_sky_step_if_demo();
    localStorage.setItem("dbg_move4", "sky_step_done");
  }
}
