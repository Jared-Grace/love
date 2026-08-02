import { g_water } from "./g_water.mjs";
import { app_g_map_buffer_pad } from "./app_g_map_buffer_pad.mjs";
export function app_g_map_pad(rows) {
  "wrap a generated map in a RING of water (app_g_map_buffer_pad tiles thick), returning a larger square grid with the original content CENTERED. the bigger grid lets the viewport scroll far enough to keep the player centered at the real map edge (otherwise the browser clamps scroll at the grid edge — which also hid a bottom-row NPC under the discern bar). water is auto-excluded from the reachable-land component + from pathfinding, so the ring is genuinely UNREACHABLE buffer, not extra land; and because player/NPC placement happens AFTER this on the padded coordinates, everyone lands in the core at coords >= 0 with no offset logic anywhere. BESPOKE (nested loops / arrays) — do NOT auto-canonicalize";
  const pad = app_g_map_buffer_pad();
  const water = g_water();
  const inner = rows.length;
  const size = inner + 2 * pad;
  const padded = [];
  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      const in_core =
        y >= pad && y < pad + inner && x >= pad && x < pad + inner;
      if (in_core) {
        row.push(rows[y - pad][x - pad]);
      } else {
        row.push(water);
      }
    }
    padded.push(row);
  }
  return padded;
}
