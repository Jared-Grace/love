import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { each } from "./each.mjs";
import { html_on } from "./html_on.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
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
  function stub() {}
  let christian = property_get(npc, "christian");
  if (not(christian)) {
    let choices = app_g_container_player(overlay);
    app_g_p_text(choices, "What would you like to say?");
    let gospel_b = app_g_button_green(
      choices,
      "Tell them that Jesus died, was buried and rose to life",
      npc_gospel,
    );
    let how_b = app_g_button_green(choices, "How are you?", stub);
    let believe_b = app_g_button_green(choices, "What do you believe?", stub);
    let openers = [gospel_b, how_b, believe_b];
    function disable(b) {
      html_style_assign(b, {
        opacity: "0.5",
        "pointer-events": "none",
      });
    }
    function enable(b) {
      html_style_assign(b, {
        opacity: "1",
        "pointer-events": "auto",
      });
    }
    each(openers, disable);
    let correct = list_random_item(openers);
    function on_reveal() {
      each(openers, enable);
    }
    function on_pray() {
      disable(pray_b);
      let delay = list_random_item(["1s", "2s", "3s", "4s"]);
      let animation = text_combine_multiple([
        "correctPulse 1s ",
        delay,
        " infinite alternate",
      ]);
      html_on(correct, "animationstart", on_reveal);
      html_style_set(correct, "animation", animation);
    }
    let pray = text_combine(
      emoji_pray(),
      " Pray to God for discernment for what to say",
    );
    let pray_b = app_g_button_green(choices, pray, on_pray);
  }
  app_g_button_conversation_end(overlay, overlay_close);
}
