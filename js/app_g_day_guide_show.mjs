import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_guide_tile } from "./app_g_day_guide_tile.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npc_phase_get } from "./app_g_npc_phase_get.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_set_render } from "./app_g_view_set_render.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export async function app_g_day_guide_show(div_map) {
  "lead the player all the way IN: clear the old gold tile, then — if the player is now rook-ADJACENT to the discerned person — the discernment is fulfilled: glow the person's OWN tile the same breathing gold (an arrival marker where the crosshair used to be), hold a brief beat so it's seen, then open the conversation. otherwise draw the next gold tile toward them. NO-OP when nobody is discerned (target null), so it is safe to call after EVERY move. the player still has to remember to PRAY first (this only runs once a target is set)";
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
  let distance = g_distance_taxicab(player, target);
  if (equal(distance, 1)) {
    property_set(state, "target", null);
    let x = property_get(target, "x");
    let y = property_get(target, "y");
    let coordinates = {
      x,
      y,
    };
    let under = app_g_day_guide_highlight(div_map, coordinates);
    let phase = app_g_npc_phase_get(player);
    let view = {
      kind: app_g_view_kind_npc(),
      x,
      y,
      phase,
    };
    async function open() {
      html_remove(under);
      await app_g_view_set_render(view, div_map);
    }
    setTimeout(open, 600);
    return;
  }
  let gold = app_g_day_guide_tile(g, player, target, div_map);
  if (null_is(gold)) {
    return;
  }
  let element = app_g_day_guide_highlight(div_map, gold);
  property_set(state, "guide", element);
}
