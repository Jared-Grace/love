import { fn_name } from "./fn_name.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { g_water } from "./g_water.mjs";
import { app_g_map_buffer_pad } from "./app_g_map_buffer_pad.mjs";
export function app_g_map_pad(rows) {
  ("wrap a generated map in a RING of water (",
    fn_name("app_g_map_buffer_pad"),
    " tiles thick), returning a larger square grid with the original content CENTERED. the bigger grid lets the viewport scroll far enough to keep the player centered at the real map edge (otherwise the browser clamps scroll at the grid edge — which also hid a bottom-row NPC under the discern bar). water is auto-excluded from the reachable-land component + from pathfinding, so the ring is genuinely UNREACHABLE buffer, not extra land; and because player/NPC placement happens AFTER this on the padded coordinates, everyone lands in the core at coords >= 0 with no offset logic anywhere. BESPOKE (nested loops / arrays) — do NOT auto-canonicalize");
  let pad = app_g_map_buffer_pad();
  let water = g_water();
  let inner = rows.length;
  let size = inner + multiply(2, pad);
  let padded = [];
  for (let y = 0; less_than(y, size); y++) {
    let row = [];
    for (let x = 0; less_than(x, size); x++) {
      let in_core =
        greater_than_equal(y, pad) &&
        less_than(y, pad + inner) &&
        greater_than_equal(x, pad) &&
        less_than(x, pad + inner);
      if (in_core) {
        row.push(rows[subtract(y, pad)][subtract(x, pad)]);
      } else {
        row.push(water);
      }
    }
    padded.push(row);
  }
  return padded;
}
