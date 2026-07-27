import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { g_directions } from "./g_directions.mjs";
import { each } from "./each.mjs";
export function g_character_img_preload(c) {
  "warm the browser cache with ALL of a character's rotation PNGs up front, so the first time it turns the new facing swaps in INSTANTLY (app_g_character_face sets img.src) instead of showing the OLD direction until that PNG downloads — the mobile first-walk bug where a turning player kept facing the way it came. fire-and-forget: each detached Image fetches + caches its direction; nothing awaits them. BESPOKE (new Image) — do NOT auto-canonicalize";
  function warm(direction) {
    let url = g_character_img_url_direction(c, direction);
    let image = new Image();
    image.src = url;
  }
  each(g_directions(), warm);
}
