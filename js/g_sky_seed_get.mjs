import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function g_sky_seed_get(g) {
  "the sky-tint WARMTH seed (0-100) from the game save, defaulting to 50 (neutral) — older saves and the very first morning predate it. it is re-rolled at the start of each conversation (app_g_sky_reset), so it stays stable within a moment (no flicker on refresh) but varies day to day";
  let seed = 50;
  if (property_exists(g, "sky_seed")) {
    seed = property_get(g, "sky_seed");
  }
  return seed;
}
