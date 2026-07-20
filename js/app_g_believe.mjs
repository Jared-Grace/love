import { app_g_need_quiz } from "./app_g_need_quiz.mjs";
import { g_doubts } from "./g_doubts.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { g_response } from "./g_response.mjs";
export function app_g_believe(overlay, npc, overlay_close) {
  "the 'what do you believe?' interaction as a 2-turn need→answer-verse quiz (the NPC voices a DOUBT, the player picks the on-topic assurance verse) — a thin wrapper over app_g_need_quiz";
  let closing = g_response("ponder");
  app_g_need_quiz(overlay, npc, overlay_close, g_doubts(), g_verses_off_topic(), closing);
}
