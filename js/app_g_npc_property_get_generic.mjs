import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
export function app_g_npc_property_get_generic(store, npc) {
  arguments_assert(arguments, 2);
  ("One thing remembered about a person, found by WHERE that person is standing - with which of the things it is left open, so a second thing costs a name and nothing else.");
  ("What is passed in is not a word naming a store, it is the store: a function standing in for a drawer, which is how everything remembered about a person is kept here. Two names therefore mean two drawers, and that is the whole of the arrangement - the cross drawn over a believer and the picture underneath them are found the same way and moved together, and neither is ever found in the other's drawer.");
  ("Written because a copy was noticed, and worth saying exactly what was and was not the copy. The way of looking a thing up was written twice and is now written once, here. The two names were never the copy: collapsing them onto one name puts the crosses and the pictures in the same drawer, and a person walking would drag the wrong one, which is a bug and not a tidying. So the reading to make of two functions with the same body is not always that one of them is spare - when the body's meaning comes from WHO is asking, sameness of body is what a correct pair looks like.");
  let key = g_coordinates_key(npc);
  let value = global_function_property_get(store, key);
  return value;
}
