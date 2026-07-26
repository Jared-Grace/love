import { app_g_npc_bubble } from "./app_g_npc_bubble.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
export function app_g_npc_says(npc, overlay, npc_says) {
  let container = app_g_npc_bubble(npc, overlay);
  let speech = app_g_p_text(container, npc_says);
  html_bold_mild(speech);
}
