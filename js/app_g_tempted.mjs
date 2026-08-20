import { fn_name } from "./fn_name.mjs";
import { app_g_need_quiz } from "./app_g_need_quiz.mjs";
import { g_temptations } from "./g_temptations.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { g_response } from "./g_response.mjs";
export function app_g_tempted(overlay, npc, overlay_close) {
  ("the 'I am being tempted' interaction as a temptation→refuting-verse quiz (the NPC voices a TEMPTATION, the player picks the Scripture that answers that pull) — a thin wrapper over ",
    fn_name("app_g_need_quiz"),
    ", the same shape as ",
    fn_name("app_g_how"),
    " and ",
    fn_name("app_g_believe"),
    ". NOT WIRED into the conversation menu yet: wiring it changes what g does, which is a decision for the human");
  let closing = g_response("encouraged");
  let needs = g_temptations();
  let off = g_verses_off_topic();
  app_g_need_quiz(overlay, npc, overlay_close, needs, off, closing);
}
