import { arguments_assert } from "./arguments_assert.mjs";
import { g_prayers_believer } from "./g_prayers_believer.mjs";
import { app_g_pray_turn } from "./app_g_pray_turn.mjs";
export function app_g_conversation_pray_together(overlay_close, pronouns) {
  arguments_assert(arguments, 2);
  function on_part() {}
  async function on_prayed() {
    await overlay_close();
  }
  let believer_prayers = g_prayers_believer(pronouns);
  app_g_pray_turn(believer_prayers, on_part, on_prayed);
}
