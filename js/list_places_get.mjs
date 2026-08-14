import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export function list_places_get(list, places) {
  "The items of a list at the places named, in the order the places were named.";
  "It is the other half of a choice made by position: one list says where, and this hands back what is there. Naming the places apart from the items is what lets the same choice be made twice - once to pick items up and once to put them back down.";
  function at_place(at) {
    let item = list_get(list, at);
    return item;
  }
  let items = list_map(places, at_place);
  return items;
}
