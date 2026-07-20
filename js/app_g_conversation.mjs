import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_turn_quiz_once } from "./app_g_turn_quiz_once.mjs";
import { app_g_pray_turn } from "./app_g_pray_turn.mjs";
import { app_g_doxology } from "./app_g_doxology.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { g_conversation_generate } from "./g_conversation_generate.mjs";
import { g_anything_else } from "./g_anything_else.mjs";
import { g_response } from "./g_response.mjs";
import { app_g_time_advance } from "./app_g_time_advance.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { positive_is } from "./positive_is.mjs";
import { app_g_turn_menu } from "./app_g_turn_menu.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { g_boundary } from "./g_boundary.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { html_div } from "./html_div.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_rock } from "./emoji_rock.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_thinking } from "./emoji_thinking.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
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
  let greeting = g_greeting(meet, name_player);
  let christian = property_get(npc, "christian");
  if (christian) {
    app_g_npc_says(npc, overlay, greeting);
    app_g_button_conversation_end(overlay, overlay_close);
    return;
  }
  let has = property_exists(npc, "conversation");
  if (not(has)) {
    property_set(npc, "conversation", g_conversation_generate());
  }
  let conversation = property_get(npc, "conversation");
  let turns = property_get(conversation, "turns");
  let converts = property_get(conversation, "converts");
  let remaining = list_copy(turns);
  let prayed = { done: false };
  function label_for(turn) {
    let kind = property_get(turn, "kind");
    let labels = {
      gospel_share_objection: text_combine_multiple([
        "Tell them that Jesus died ",
        emoji_cross(),
        ", was buried ",
        emoji_rock(),
        " and rose to life ",
        emoji_sunrise(),
      ]),
      how_r_u: text_combine(emoji_smile(), " How are you?"),
      believe: text_combine(emoji_thinking(), " What do you believe?"),
    };
    let label = property_get(labels, kind);
    return label;
  }
  function end_button() {
    function on_end() {
      let openers_remain = positive_is(list_size(remaining));
      if (not(openers_remain)) {
        if (not(prayed.done)) {
          app_g_discern_prevented_overlay(5000);
          return;
        }
      }
      if (converts) {
        if (prayed.done) {
          property_set(npc, "christian", true);
          g_icon_cross(div_map, npc);
        }
      }
      overlay_close();
    }
    app_g_button_conversation_end(overlay, on_end);
  }
  function run_turn(turn) {
    html_clear(overlay);
    let discern = { prayed: false };
    function keep(t) {
      return t !== turn;
    }
    async function on_correct() {
      await app_g_time_advance();
      remaining = list_filter(remaining, keep);
      render();
    }
    app_g_turn_quiz_once(
      overlay,
      npc,
      property_get(turn, "concern"),
      property_get(turn, "correct"),
      property_get(turn, "wrong"),
      on_correct,
      discern,
    );
  }
  function topic_for(turn) {
    let kind = property_get(turn, "kind");
    let topics = {
      gospel_share_objection: "faith",
      how_r_u: "how I'm doing",
      believe: "what I believe",
    };
    let topic = property_get(topics, kind);
    return topic;
  }
  function render_openers() {
    let says_div = html_div(overlay);
    function say(text) {
      html_clear(says_div);
      app_g_npc_says(npc, says_div, text);
    }
    let first = list_size(remaining) === list_size(turns);
    let intro = greeting;
    if (not(first)) {
      intro = g_anything_else();
    }
    say(intro);
    let discern = { prayed: false };
    let correct_turn = list_random_item(remaining);
    function choice_of(turn) {
      let is_correct = turn === correct_turn;
      function on_click() {
        if (not(is_correct)) {
          if (app_g_discern_prevent(discern)) {
            return;
          }
          say(g_boundary(meet, topic_for(turn)));
          return;
        }
        run_turn(turn);
      }
      let choice = { label: label_for(turn), on_click, correct: is_correct };
      return choice;
    }
    let choices = list_map(remaining, choice_of);
    app_g_turn_menu(overlay, "What would you like to say?", choices, discern);
  }
  function render_pray() {
    app_g_npc_says(npc, overlay, greeting);
    let container = app_g_container_player(overlay);
    app_g_p_text(container, "What do you want to do?");
    function pray() {
      let prayer_texts = list_map_property(turns, "prayer_text");
      function present(t) {
        return t !== null;
      }
      let some = list_filter(prayer_texts, present);
      function on_prayed() {
        prayed.done = true;
        render();
      }
      app_g_pray_turn(some, on_prayed);
    }
    app_g_button_green(container, text_combine(emoji_pray(), " Pray"), pray);
  }
  function render_close() {
    if (converts) {
      app_g_npc_says(npc, overlay, app_g_doxology());
    } else {
      app_g_npc_says(npc, overlay, g_response("ponder"));
    }
  }
  function render() {
    html_clear(overlay);
    let has_openers = positive_is(list_size(remaining));
    if (has_openers) {
      render_openers();
    } else if (not(prayed.done)) {
      render_pray();
    } else {
      render_close();
    }
    end_button();
  }
  render();
}
