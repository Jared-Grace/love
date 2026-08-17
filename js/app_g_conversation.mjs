import { app_g_conversation_pray } from "./app_g_conversation_pray.mjs";
import { app_g_conversation_leave } from "./app_g_conversation_leave.mjs";
import { app_g_conversation_render_boundary } from "./app_g_conversation_render_boundary.mjs";
import { app_g_conversation_render_openers } from "./app_g_conversation_render_openers.mjs";
import { app_g_conversation_pray_together } from "./app_g_conversation_pray_together.mjs";
import { app_g_conversation_close_now } from "./app_g_conversation_close_now.mjs";
import { app_g_conversation_advance } from "./app_g_conversation_advance.mjs";
import { app_g_conversation_render } from "./app_g_conversation_render.mjs";
import { g_phase_time } from "./g_phase_time.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_gender_pronouns } from "./g_gender_pronouns.mjs";
import { add } from "./add.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { not_equal } from "./not_equal.mjs";
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
import { g_greeting } from "./g_greeting.mjs";
import { g_conversation_generate } from "./g_conversation_generate.mjs";
import { g_anything_else } from "./g_anything_else.mjs";
import { g_response } from "./g_response.mjs";
import { app_g_sky_reset } from "./app_g_sky_reset.mjs";
import { app_g_conversation_sky_target } from "./app_g_conversation_sky_target.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_combine } from "./text_combine.mjs";
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
  let property_name = g_conversation_key();
  property_set(prayer, property_name, false);
  let meet = property_get(npc, "meet");
  if (not(meet)) {
    property_set(npc, "meet", true);
  }
  let name_player = property_get(player, "name");
  let phase_open = app_g_conversation_sky_target(0);
  let time_open = g_phase_time(phase_open);
  let christian = property_get(npc, "christian");
  let greeting = g_greeting(meet, name_player, time_open, christian);
  let npc_gender = property_get(npc, "gender");
  let pronouns = g_gender_pronouns(npc_gender);
  if (christian) {
    ("a believer you meet again: greet them, and offer to PRAY TOGETHER — interceding for a fellow Christian's walk (growth, the Spirit, sharing), the believer counterpart of the unbeliever prayer. praying-with only appears once someone HAS converted; before that the conversation is about leading them to Christ, not praying alongside them.");
    app_g_npc_says(npc, overlay, greeting);
    let container_believer = app_g_container_player(overlay);
    app_g_p_text(container_believer, "What would you like to do?");
    function pray_together() {
      let r2 = app_g_conversation_pray_together(overlay_close, pronouns);
      return r2;
    }
    let pray_emoji = emoji_pray();
    let pray_label = text_combine(pray_emoji, " Pray together");
    app_g_button_green(container_believer, pray_label, pray_together);
    app_g_button_conversation_end(overlay, overlay_close);
    return;
  }
  let property_name2 = g_conversation_key();
  let has = property_exists(npc, property_name2);
  if (not(has)) {
    let value = g_conversation_generate(pronouns);
    let property_name3 = g_conversation_key();
    property_set(npc, property_name3, value);
  }
  let property_name4 = g_conversation_key();
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
  let pending = {
    text: null,
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
  let left = multiply_add(2, right, prayer_parts);
  let steps_total = add(left, 2);
  let steps = {
    done: 0,
  };
  async function close_now() {
    let r = await app_g_conversation_close_now(
      converts,
      prayed,
      npc,
      div_map,
      overlay_close,
    );
    return r;
  }
  async function goodbye() {
    "the final parting after the prayer is itself an advancing step — it ticks the day to its close (dusk) before snapping shut, so 'saying goodbye' spends the last of the slice rather than closing at whatever time the prayer left.";
    await app_g_conversation_advance(steps, steps_total);
    await close_now();
  }
  async function leave() {
    let r5 = await app_g_conversation_leave(
      remaining,
      prayed,
      turns,
      overlay,
      npc,
      close_now,
    );
    return r5;
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
      ("the RIGHT verse landed: this turn is done (dropped from remaining) and the day ticks forward. before the next screen, the NPC speaks the AFTER — its warm response to the Word (the fruit), generated by ",
        fn_name("g_response"),
        " for this turn's after_kind — carried as the pending intro so render_openers / render_pray say it in place of the usual continue-prompt: 'npc says the after, then asks what to talk about next'. one turn per opener in the demo, so the after always leads to the menu; a multi-turn thread would instead chain into the next turn's before.");
      remaining = list_filter(remaining, keep);
      await app_g_conversation_advance(steps, steps_total);
      let after_kind = property_get_or_null(turn, "after_kind");
      if (after_kind) {
        pending.text = g_response(after_kind);
      }
      app_g_conversation_render(
        overlay,
        remaining,
        render_openers,
        leave,
        prayed,
        render_pray,
        converts,
        npc,
        goodbye,
      );
    }
    let concern = property_get(turn, "concern");
    let correct = property_get(turn, "correct");
    let wrong = property_get(turn, "wrong");
    app_g_turn_quiz_once(
      overlay,
      npc,
      concern,
      correct,
      wrong,
      on_correct,
      discern,
      leave,
    );
  }
  function render_boundary(turn) {
    let r4 = app_g_conversation_render_boundary(
      turn,
      overlay,
      npc,
      meet,
      pending,
      remaining,
      render_openers,
      leave,
      prayed,
      render_pray,
      converts,
      goodbye,
    );
    return r4;
  }
  function render_openers() {
    let r3 = app_g_conversation_render_openers(
      greeting,
      greeted,
      pending,
      npc,
      overlay,
      remaining,
      render_boundary,
      steps,
      steps_total,
      run_turn,
      pronouns,
      leave,
    );
    return r3;
  }
  function render_pray() {
    let npc_says = g_anything_else();
    if (pending.text) {
      npc_says = pending.text;
      pending.text = null;
    }
    app_g_npc_says(npc, overlay, npc_says);
    let container = app_g_container_player(overlay);
    app_g_p_text(container, "What do you want to do?");
    async function pray() {
      let r6 = await app_g_conversation_pray(
        steps,
        steps_total,
        prayed,
        overlay,
        remaining,
        render_openers,
        leave,
        render_pray,
        converts,
        npc,
        goodbye,
        some_prayers,
      );
      return r6;
    }
    let left5 = emoji_pray();
    let text2 = text_combine(left5, " Pray");
    app_g_button_green(container, text2, pray);
  }
  await app_g_sky_reset();
  app_g_conversation_render(
    overlay,
    remaining,
    render_openers,
    leave,
    prayed,
    render_pray,
    converts,
    npc,
    goodbye,
  );
}
