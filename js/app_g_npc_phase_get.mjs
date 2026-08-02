import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { not } from "./not.mjs";
import { app_g_view_phase_study } from "./app_g_view_phase_study.mjs";
import { app_g_view_phase_pray } from "./app_g_view_phase_pray.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
export function app_g_npc_phase_get(player) {
  let needs_study = property_list_empty_not_is(player, "review");
  if (needs_study) {
    return app_g_view_phase_study();
  }
  let conversation = property_path_get_2(
    player,
    "prayer",
    g_conversation_key(),
  );
  if (not(conversation)) {
    return app_g_view_phase_pray();
  }
  return app_g_view_phase_conversation();
}
