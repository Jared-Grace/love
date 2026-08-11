import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_doxology } from "./app_g_doxology.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { g_response } from "./g_response.mjs";
export function app_g_conversation_render_close(converts, npc, overlay) {
  arguments_assert(arguments, 3);
  if (converts) {
    let npc_says = app_g_doxology();
    app_g_npc_says(npc, overlay, npc_says);
  } else {
    let npc_says3 = g_response("ponder");
    app_g_npc_says(npc, overlay, npc_says3);
  }
}
