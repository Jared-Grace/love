import { property_get } from "./property_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_g_day_state() {
  ("the #day_unbelievers demo session, a global initialised once: { talkable, target, guide, slices_total, slices_done, target_start, target_best } — the day's talkable NPCs (null when the demo is OFF, so the real game and every other screen are untouched), the currently-discerned target NPC, the live gold guide-tile element, and the SLICE clock for the sunrise→sunset sky where one slice = one PERSON-leg: slices_total = number of people (equal shares of the day), slices_done = people reached so far, target_start = distance to the current person when prayed (the leg's length), target_best = smallest distance reached so far (drives progress WITHIN the leg; only beating it advances the sky, so wandering costs no time). ALL fields start null / 0 so ",
    property_get.name,
    " never throws on a fresh session. the conversation entry reads talkable to give a non-talkable NPC a 'busy' line instead of a conversation");
  let state = global_function_initialize(app_g_day_state, {
    talkable: null,
    target: null,
    guide: null,
    guide_coords: null,
    slices_total: 0,
    slices_done: 0,
    target_start: null,
    target_best: null,
  });
  return state;
}
