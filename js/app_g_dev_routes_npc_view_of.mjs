import { app_g_view_npc } from "./app_g_view_npc.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
export async function app_g_dev_routes_npc_view_of(npc, phase) {
  arguments_assert(arguments, 2);
  let view = app_g_view_npc(npc, phase);
  await app_g_view_set(view);
}
