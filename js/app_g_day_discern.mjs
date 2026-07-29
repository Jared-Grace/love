import { app_g_conversation_key } from "./app_g_conversation_key.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_show } from "./app_g_day_guide_show.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_day_discern(div_map) {
  "the day's discernment prayer (#day_unbelievers) — INSTANT in this dev testbed (no wait-on-the-Lord overlay/delay; that beat belongs to the real menu prayer). picks a random talkable target and sets prayer.conversation (satisfies the pre-conversation pray-gate), then the gold guide leads to them — NO crosshair on the person; the trail of breathing gold tiles does the pointing, and the target's OWN tile glows the same way once the player arrives adjacent, just before the conversation opens";
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  let target = list_random_item(talkable);
  property_set(state, "target", target);
  let player = await app_g_player_get();
  let distance = g_distance_taxicab(player, target);
  property_set(state, "target_start", distance);
  property_set(state, "target_best", distance);
  let prayer = property_get(player, "prayer");
  property_set(prayer, app_g_conversation_key(), true);
  await app_g_player_save(player);
  await app_g_day_guide_show(div_map);
}
