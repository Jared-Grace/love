import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
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
