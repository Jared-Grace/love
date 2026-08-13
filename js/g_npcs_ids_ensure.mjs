import { g_npc_id_ensure } from "./g_npc_id_ensure.mjs";
import { each } from "./each.mjs";
export function g_npcs_ids_ensure(npcs) {
  "give everybody who has no id one, and change nobody else.";
  "asked wherever the people are loaded rather than only where they are first made, because the people already saved in somebody's browser were made before there were ids at all - and they are exactly the ones who would otherwise walk about carrying nothing.";
  each(npcs, g_npc_id_ensure);
}
