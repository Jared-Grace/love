import { app_g_day_state } from "./app_g_day_state.mjs";
import { list_includes } from "./list_includes.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_day_talkable_is(npc) {
  "in the #day_unbelievers demo, may the player talk to this NPC? true when the demo is OFF (talkable is null → normal game, everyone talkable) OR the npc is one of the day's chosen; false ONLY when the demo is ON and this npc is not among them. drives the 'busy' gate";
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  if (null_is(talkable)) {
    return true;
  }
  let is = list_includes(talkable, npc);
  return is;
}
