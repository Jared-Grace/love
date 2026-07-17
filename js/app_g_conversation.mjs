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
import { each_index } from "./each_index.mjs";
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
import { g_z } from "./g_z.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
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
  let says_div = html_div(overlay);
  function say(text) {
    html_clear(says_div);
    app_g_npc_says(npc, says_div, text);
  }
  say(npc_says);
  async function npc_gospel() {
    await app_g_gospel(overlay, npc, overlay_close, player, div_map);
  }
  function stub() {}
  let christian = property_get(npc, "christian");
  if (not(christian)) {
    let choices = app_g_container_player(overlay);
    app_g_p_text(choices, "What would you like to say?");
    let correct_index = integer_random_0(2);
    function choice(index, action, topic) {
      function on_choice() {
        let is_correct = index === correct_index;
        if (is_correct) {
          action();
        } else {
          say(g_boundary(meet, topic));
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
      choice(0, npc_gospel, "faith"),
    );
    let how_b = app_g_button_green(
      choices,
      text_combine(emoji_smile(), " How are you?"),
      choice(1, stub, "how I'm doing"),
    );
    let believe_b = app_g_button_green(
      choices,
      text_combine(emoji_thinking(), " What do you believe?"),
      choice(2, stub, "what I believe"),
    );
    let openers = [gospel_b, how_b, believe_b];
    let correct = list_get(openers, correct_index);
    function disable_far(opener, index) {
      let far = index > correct_index + 1 || index < correct_index - 1;
      if (far) {
        html_style_assign(opener, {
          opacity: "0.5",
          "pointer-events": "none",
        });
      }
    }
    function reveal() {
      app_shared_glow_correct(correct);
      app_shared_correct_gold(correct);
      html_style_assign(correct, {
        position: "relative",
        "z-index": g_z("raised"),
      });
      each_index(openers, disable_far);
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
