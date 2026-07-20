import { app_g_need_quiz } from "./app_g_need_quiz.mjs";
import { g_disciple_encouragements } from "./g_disciple_encouragements.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { g_response } from "./g_response.mjs";
export function app_g_disciple(overlay, npc, overlay_close) {
  "the disciple ENCOURAGEMENT interaction as a need→Scripture quiz (a fellow believer voices a DISCOURAGEMENT, the player answers with the on-topic passage) — a thin wrapper over app_g_need_quiz, mirroring app_g_how / app_g_believe";
  let closing = g_response("encouraged");
  app_g_need_quiz(overlay, npc, overlay_close, g_disciple_encouragements(), g_verses_off_topic(), closing);
}
