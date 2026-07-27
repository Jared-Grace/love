import { property_get } from "./property_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_g_day_state() {
  ("the #day_unbelievers demo session, a global initialised once: { talkable, target, guide, slices, slices_total, last_pos } — the day's talkable NPCs (null when the demo is OFF, so the real game and every other screen are untouched), the currently-discerned target NPC, the live gold guide-tile element, the elapsed SLICE count + the day's total slice budget (drive the sunrise→sunset sky), and last_pos = the player's {x,y} snapshot at the previous slice tick (so a move's hop-distance can be measured). ALL fields start null / 0 so ",
    property_get.name,
    " never throws on a fresh session. the conversation entry reads talkable to give a non-talkable NPC a 'busy' line instead of a conversation");
  let state = global_function_initialize(app_g_day_state, {
    talkable: null,
    target: null,
    guide: null,
    slices: 0,
    slices_total: 0,
    last_pos: null,
  });
  return state;
}
