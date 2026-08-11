import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_day_talkables_choose } from "./app_g_day_talkables_choose.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { app_g_day_talkable_marker } from "./app_g_day_talkable_marker.mjs";
import { each } from "./each.mjs";
export async function app_g_day_start(div_map) {
  arguments_assert(arguments, 1);
  ("begin a day of ministry: choose today's talkable people, open a day session holding them and how many slices the day is worth, set the sky to the start of the working day, and put a speech-bubble marker over each person the day has chosen.");
  ("this is the MECHANIC, standing on its own name, not a screen. it was written inside the #day_unbelievers route and could be reached from nowhere else, so the real game could only have started a day by copying it - and the copy would then have been the thing that drifted, because the route is where the day is developed and the copy is where it is played.");
  ("a route is a DOOR onto the game, never a second game. what belongs in one is which door you came through and what the screen behind it is for; everything the player then does has to be the same code the player reaches without a hash in the address.");
  let npcs_all = await app_g_npcs_get();
  let three = app_g_day_talkables_choose(npcs_all);
  let state = app_g_day_state();
  property_set(state, "div_map", div_map);
  property_set(state, "talkable", three);
  let value = list_size(three);
  property_set(state, "slices_total", value);
  property_set(state, "slices_done", 0);
  await app_g_day_sky_update();
  function mark(npc) {
    app_g_day_talkable_marker(div_map, npc);
  }
  each(three, mark);
}
