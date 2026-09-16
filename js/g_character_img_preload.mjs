import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { g_directions_all } from "./g_directions_all.mjs";
import { each } from "./each.mjs";
export function g_character_img_preload(c) {
  "warm the browser cache with ALL of a character's rotation PNGs up front, so the first time it turns the new facing swaps in INSTANTLY (app_g_character_face sets img.src) instead of showing the OLD direction until that PNG downloads — the mobile first-walk bug where a turning player kept facing the way it came. fire-and-forget: each detached Image fetches + caches its direction; nothing awaits them. BESPOKE (new Image) — do NOT auto-canonicalize";
  function warm(direction) {
    let url = g_character_img_url_direction(c, direction);
    let image = new Image();
    image.src = url;
  }
  ("ALL EIGHT, not the four the game walks on. A crossing draws the walker half way between the road and the lane she is checking, so the diagonals are live pictures now rather than art waiting for a use - and a diagonal left out of the warming is the exact bug written about above, moved to the one place a player is being asked to watch the character turn.");
  each(g_directions_all(), warm);
}
