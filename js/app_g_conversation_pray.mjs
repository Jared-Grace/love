import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_conversation_advance } from "./app_g_conversation_advance.mjs";
import { app_g_conversation_render } from "./app_g_conversation_render.mjs";
import { app_g_pray_turn } from "./app_g_pray_turn.mjs";
export async function app_g_conversation_pray(
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
) {
  arguments_assert(arguments, 12);
  await app_g_conversation_advance(steps, steps_total);
  async function on_part() {
    await app_g_conversation_advance(steps, steps_total);
  }
  function on_prayed() {
    prayed.done = true;
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
  app_g_pray_turn(some_prayers, on_part, on_prayed);
}
