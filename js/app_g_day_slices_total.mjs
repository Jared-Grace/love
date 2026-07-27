import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
export function app_g_day_slices_total(talkable, player) {
  "the #day_unbelievers day's total SLICE budget so the sky can span sunrise→sunset: 3 stubbed conversation-parts per talkable person PLUS a nearest-first taxicab estimate of the walking between them from the player. a ROUGH budget is fine — the sky just needs to land near sunset once the three are done. BESPOKE (arrays / loop) — do NOT auto-canonicalize";
  const partsPerConversation = 3;
  let parts = talkable.length * partsPerConversation;
  let here = player;
  let remaining = talkable.slice();
  let move = 0;
  while (remaining.length > 0) {
    let best = remaining[0];
    for (const c of remaining) {
      if (g_distance_taxicab(c, here) < g_distance_taxicab(best, here)) {
        best = c;
      }
    }
    move = move + g_distance_taxicab(best, here);
    here = best;
    remaining = remaining.filter((c) => c !== best);
  }
  return parts + move;
}
