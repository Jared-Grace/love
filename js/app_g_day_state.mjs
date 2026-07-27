import { property_get } from "./property_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_g_day_state() {
  ("the #day_unbelievers demo session, a global initialised once: { talkable, target, guide } — the day's talkable NPCs (null when the demo is OFF, so the real game and every other screen are untouched), the currently-discerned target NPC, and the live gold guide-tile element. ALL fields start null so ",
    property_get.name,
    " never throws on a fresh session. the conversation entry reads talkable to give a non-talkable NPC a 'busy' line instead of a conversation");
  let state = global_function_initialize(app_g_day_state, {
    talkable: null,
    target: null,
    guide: null,
  });
  return state;
}
