import { app_g_day_guide_show } from "./app_g_day_guide_show.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_target_highlight } from "./app_g_day_target_highlight.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_day_discern(div_map) {
  "the day's discernment prayer (#day_unbelievers): wait on the Lord (the prayer overlay), then the Spirit reveals WHO to talk to next — a random talkable NPC — encircled GOLD on the map. ONE prayer that both seeks discernment AND readies the conversation: it also sets prayer.conversation so the pre-conversation pray-gate is satisfied. random draw = you can't game it, you must wait on His timing";
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  let target = list_random_item(talkable);
  let waiting = app_g_prayer_overlay();
  async function answered() {
    html_remove(waiting);
    property_set(state, "target", target);
    let player = await app_g_player_get();
    let prayer = property_get(player, "prayer");
    property_set(prayer, "conversation", true);
    await app_g_player_save(player);
    app_g_day_target_highlight(div_map, target);
    await app_g_day_guide_show(div_map);
  }
  let delay = list_random_item([4000, 5000, 6000, 7000]);
  setTimeout(answered, delay);
}
