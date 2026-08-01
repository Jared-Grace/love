import { fn_name } from "./fn_name.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_game_save } from "./app_g_game_save.mjs";
import { app_g_sky_to } from "./app_g_sky_to.mjs";
import { g_sky_phase_get } from "./g_sky_phase_get.mjs";
import { app_g_sky_choices_highlight } from "./app_g_sky_choices_highlight.mjs";
import { add_1 } from "./add_1.mjs";
export async function app_g_sky_step() {
  ("advance the sky ONE step to the next colour anchor (morning→noon→afternoon→sunset→night→sunrise→morning…) and smoothly drift there — the #day_parts dev demo calls this on each move, so walking cycles the day. builds on the persisted phase so steps land on clean integers (",
    fn_name("g_phase_color"),
    " wraps the ever-growing value). then WRITES the new phase to disk (",
    fn_name("app_g_game_save"),
    ") so the #day_parts demo remembers the current sky across refresh — this demo-only path adds the persistence that ",
    fn_name("app_g_sky_to"),
    " alone (in-memory only) lacks");
  let g = await app_g_game_save_get();
  let phase = g_sky_phase_get(g);
  let next = add_1(phase);
  await app_g_sky_to(next);
  await app_g_game_save(g);
  await app_g_sky_choices_highlight();
}
