import { g_npc_id } from "./g_npc_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { not } from "./not.mjs";
export function app_g_npc_property_get_null_generic(store, npc) {
  arguments_assert(arguments, 2);
  ("one thing remembered about a person, found by WHO that person is - or NOTHING, when nothing was ever remembered about them.");
  ("The twin next door refuses an empty drawer, and that is right for a thing every person has: a picture missing is a person who was never drawn, and answering nothing for that would move somebody nobody can see. This one is for a thing only SOME people have, where an empty drawer is the ordinary answer rather than a fault.");
  ("Reading a missing one as a fault is what broke walking. A cross is only remembered for somebody converted this very day, so everybody else - every stranger, and every believer whose cross was drawn when the map was first painted - had an empty drawer, and asking for it threw. Nobody but a new convert could be moved at all, which took out the crowd making room and the trading of places both, and left the walk stopped halfway with an error.");
  let key = g_npc_id(npc);
  let remembered = global_function_property_exists(store, key);
  if (not(remembered)) {
    return null;
  }
  let value = global_function_property_get(store, key);
  return value;
}
