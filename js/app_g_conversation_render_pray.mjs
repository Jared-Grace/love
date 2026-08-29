import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_anything_else } from "./g_anything_else.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { app_g_ask_what_to_do_text } from "./app_g_ask_what_to_do_text.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
import { app_g_conversation_pray } from "./app_g_conversation_pray.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
export function app_g_conversation_render_pray(
  r,
  pending,
  npc,
  overlay,
  remaining_held,
  render_openers,
  leave,
  render_pray,
) {
  "The screen that offers to pray, drawn after the NPC has said whatever was left waiting for it to say.";
  "WHAT WAS WAITING IS SAID ONCE AND THEN CLEARED, so the ordinary ask-again line is what appears the next time round.";
  "THE TURNS STILL TO COME ARE READ FROM THEIR KEEPER AT THE MOMENT PRAYING HAPPENS, not when this screen was drawn, because a turn can be answered in between.";
  arguments_assert(arguments, 8);
  let prayed = property_get(r, "prayed");
  let converts = property_get(r, "converts");
  let goodbye = property_get(r, "goodbye");
  let steps = property_get(r, "steps");
  let steps_total = property_get(r, "steps_total");
  let some_prayers = property_get(r, "some_prayers");
  let npc_says = g_anything_else();
  if (pending.text) {
    npc_says = pending.text;
    pending.text = null;
  }
  app_g_npc_says(npc, overlay, npc_says);
  let container = app_shared_game_container_player(overlay);
  let ask_pray = app_g_ask_what_to_do_text();
  app_shared_game_p_text(container, ask_pray);
  async function pray() {
    let remaining_now = property_get(remaining_held, "remaining");
    let r6 = await app_g_conversation_pray(
      steps,
      steps_total,
      prayed,
      overlay,
      remaining_now,
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
  let left = emoji_pray();
  let text2 = text_combine(left, " Pray");
  app_shared_game_button_green(container, text2, pray);
}
