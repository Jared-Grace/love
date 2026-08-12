import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_add } from "./list_add.mjs";
export function app_g_day_follower_add(npc) {
  "a believer joins the line: they stop being somebody the player still has to go and gather, and start walking behind the player instead";
  "the two lists are one list of people cut in two by where they are, so somebody is only ever in one of them - moving a person from the first to the second is the whole of being collected, and nothing else has to be told";
  let state = app_g_day_state();
  let converts = property_get(state, "converts");
  list_remove(converts, npc);
  let followers = property_get(state, "followers");
  list_add(followers, npc);
}
