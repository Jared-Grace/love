import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { g_response } from "./g_response.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
export function app_g_conversation_render_farewell(overlay, npc, close_now) {
  arguments_assert(arguments, 3);
  ("the player ends an unbeliever conversation before it completes but after engaging at least one gospel point: the seed is planted, so the NPC's parting words REFLECT rather than convert - ",
    fn_name("g_response"),
    " 'ponder' ('you've given me a lot to think about'), the same warm structured grammar the natural close uses. one more warm goodbye actually closes.");
  html_clear(overlay);
  let npc_says4 = g_response("ponder");
  app_g_npc_says(npc, overlay, npc_says4);
  app_g_button_conversation_end(overlay, close_now);
}
