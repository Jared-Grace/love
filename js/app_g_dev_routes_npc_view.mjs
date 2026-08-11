import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_g_dev_routes_npc_view_of } from "./app_g_dev_routes_npc_view_of.mjs";
export async function app_g_dev_routes_npc_view(phase) {
  arguments_assert(arguments, 1);
  let npcs = await app_g_npcs_get();
  let npc = list_random_item(npcs);
  await app_g_dev_routes_npc_view_of(npc, phase);
}
