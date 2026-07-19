import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_turn_menu } from "./app_g_turn_menu.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { g_boundary } from "./g_boundary.mjs";
import { app_g_how } from "./app_g_how.mjs";
import { g_response_believe } from "./g_response_believe.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
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
  function npc_how() {
    app_g_how(overlay, npc, overlay_close);
  }
  function npc_believe() {
    say(g_response_believe());
  }
  let discern = { prayed: false };
  let christian = property_get(npc, "christian");
  if (not(christian)) {
    let correct_index = integer_random_0(2);
    function choice_make(index, action, topic, label) {
      let is_correct = index === correct_index;
      function on_click() {
        if (not(is_correct) && app_g_discern_prevent(discern)) {
          return;
        }
        if (is_correct) {
          action();
        } else {
          say(g_boundary(meet, topic));
        }
      }
      return { label, on_click, correct: is_correct };
    }
    let gospel_label = text_combine_multiple([
      "Tell them that Jesus died ",
      emoji_cross(),
      ", was buried ",
      emoji_rock(),
      " and rose to life ",
      emoji_sunrise(),
    ]);
    let how_label = text_combine(emoji_smile(), " How are you?");
    let believe_label = text_combine(emoji_thinking(), " What do you believe?");
    let choices = [
      choice_make(0, npc_gospel, "faith", gospel_label),
      choice_make(1, npc_how, "how I'm doing", how_label),
      choice_make(2, npc_believe, "what I believe", believe_label),
    ];
    app_g_turn_menu(overlay, "What would you like to say?", choices, discern);
  }
  function on_end() {
    if (app_g_discern_prevent(discern)) {
      return;
    }
    overlay_close();
  }
  app_g_button_conversation_end(overlay, on_end);
}
