import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { g_prayers_conversation } from "./g_prayers_conversation.mjs";
import { app_g_pray_turn } from "./app_g_pray_turn.mjs";
import { noop } from "./noop.mjs";
export async function app_g_dev_routes_pray() {
  arguments_assert(arguments, 0);
  ("the #pray screen: the closing prayer turn of a conversation, with the petitions the GAME offers, asked for from ",
    fn_name("g_prayers_conversation"),
    " rather than written out here.");
  ("two petitions used to be spelled into this route by hand, and neither of them was a prayer the game could produce. so the screen under test was showing words that existed nowhere else in the game - the one thing a preview must never do, because what it proves is then about itself.");
  await app_g_view_set(null);
  function done() {}
  let prayer_texts = g_prayers_conversation();
  app_g_pray_turn(prayer_texts, noop, done);
}
