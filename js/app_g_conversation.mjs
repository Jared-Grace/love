import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_conversation_day_fraction } from "./app_g_conversation_day_fraction.mjs";
import { g_day_clock } from "./g_day_clock.mjs";
import { g_clock_label } from "./g_clock_label.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { app_g_toast } from "./app_g_toast.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { app_g_conversation_key } from "./app_g_conversation_key.mjs";
import { app_g_npc_typing } from "./app_g_npc_typing.mjs";
import { g_boundary_acknowledge } from "./g_boundary_acknowledge.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_day_talkable_is } from "./app_g_day_talkable_is.mjs";
import { app_g_day_blocked_is } from "./app_g_day_blocked_is.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
import { g_busy } from "./g_busy.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_turn_quiz_once } from "./app_g_turn_quiz_once.mjs";
import { app_g_pray_turn } from "./app_g_pray_turn.mjs";
import { app_g_doxology } from "./app_g_doxology.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
import { noop } from "./noop.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { g_conversation_generate } from "./g_conversation_generate.mjs";
import { g_anything_else } from "./g_anything_else.mjs";
import { g_response } from "./g_response.mjs";
import { app_g_sky_reset } from "./app_g_sky_reset.mjs";
import { app_g_sky_to } from "./app_g_sky_to.mjs";
import { app_g_conversation_sky_target } from "./app_g_conversation_sky_target.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
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
  let talkable = app_g_day_talkable_is(npc);
  if (not(talkable)) {
    let npc_says5 = g_busy();
    app_g_npc_says(npc, overlay, npc_says5);
    app_g_button_conversation_end(overlay, overlay_close);
    return;
  }
  if (app_g_day_blocked_is(npc)) {
    await overlay_close();
    app_g_discern_prevented_overlay(5000);
    return;
  }
  let player = await app_g_player_get();
  property_set(player, "conversed", true);
  let property_name = app_g_conversation_key();
  property_set(prayer, property_name, false);
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
  let property_name2 = app_g_conversation_key();
  let has = property_exists(npc, property_name2);
  if (not(has)) {
    let value = g_conversation_generate();
    let property_name3 = app_g_conversation_key();
    property_set(npc, property_name3, value);
  }
  let property_name4 = app_g_conversation_key();
  let conversation = property_get(npc, property_name4);
  let turns = property_get(conversation, "turns");
  let converts = property_get(conversation, "converts");
  let remaining = list_copy(turns);
  let prayed = {
    done: false,
  };
  let greeted = {
    done: false,
  };
  function present(t) {
    let neq3 = not_equal(t, null);
    return neq3;
  }
  let prayer_texts_all = list_map_property(turns, "prayer_text");
  let some_prayers = list_filter(prayer_texts_all, present);
  let prayer_parts = 4;
  let some_count = list_size(some_prayers);
  if (positive_is(some_count)) {
    prayer_parts = some_count;
  }
  let right = list_size(turns);
  let left3 = multiply(2, right);
  let left6 = add(left3, prayer_parts);
  let steps_total = add(left6, 2);
  let steps = {
    done: 0,
  };
  async function advance() {
    "one advancing step of the conversation moves the day forward: every forward choice — each opener chosen, each objection answered, choosing to pray, each prayer prayed, the final goodbye — ticks the shared step counter and drifts the sky to steps.done / steps_total of this conversation's slice, so the whole minimum path (not just the gospel turns) spans the slice and the goodbye lands at its end. wrong openers do NOT tick — guessing costs no daylight, so discernment stays the fast path.";
    steps.done = add(steps.done, 1);
    let fraction = divide(steps.done, steps_total);
    let target = app_g_conversation_sky_target(fraction);
    await app_g_sky_to(target);
    let toast_state = app_g_day_state();
    let show_toast = property_get(toast_state, "sky_toast");
    if (show_toast) {
      let day_fraction = app_g_conversation_day_fraction(fraction);
      let clock = g_day_clock(day_fraction);
      let label = g_clock_label(clock);
      let r = emoji_clock();
      let text = text_combine_multiple([r, " ", label]);
      app_g_toast(text, 1400);
    }
  }
  function label_for(turn) {
    let kind = property_get(turn, "kind");
    let v = emoji_cross();
    let v2 = emoji_rock();
    let v3 = emoji_sunrise();
    let left = emoji_smile();
    let left2 = emoji_thinking();
    let labels = {
      gospel_share_objection: text_combine_multiple([
        "Tell them that Jesus died ",
        v,
        ", was buried ",
        v2,
        " and rose to life ",
        v3,
      ]),
      how_r_u: text_combine(left, " How are you?"),
      believe: text_combine(left2, " What do you believe?"),
    };
    let label = property_get(labels, kind);
    return label;
  }
  async function close_now() {
    if (converts) {
      if (prayed.done) {
        property_set(npc, "christian", true);
        g_icon_cross(div_map, npc);
      }
    }
    await app_g_sky_snap();
    overlay_close();
  }
  async function goodbye() {
    "the final parting after the prayer is itself an advancing step — it ticks the day to its close (dusk) before snapping shut, so 'saying goodbye' spends the last of the slice rather than closing at whatever time the prayer left.";
    await advance();
    await close_now();
  }
  function render_farewell() {
    ("the player ends an unbeliever conversation before it completes but after engaging at least one gospel point: the seed is planted, so the NPC's parting words REFLECT rather than convert - ",
      g_response.name,
      " 'ponder' ('you've given me a lot to think about'), the same warm structured grammar the natural close uses. one more warm goodbye actually closes.");
    html_clear(overlay);
    let npc_says4 = g_response("ponder");
    app_g_npc_says(npc, overlay, npc_says4);
    app_g_button_conversation_end(overlay, close_now);
  }
  async function leave() {
    let i = list_size(remaining);
    let openers_remain = positive_is(i);
    if (not(openers_remain)) {
      if (not(prayed.done)) {
        let color = app_shared_color_gold_text();
        let message =
          "Before you go, the Holy Spirit prompts you to pray for this person.";
        let emoji_text = emoji_dove();
        app_g_message_overlay(emoji_text, message, color, 4500, noop);
        return;
      }
    }
    if (openers_remain) {
      let left4 = list_size(turns);
      let right3 = list_size(remaining);
      let done_count = subtract(left4, right3);
      if (positive_is(done_count)) {
        render_farewell();
        return;
      }
    }
    await close_now();
  }
  function run_turn(turn) {
    html_clear(overlay);
    let discern = {
      prayed: false,
    };
    function keep(t) {
      let neq = not_equal(t, turn);
      return neq;
    }
    async function on_correct() {
      remaining = list_filter(remaining, keep);
      await advance();
      render();
    }
    let concern = property_get(turn, "concern");
    let correct2 = property_get(turn, "correct");
    let wrong = property_get(turn, "wrong");
    app_g_turn_quiz_once(
      overlay,
      npc,
      concern,
      correct2,
      wrong,
      on_correct,
      discern,
    );
    app_g_button_conversation_end(overlay, leave);
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
  function render_boundary(turn) {
    "a wrong opener is a BOUNDARY, not a retry: clear to a clean screen where the NPC HESITATES — a pulsing typing-dots bubble for a BEAT (setTimeout), so the wait reads as the person gathering a kind way to say no, not a frozen screen — then they gently state the boundary and just two gracious replies appear: a humble acknowledgement that returns to the openers, or ending the conversation. the beat plus the re-randomized openers make guessing slower than praying for discernment, so prayer becomes the best path";
    html_clear(overlay);
    app_g_npc_typing(npc, overlay);
    function reveal() {
      html_clear(overlay);
      let topic2 = topic_for(turn);
      let message = g_boundary(meet, topic2);
      app_g_npc_says(npc, overlay, message);
      let container = app_g_container_player(overlay);
      app_g_p_text(container, "What would you like to say?");
      let text = g_boundary_acknowledge();
      app_g_button_green(container, text, render);
      app_g_button_conversation_end(container, leave);
    }
    let delay = list_random_item([2500, 3000, 3500]);
    setTimeout(reveal, delay);
  }
  function render_openers() {
    let intro = greeting;
    if (greeted.done) {
      intro = g_anything_else();
    }
    greeted.done = true;
    app_g_npc_says(npc, overlay, intro);
    let discern = {
      prayed: false,
    };
    let correct_turn = list_random_item(remaining);
    function choice_of(turn) {
      let is_correct = equal(turn, correct_turn);
      async function on_click() {
        if (not(is_correct)) {
          if (app_g_discern_prevent(discern)) {
            return;
          }
          render_boundary(turn);
          return;
        }
        await advance();
        run_turn(turn);
      }
      let choice = {
        label: label_for(turn),
        on_click,
        correct: is_correct,
      };
      return choice;
    }
    let choices = list_map(remaining, choice_of);
    let container = app_g_turn_menu(
      overlay,
      "What would you like to say?",
      choices,
      discern,
    );
    app_g_button_conversation_end(container, leave);
  }
  function render_pray() {
    let npc_says = g_anything_else();
    app_g_npc_says(npc, overlay, npc_says);
    let container = app_g_container_player(overlay);
    app_g_p_text(container, "What do you want to do?");
    async function pray() {
      await advance();
      function on_part() {
        advance();
      }
      function on_prayed() {
        prayed.done = true;
        render();
      }
      app_g_pray_turn(some_prayers, on_part, on_prayed);
    }
    let left5 = emoji_pray();
    let text2 = text_combine(left5, " Pray");
    app_g_button_green(container, text2, pray);
  }
  function render_close() {
    if (converts) {
      let npc_says2 = app_g_doxology();
      app_g_npc_says(npc, overlay, npc_says2);
    } else {
      let npc_says3 = g_response("ponder");
      app_g_npc_says(npc, overlay, npc_says3);
    }
  }
  function render() {
    html_clear(overlay);
    let i2 = list_size(remaining);
    let has_openers = positive_is(i2);
    if (has_openers) {
      render_openers();
    } else if (not(prayed.done)) {
      render_pray();
      app_g_button_conversation_end(overlay, leave);
    } else {
      render_close();
      app_g_button_conversation_end(overlay, goodbye);
    }
  }
  await app_g_sky_reset();
  render();
}
