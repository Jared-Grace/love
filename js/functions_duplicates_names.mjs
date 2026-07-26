import { functions_duplicates } from "./functions_duplicates.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function functions_duplicates_names() {
  "Every function that does the same work as some other function under a different name, as one flat sorted list. This is what the ratchet holds, because a name is the thing a person can act on and the thing that stays put while the group around it changes.";
  "Only the groups that do work are counted. A group that takes nothing and calls nothing is handing back a fixed value or nothing at all, and two of those being alike says almost nothing - holding them to a ratchet would spend the gate's whole credibility on pairs nobody should collapse.";
  let groups = await functions_duplicates();
  let working = list_filter_property(groups, "work", true);
  let names = [];
  for (let group of working) {
    let group_names = property_get(group, "names");
    list_add_multiple(names, group_names);
  }
  let sorted = list_sort_alphabetical(names);
  return sorted;
}
