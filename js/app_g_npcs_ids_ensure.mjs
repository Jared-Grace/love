import { g_npcs_ids_ensure } from "./g_npcs_ids_ensure.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_npcs_ids_ensure(g) {
  "make sure everybody in a game just loaded has an id.";
  "the sibling of the other two ensures beside it, and asked LAST of the three, because the people are made out of the map and a person cannot be given an id before there is a person.";
  "this is the one door every reader of the game comes through, so an id exists before anything is looked up under one - a drawer read a moment too early would be read under a word nobody has yet.";
  let npcs = property_get(g, "npcs");
  g_npcs_ids_ensure(npcs);
}
