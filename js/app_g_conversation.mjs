import { app_g_conversation_opening } from "./app_g_conversation_opening.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_conversation_turns } from "./app_g_conversation_turns.mjs";
import { app_g_conversation_leave } from "./app_g_conversation_leave.mjs";
import { app_g_conversation_run_turn } from "./app_g_conversation_run_turn.mjs";
import { app_g_conversation_render_boundary } from "./app_g_conversation_render_boundary.mjs";
import { app_g_conversation_render_openers } from "./app_g_conversation_render_openers.mjs";
import { app_g_conversation_render_pray } from "./app_g_conversation_render_pray.mjs";
import { app_g_sky_reset } from "./app_g_sky_reset.mjs";
import { app_g_conversation_render } from "./app_g_conversation_render.mjs";
export async function app_g_conversation(
  prayer,
  npc,
  overlay,
  overlay_close,
  div_map,
) {
  "A whole conversation with one person: the opening that may end it before it starts, then the turns, the menu of things to talk about, and the offer to pray, each of which can hand the screen back to the others.";
  "THE TURNS STILL TO COME ARE KEPT IN A SMALL ONE-FIELD KEEPER rather than in a plain name, because the screens below outlive this call and every one of them has to read and write the one list at the moment it actually runs.";
  "THE FIRST DRAW READS THE PLAIN NAME AND NOT THE KEEPER, which is the same list, because nothing has had a chance to answer a turn yet.";
  let opening = await app_g_conversation_opening(
    prayer,
    npc,
    overlay,
    overlay_close,
  );
  let stopped = property_get(opening, "stopped");
  if (stopped) {
    return;
  }
  let meet = property_get(opening, "meet");
  let greeting = property_get(opening, "greeting");
  let pronouns = property_get(opening, "pronouns");
  let r = app_g_conversation_turns(npc, pronouns, div_map, overlay_close);
  let turns = property_get(r, "turns");
  let converts = property_get(r, "converts");
  let remaining = property_get(r, "remaining");
  let prayed = property_get(r, "prayed");
  let greeted = property_get(r, "greeted");
  let pending = property_get(r, "pending");
  let steps_total = property_get(r, "steps_total");
  let steps = property_get(r, "steps");
  let close_now = property_get(r, "close_now");
  let goodbye = property_get(r, "goodbye");
  let remaining_held = {
    remaining,
  };
  async function leave() {
    let remaining_now = property_get(remaining_held, "remaining");
    let r5 = await app_g_conversation_leave(
      remaining_now,
      prayed,
      turns,
      overlay,
      npc,
      close_now,
    );
    return r5;
  }
  function run_turn(turn) {
    app_g_conversation_run_turn(turn, {
      overlay,
      npc,
      remaining_held,
      steps,
      steps_total,
      pending,
      render_openers,
      leave,
      prayed,
      render_pray,
      converts,
      goodbye,
    });
  }
  function render_boundary(turn) {
    let remaining_now = property_get(remaining_held, "remaining");
    let r4 = app_g_conversation_render_boundary(turn, {
      overlay,
      npc,
      meet,
      pending,
      remaining: remaining_now,
      render_openers,
      leave,
      prayed,
      render_pray,
      converts,
      goodbye,
    });
    return r4;
  }
  function render_openers() {
    let remaining_now = property_get(remaining_held, "remaining");
    let r3 = app_g_conversation_render_openers({
      greeting,
      greeted,
      pending,
      npc,
      overlay,
      remaining: remaining_now,
      render_boundary,
      steps,
      steps_total,
      run_turn,
      pronouns,
      leave,
    });
    return r3;
  }
  function render_pray() {
    app_g_conversation_render_pray(
      r,
      pending,
      npc,
      overlay,
      remaining_held,
      render_openers,
      leave,
      render_pray,
    );
  }
  await app_g_sky_reset();
  app_g_conversation_render({
    overlay,
    remaining,
    render_openers,
    leave,
    prayed,
    render_pray,
    converts,
    npc,
    goodbye,
  });
}
