import { app_g_sky_demo_is } from "./app_g_sky_demo_is.mjs";
import { app_g_sky_step } from "./app_g_sky_step.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { positive_is } from "./positive_is.mjs";
export async function app_g_sky_step_if_demo() {
  "advance the sky one step IF the #day_parts dev demo is on — called after each real player move so walking cycles the day; a no-op in the real game. SUPPRESSED while a day session owns the sky (slices_total > 0, e.g. #day_unbelievers / #day_conversation): the #day_parts flag persists across dev routes within one page load, so without this guard both systems repaint g.sky_phase on every move and the day time flickers/erratically jumps — the day session wins.";
  let state = app_g_day_state();
  let slices_total = property_get(state, "slices_total");
  if (positive_is(slices_total)) {
    return;
  }
  let on = app_g_sky_demo_is();
  if (on) {
    await app_g_sky_step();
  }
}
