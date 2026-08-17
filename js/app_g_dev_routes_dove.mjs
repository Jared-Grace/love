import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { g_verses_hs_warning_prepare } from "./g_verses_hs_warning_prepare.mjs";
import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
export async function app_g_dev_routes_dove() {
  arguments_assert(arguments, 0);
  await app_g_view_set(null);
  await g_verses_hs_warning_prepare();
  let stays = null;
  app_g_discern_prevented_overlay(stays);
}
