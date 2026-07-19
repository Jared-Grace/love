import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { html_div } from "./html_div.mjs";
export function app_g_conversation_say(npc, overlay, overlay_close, text) {
  "render a single NPC reply + the end button — used to preview a one-shot conversation opener reply (the #how / #believe dev routes show the how-are-you / what-do-you-believe replies this way)";
  let says_div = html_div(overlay);
  app_g_npc_says(npc, says_div, text);
  app_g_button_conversation_end(overlay, overlay_close);
}
