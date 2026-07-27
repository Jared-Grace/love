import { g_icon_cross_baptized } from "./g_icon_cross_baptized.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { add } from "./add.mjs";
export async function app_g_day_convert(div_map, npc) {
  "STUB conversion for the #day_unbelievers integration test: the real conversation is SKIPPED (it has its own # route) — reaching a discerned person instantly marks them believes+baptized (blue cross) and clears their talkable speech-bubble. this dummy stands in for a whole conversation so the DAY cycle (walking between people, sky / slices) can be exercised without playing every turn. the skipped conversation still COSTS its time: 3 slices (the stubbed part-count, matching the day's budget) are added and the sky advances";
  let x = property_get(npc, "x");
  let y = property_get(npc, "y");
  let id = text_combine_multiple(["day-talkable-", x, "-", y]);
  let marker = document.getElementById(id);
  let b = equal(marker, null);
  let exists = not(b);
  if (exists) {
    marker.remove();
  }
  g_icon_cross_baptized(div_map, npc);
  let state = app_g_day_state();
  let slices_done = property_get(state, "slices_done");
  property_set(state, "slices_done", add(slices_done, 1));
  property_set(state, "target_start", null);
  property_set(state, "target_best", null);
  await app_g_day_sky_update();
}
