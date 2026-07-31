import { equal_not } from "./equal_not.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
import { app_g_day_talkable_id } from "./app_g_day_talkable_id.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { add } from "./add.mjs";
export async function app_g_day_convert(div_map, npc) {
  "STUB conversion for the #day_unbelievers integration test: the real conversation is SKIPPED (it has its own # route) — tapping a discerned person instantly marks them BELIEVES (GREEN cross) and clears their talkable speech-bubble. NOT baptized: baptism (blue cross) is a SEPARATE later flow that sets the baptized flag one-by-one, so it is not stamped here. this dummy stands in for a whole conversation so the DAY cycle (walking between people, sky / slices) can be exercised without playing every turn. the skipped conversation still COSTS its time: 3 slices (the stubbed part-count, matching the day's budget) are added and the sky advances";
  let id = app_g_day_talkable_id(npc);
  let bubble = document.getElementById(id);
  let exists = equal_not(bubble, null);
  if (exists) {
    bubble.remove();
  }
  g_icon_cross(div_map, npc);
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  if (not(null_is(talkable))) {
    function keep(other) {
      return not(g_coordinates_same_is(other, npc));
    }
    let remaining = list_filter(talkable, keep);
    property_set(state, "talkable", remaining);
  }
  let slices_done = property_get(state, "slices_done");
  let value = add(slices_done, 1);
  property_set(state, "slices_done", value);
  property_set(state, "target_start", null);
  property_set(state, "target_best", null);
  await app_g_day_sky_update();
}
