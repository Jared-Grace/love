import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { g_verses_waiting_prepare } from "./g_verses_waiting_prepare.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
export async function app_g_dev_routes_discern() {
  arguments_assert(arguments, 0);
  await app_g_view_set(null);
  await g_verses_waiting_prepare();
  app_g_prayer_overlay();
}
