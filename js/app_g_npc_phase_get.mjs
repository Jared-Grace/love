import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_view_phase_study } from "./app_g_view_phase_study.mjs";
import { app_g_view_phase_pray } from "./app_g_view_phase_pray.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
export function app_g_npc_phase_get(player) {
  let review = property_get(player, "review");
  let needs_study = list_empty_not_is(review);
  if (needs_study) {
    return "study";
  }
  let prayer = property_get(player, "prayer");
  let conversation = property_get(prayer, "conversation");
  if (not(conversation)) {
    return "pray";
  }
  return "conversation";
}
