import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_render_npc_right } from "./app_g_view_render_npc_right.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_view_render_npc_phase(view, div_map) {
  arguments_assert(arguments, 2);
  let r = await app_g_view_render_npc_right(view, div_map);
  let right = property_get(r, "right");
  let overlay_close = property_get(r, "overlay_close");
  let overlay = property_get(r, "overlay");
  let player = property_get(r, "player");
  let npc = property_get(r, "npc");
  let phase = property_get(r, "phase");
  return {
    right,
    overlay_close,
    overlay,
    player,
    npc,
    phase,
  };
}
