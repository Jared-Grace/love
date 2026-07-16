import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { html_remove } from "./html_remove.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export async function app_g_view_render_opener(div_map) {
  let player = await app_g_player_get();
  let name_player = property_get(player, "name");
  let greeting = g_greeting(false, name_player);
  let npcs = await app_g_npcs_get();
  let npc = list_random_item(npcs);
  let overlay = app_g_overlay(div_map);
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_npc_says(npc, overlay, greeting);
  let choices = app_g_container_player(overlay);
  function stub() {}
  app_g_button_green(choices, "Share the gospel", stub);
  app_g_button_green(choices, "How are you?", stub);
  app_g_button_green(choices, "What do you believe?", stub);
  let pray = text_combine(emoji_pray(), " Pray for discernment");
  app_g_button_green(choices, pray, stub);
  app_g_button_conversation_end(overlay, close);
}
