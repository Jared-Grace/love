import { app_g_sky_demo_is } from "./app_g_sky_demo_is.mjs";
import { app_g_sky_step } from "./app_g_sky_step.mjs";
export async function app_g_sky_step_if_demo() {
  "advance the sky one step IF the #sky dev demo is on — called after each real player move so walking cycles the day; a no-op in the real game";
  let on = app_g_sky_demo_is();
  localStorage.setItem("dbg_demo", "on:" + on);
  if (on) {
    await app_g_sky_step();
  }
}
