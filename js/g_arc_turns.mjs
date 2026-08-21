import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function g_arc_turns(arc) {
  "Every turn of a written arc, from every conversation in it, in the order they are played.";
  "AN ARC IS TWO DEEP AND MOST QUESTIONS ABOUT IT ARE ONE DEEP. Whether a passage was used, whether an opener is on the list, whether a reference names anything offered - none of those care which conversation the turn sits in, and each one written out for itself would carry the same pair of loops again.";
  let turns = [];
  let conversations = property_get(arc, "conversations");
  for (let conversation of conversations) {
    let list = property_get(conversation, "turns");
    list_add_multiple(turns, list);
  }
  return turns;
}
