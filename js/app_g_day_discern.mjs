import { fn_name } from "./fn_name.mjs";
import { app_g_day_discern_target } from "./app_g_day_discern_target.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_show } from "./app_g_day_guide_show.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_distance_walk } from "./g_distance_walk.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_day_discern() {
  "the day's discernment prayer (#day_unbelievers) — INSTANT in this dev testbed (no wait-on-the-Lord overlay/delay; that pause belongs to the real menu prayer). picks a random talkable target and sets prayer.conversation (satisfies the pre-conversation pray-gate), then the gold guide leads to them — NO crosshair on the person; the trail of breathing gold tiles does the pointing, and the target's OWN tile glows the same way once the player arrives adjacent, just before the conversation opens";
  "the map is read off the day session rather than received, because this is prayed from the tap-yourself menu now and a menu has no map to hand over.";
  let state = app_g_day_state();
  let div_map = property_get(state, "div_map");
  let player = await app_g_player_get();
  let g = await app_g_game_save_get();
  ("who or what is named is asked next door (",
    fn_name("app_g_day_discern_target"),
    "), because by the end of the day the answer is not a person any more - it is the water. the game and the player are read FIRST now, since choosing the water is a question about where the player is standing");
  let target = app_g_day_discern_target(g, player);
  property_set(state, "target", target);
  let distance = g_distance_walk(g, player, target);
  property_set(state, "target_start", distance);
  property_set(state, "target_best", distance);
  let prayer = property_get(player, "prayer");
  let property_name = g_conversation_key();
  property_set(prayer, property_name, true);
  await app_g_player_save(player);
  await app_g_day_guide_show(div_map);
}
