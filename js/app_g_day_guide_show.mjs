import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_tile } from "./app_g_day_guide_tile.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
export async function app_g_day_guide_show(div_map) {
  "refresh the GOLD guide tile toward the discerned person: clear the old one, compute the next, draw it. NO-OP when no one is discerned (target null), so it is safe to call after EVERY move. when the target is on-screen the guide-tile helper returns null and the guide clears — the player then taps the gold reticle to talk";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return;
  }
  let previous = property_get(state, "guide");
  if (previous) {
    html_remove(previous);
  }
  property_set(state, "guide", null);
  let g = await app_g_game_save_get();
  let player = await app_g_player_get();
  let gold = app_g_day_guide_tile(g, player, target, div_map);
  if (null_is(gold)) {
    return;
  }
  let element = app_g_day_guide_highlight(div_map, gold);
  property_set(state, "guide", element);
}
