import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_g_conversation(
  prayer,
  npc,
  overlay,
  overlay_close,
  div_map,
) {
  let player = await app_g_player_get();
  property_set(player, "conversed", true);
  property_set(prayer, "conversation", false);
  let meet = property_get(npc, "meet");
  if (not(meet)) {
    property_set(npc, "meet", true);
  }
  let name_player = property_get(player, "name");
  let npc_says = g_greeting(meet, name_player);
  app_g_npc_says(npc, overlay, npc_says);
  async function npc_gospel() {
    await app_g_gospel(overlay, npc, overlay_close, player, div_map);
  }
  let choices = app_g_container_player(overlay);
  app_g_p_text(choices, "What would you like to do?");
  let name_npc = property_get(npc, "name");
  let christian = property_get(npc, "christian");
  if (not(christian)) {
    app_g_button_green(
      choices,
      text_combine_multiple([
        "Tell ",
        name_npc,
        " that Jesus died, was buried and rose to life and share the gospel!",
      ]),
      npc_gospel,
    );
  }
  app_g_button_conversation_end(choices, overlay_close);
}
