import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_tile } from "./app_g_day_guide_tile.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { app_g_day_slice_move } from "./app_g_day_slice_move.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
export async function app_g_day_guide_show(div_map) {
  "lead the player toward the discerned person: clear the old gold tile, credit the movement clock (app_g_day_slice_move), then glow the next tile. while the person is OFF-screen the gold leads hop-by-hop along the path; once they're ON-screen the gold sits on their OWN tile (app_g_day_guide_tile decides which) — and the player taps THAT to walk over + initiate the conversation (app_g_day_convert_tap_if stub-converts here, since the real conversation has its own #). NO auto-convert on arrival: reaching a tile beside the person no longer fires it — the tap on the person does. NO-OP when nobody is discerned (target null), so it is safe to call after EVERY move; the player must PRAY first";
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
  property_set(state, "guide_coords", null);
  let g = await app_g_game_save_get();
  let player = await app_g_player_get();
  await app_g_day_slice_move(player);
  let gold = app_g_day_guide_tile(g, player, target, div_map);
  if (null_is(gold)) {
    return;
  }
  let element = app_g_day_guide_highlight(div_map, gold);
  property_set(state, "guide", element);
  property_set(state, "guide_coords", gold);
}
