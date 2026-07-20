import { app_g_need_quiz } from "./app_g_need_quiz.mjs";
import { g_struggles } from "./g_struggles.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { g_response } from "./g_response.mjs";
export function app_g_how(overlay, npc, overlay_close) {
  "the 'how are you?' interaction as a 2-turn need→comfort-verse quiz (the NPC voices a STRUGGLE, the player picks the on-topic comfort verse) — a thin wrapper over app_g_need_quiz";
  let closing = g_response("comfort");
  app_g_need_quiz(overlay, npc, overlay_close, g_struggles(), g_verses_off_topic(), closing);
}
