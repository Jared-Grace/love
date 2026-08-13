import { g_npc_id } from "./g_npc_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function app_g_npc_property_set_generic(store, npc, value) {
  arguments_assert(arguments, 3);
  ("Remember one thing about a person under WHO that person is - with which of the things it is left open, the twin of the looking up.");
  ("Written once, when the thing is drawn, and never again for a step. It used to be written after every step as well, because the key was the tile and a step changed it - which meant a person could only be moved by code that knew to empty their drawers and fill them again, and anything that forgot left a picture behind on an empty tile. An id does not change when somebody walks, so there is nothing to write again.");
  ("The drawer to write into is the function the looking up reads from, never this one, so the two halves cannot drift apart into a thing written where nothing looks for it.");
  let key = g_npc_id(npc);
  global_function_property_set(store, key, value);
}
