import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_to } from "./app_g_sky_to.mjs";
import { g_sky_phase_get } from "./g_sky_phase_get.mjs";
import { add_1 } from "./add_1.mjs";
export async function app_g_sky_step() {
  "advance the sky ONE step to the next colour anchor (morning→noon→afternoon→night→morning…) and smoothly drift there — the #sky dev demo calls this on each move, so walking cycles the day. builds on the persisted phase so steps land on clean integers (g_phase_color wraps the ever-growing value)";
  let g = await app_g_game_save_get();
  let phase = g_sky_phase_get(g);
  let next = add_1(phase);
  localStorage.setItem("dbg_sky", phase + "->" + next);
  await app_g_sky_to(next);
}
