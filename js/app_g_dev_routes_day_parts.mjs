import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_sky_demo_enable } from "./app_g_sky_demo_enable.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_sky_choices } from "./app_g_sky_choices.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
export async function app_g_dev_routes_day_parts() {
  arguments_assert(arguments, 0);
  ("a testbed for the day-drift, two ways to move it: WALK the map (each move drifts the sky one colour, morning→noon→afternoon→sunset→night→sunrise→back), OR click a pill in the always-visible CHOICE panel (top-right) to jump straight to any sky. it REMEMBERS the current sky across refresh — snaps to the persisted phase instead of resetting to morning, because both walking (",
    fn_name("app_g_sky_step"),
    ") and jumping (",
    fn_name("app_g_sky_jump"),
    ") now write g.sky_phase to disk. this is the same smooth drift the real conversation uses");
  app_g_sky_demo_enable();
  await app_g_view_set(null);
  await app_g_sky_choices();
  await app_g_sky_snap();
}
