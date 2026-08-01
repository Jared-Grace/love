import { app_g_npc_bubble } from "./app_g_npc_bubble.mjs";
import { app_g_typing_dots } from "./app_g_typing_dots.mjs";
export function app_g_npc_typing(npc, overlay) {
  "the NPC's speech bubble showing pulsing DOTS instead of words — 'the person is gathering their words'. shown for the pause after the player picks a boundary opener, before the NPC gently declines, so the wait reads as a human hesitation rather than a frozen screen";
  let container = app_g_npc_bubble(npc, overlay);
  app_g_typing_dots(container);
  return container;
}
