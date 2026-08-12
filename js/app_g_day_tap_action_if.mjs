import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_clear } from "./app_g_day_guide_clear.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function app_g_day_tap_action_if(npc, list_name, action) {
  "tapping somebody the day has SINGLED OUT does that day's thing to them instead of opening the ordinary conversation - and says so, by handing back true, so the tap goes no further";
  "who counts is a named list on the day session, and what happens to them is handed in, because the day asks this same question twice about two different lists: the people still to be reached, and the believers still to be gathered. one shape, so a rule fixed for one of them cannot go on being wrong for the other";
  "with nobody discerned, tapping any of them acts. once a prayer has named somebody, only that person acts, and acting on them ends the discernment - the gold that led there is cleared with it. anybody else is turned away by the day's own gate, so this only has to say no";
  let state = app_g_day_state();
  let list = property_get(state, list_name);
  let missing = null_is(list);
  if (missing) {
    return false;
  }
  let chosen_not = list_includes_not(list, npc);
  if (chosen_not) {
    return false;
  }
  let target = property_get(state, "target");
  let discerned = not(null_is(target));
  if (discerned) {
    let same = g_coordinates_same_is(npc, target);
    if (not(same)) {
      return false;
    }
    property_set(state, "target", null);
    app_g_day_guide_clear();
  }
  await action(npc);
  return true;
}
