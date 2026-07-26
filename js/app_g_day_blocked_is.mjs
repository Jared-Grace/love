import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not_equal } from "./not_equal.mjs";
export function app_g_day_blocked_is(npc) {
  "#day_unbelievers force-righteousness: once discernment has revealed WHO to talk to next (day-state.target set), the Holy Spirit keeps the player from choosing a DIFFERENT talkable person. true when a target is set AND this npc is not it (the caller shows the dove and cancels). false when no target (not prayed, or day off) or this IS the discerned one. only choosing a different PERSON is blocked — gratitude / bless / general prayer are untouched";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return false;
  }
  let blocked = not_equal(npc, target);
  return blocked;
}
