import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_time_of_day_get } from "./g_time_of_day_get.mjs";
import { g_time_of_day_next } from "./g_time_of_day_next.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_time_advance() {
  "advance the world's time of day one step (morning→noon→afternoon→night→…) — called as the player completes each unbeliever conversation part. also re-rolls the sky_seed (0-100) so each new time gets a fresh, stable WARMTH for its tint. mutates the shared, cached game save; it persists on the next view change (which saves the game)";
  let g = await app_g_game_save_get();
  let current = g_time_of_day_get(g);
  let next = g_time_of_day_next(current);
  console.log("[time_adv]", current, "->", next);
  property_set(g, "time_of_day", next);
  property_set(g, "sky_seed", integer_random_0(101));
}
