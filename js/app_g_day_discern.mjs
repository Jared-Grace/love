import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_target_highlight } from "./app_g_day_target_highlight.mjs";
import { app_g_day_guide_show } from "./app_g_day_guide_show.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_day_discern(div_map) {
  "the day's discernment prayer (#day_unbelievers) — INSTANT in this dev testbed: the wait-on-the-Lord overlay and delay are SKIPPED (that beat belongs to the real menu prayer, not the demo). the Spirit reveals a random talkable target immediately — a gold reticle + a gold guide tile toward them — and sets prayer.conversation so the pre-conversation pray-gate is satisfied (one prayer). re-praying replaces the previous reticle";
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  let target = list_random_item(talkable);
  property_set(state, "target", target);
  let player = await app_g_player_get();
  let prayer = property_get(player, "prayer");
  property_set(prayer, "conversation", true);
  await app_g_player_save(player);
  let previous = property_get(state, "reticle");
  if (previous) {
    html_remove(previous);
  }
  let reticle = app_g_day_target_highlight(div_map, target);
  property_set(state, "reticle", reticle);
  await app_g_day_guide_show(div_map);
}
