import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_npc_unconverted_random } from "./app_g_npc_unconverted_random.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_dev_routes_npc_view_of } from "./app_g_dev_routes_npc_view_of.mjs";
export async function app_g_dev_routes_unbeliever() {
  arguments_assert(arguments, 0);
  let npc = await app_g_npc_unconverted_random();
  let result = app_g_view_phase_conversation();
  await app_g_dev_routes_npc_view_of(npc, result);
}
