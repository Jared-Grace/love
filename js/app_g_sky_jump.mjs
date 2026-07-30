import { fn_name } from "./fn_name.mjs";
import { app_g_sky_phase_write } from "./app_g_sky_phase_write.mjs";
import { app_g_sky_choices_highlight } from "./app_g_sky_choices_highlight.mjs";
export async function app_g_sky_jump(phase) {
  ("jump the sky straight to a chosen time-of-day PHASE (an integer index into ",
    fn_name("g_times"),
    ") — the #day_parts demo's choice panel calls this so you can inspect any sky without walking. writes + snaps + persists via app_g_sky_phase_write (the choice survives a refresh), then restyles the you-are-here pill");
  await app_g_sky_phase_write(phase);
  await app_g_sky_choices_highlight();
}
