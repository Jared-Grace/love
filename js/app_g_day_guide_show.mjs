import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_tile } from "./app_g_day_guide_tile.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { app_g_day_slice_move } from "./app_g_day_slice_move.mjs";
import { app_g_day_guide_clear } from "./app_g_day_guide_clear.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function app_g_day_guide_show(div_map) {
  "lead the player toward the discerned person: clear the old gold tile, draw the NEXT gold tile, then credit the movement clock + sky. the tile is drawn BEFORE app_g_day_slice_move (which repaints the sky) so it appears the INSTANT the player lands + centers, not after the sky repaint — the delay you'd feel on a phone once the map got big. while the person is OFF-screen the gold leads hop-by-hop; once they're ON-screen the gold sits on their OWN tile (app_g_day_guide_tile decides) and the player taps THAT to walk over + initiate (app_g_day_convert_tap_if stub-converts here). NO auto-convert on arrival. NO-OP when nobody is discerned (target null); the player must PRAY first";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return;
  }
  app_g_day_guide_clear();
  let g = await app_g_game_save_get();
  let player = await app_g_player_get();
  let gold = app_g_day_guide_tile(g, player, target, div_map);
  if (not(null_is(gold))) {
    let element = app_g_day_guide_highlight(div_map, gold);
    property_set(state, "guide", element);
    property_set(state, "guide_coords", gold);
  }
  await app_g_day_slice_move(player);
}
