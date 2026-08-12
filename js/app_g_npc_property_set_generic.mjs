import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function app_g_npc_property_set_generic(store, npc, value) {
  arguments_assert(arguments, 3);
  ("Remember one thing about a person under where that person is standing NOW - with which of the things it is left open, the twin of the looking up.");
  ("Written once when the thing is drawn, and written again after every step the person takes, because the place is the key and a step changes it. A thing left under the old place is not found again and stays on the screen where nobody is standing.");
  ("The drawer to write into is the function the looking up reads from, never this one, so the two halves cannot drift apart into a thing written where nothing looks for it.");
  let key = g_coordinates_key(npc);
  global_function_property_set(store, key, value);
}
