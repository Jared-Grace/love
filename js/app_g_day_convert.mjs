import { app_g_npc_cross_set } from "./app_g_npc_cross_set.mjs";
import { list_add } from "./list_add.mjs";
import { app_g_day_follower_add } from "./app_g_day_follower_add.mjs";
import { equal } from "./equal.mjs";
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
  let cross = g_icon_cross(div_map, npc);
  app_g_npc_cross_set(npc, cross);
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  let b = null_is(talkable);
  if (not(b)) {
    function keep(other) {
      let b2 = g_coordinates_same_is(other, npc);
      let n = not(b2);
      return n;
    }
    let remaining = list_filter(talkable, keep);
    property_set(state, "talkable", remaining);
  }
  let slices_done = property_get(state, "slices_done");
  let value = add(slices_done, 1);
  property_set(state, "slices_done", value);
  property_set(state, "target_start", null);
  property_set(state, "target_best", null);
  ("a new believer is now somebody to gather for baptism, because converts are baptized the SAME day. they wait where they are and the player comes back for them - except for the LAST one, who falls in behind the player right there");
  ("the last one is the person the player has only just finished talking to and is standing next to, so asking for a tap to collect them would be a tap that means nothing. it also seeds the line with one member, which SHOWS what walking behind the player looks like before the player sets out to gather the rest");
  let converts = property_get(state, "converts");
  list_add(converts, npc);
  let slices_total = property_get(state, "slices_total");
  let last = equal(value, slices_total);
  if (last) {
    await app_g_day_follower_add(npc);
  }
  await app_g_day_sky_update();
}
