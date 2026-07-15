import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { app_g_conversation } from "./app_g_conversation.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_click_npc_study } from "./app_g_click_npc_study.mjs";
import { app_g_click_npc_pray } from "./app_g_click_npc_pray.mjs";
export async function app_g_click_npc(div_map, npcs_matched) {
  let player = await app_g_player_get();
  let overlay = app_g_overlay(div_map);
  async function overlay_close() {
    await app_g_player_save(player);
    html_remove(overlay);
  }
  let review = property_get(player, "review");
  let needs_study = list_empty_not_is(review);
  if (needs_study) {
    await app_g_click_npc_study(player, overlay, overlay_close, div_map);
  } else {
    let prayer = property_get(player, "prayer");
    let conversation = property_get(prayer, "conversation");
    if (not(conversation)) {
      await app_g_click_npc_pray(player, overlay, overlay_close, div_map);
    } else {
      await app_g_conversation(
        prayer,
        npcs_matched,
        overlay,
        overlay_close,
        div_map,
      );
    }
  }
}
