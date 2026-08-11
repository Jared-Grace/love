import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
export async function app_g_dev_routes_npc_view_of(npc, phase) {
  arguments_assert(arguments, 2);
  let view = app_g_view_npc(npc, phase);
  await app_g_view_set(view);
}
