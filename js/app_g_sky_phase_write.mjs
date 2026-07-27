import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_game_save } from "./app_g_game_save.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_sky_phase_write(phase) {
  "write a chosen sky PHASE (continuous index into g_times) to the save and snap the tint there instantly — the shared core of app_g_sky_jump (#sky keyframe pills) and app_g_hour_choices (#hour clock pills). persists to disk so the picked sky survives a refresh";
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", phase);
  await app_g_game_save(g);
  await app_g_sky_snap();
}
