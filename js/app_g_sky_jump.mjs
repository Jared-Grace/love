import { g_times } from "./g_times.mjs";
import { app_g_sky_to } from "./app_g_sky_to.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_game_save } from "./app_g_game_save.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_sky_jump(phase) {
  ("jump the sky straight to a chosen time-of-day PHASE (an integer index into ",
    g_times.name,
    ") and snap the tint there instantly — the #sky demo's choice panel calls this so you can inspect any sky without walking. it WRITES g.sky_phase to disk (",
    app_g_game_save.name,
    ") before snapping, so the choice survives a refresh — unlike the live drift (",
    app_g_sky_to.name,
    "), which only ever mutated the in-memory save");
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", phase);
  await app_g_game_save(g);
  await app_g_sky_snap();
}
