import { duplicate_kind_work } from "./duplicate_kind_work.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { functions_duplicates } from "./functions_duplicates.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function functions_duplicates_names() {
  "Every function that does the same work as some other function under a different name, as one flat sorted list. This is what the ratchet holds, because a name is the thing a person can act on and the thing that stays put while the group around it changes.";
  "Only the groups that do work are counted. A group of fixed values, or a group of unwritten placeholders, is alike for a reason that has nothing to do with duplication - holding those to a ratchet would spend the gate's whole credibility on names nobody should collapse.";
  let groups = await functions_duplicates();
  let property_value = duplicate_kind_work();
  let working = list_filter_property(groups, "kind", property_value);
  let names = [];
  for (let group of working) {
    let group_names = property_get(group, "names");
    list_add_multiple(names, group_names);
  }
  let sorted = list_sort_text(names);
  return sorted;
}
