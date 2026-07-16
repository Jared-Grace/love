import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { g_boundary } from "./g_boundary.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
import { list_get } from "./list_get.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_rock } from "./emoji_rock.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_thinking } from "./emoji_thinking.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_shared_glow_correct } from "./app_shared_glow_correct.mjs";
import { app_shared_correct_gold } from "./app_shared_correct_gold.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
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
    let correct_index = integer_random_0(2);
    function choice(index, action) {
      function on_choice() {
        let is_correct = index === correct_index;
        if (is_correct) {
          action();
        } else {
          app_g_npc_says(npc, overlay, g_boundary());
        }
      }
      return on_choice;
    }
    let gospel_b = app_g_button_green(
      choices,
      text_combine_multiple([
        "Tell them that Jesus died ",
        emoji_cross(),
        ", was buried ",
        emoji_rock(),
        " and rose to life ",
        emoji_sunrise(),
      ]),
      choice(0, npc_gospel),
    );
    let how_b = app_g_button_green(
      choices,
      text_combine(emoji_smile(), " How are you?"),
      choice(1, stub),
    );
    let believe_b = app_g_button_green(
      choices,
      text_combine(emoji_thinking(), " What do you believe?"),
      choice(2, stub),
    );
    let correct = list_get([gospel_b, how_b, believe_b], correct_index);
    function reveal() {
      app_shared_glow_correct(correct);
      app_shared_correct_gold(correct);
    }
    function on_pray() {
      html_style_assign(pray_b, {
        opacity: "0.5",
        "pointer-events": "none",
      });
      let delay = list_random_item([1000, 2000, 3000, 4000]);
      setTimeout(reveal, delay);
    }
    let pray = text_combine(
      emoji_pray(),
      " Pray to God for discernment for what to say",
    );
    let pray_b = app_g_button_green(choices, pray, on_pray);
  }
  app_g_button_conversation_end(overlay, overlay_close);
}
