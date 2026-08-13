import { g_npc_id_key } from "./g_npc_id_key.mjs";
import { property_get } from "./property_get.mjs";
export function g_npc_id(npc) {
  "the word a person is known by - the address everything remembered about them is filed under.";
  "it is asked for rather than read off the person at each site, so the day something other than a plain field answers it, every drawer follows at once.";
  let key = g_npc_id_key();
  let id = property_get(npc, key);
  return id;
}
