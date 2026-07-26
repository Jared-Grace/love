import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
export function shadowing_entries_print(entries, label) {
  "one line per rule broken per function, each starting with label so a reader can tell a new offense from a listing of what was already known";
  function print(entry) {
    let name = property_get(entry, "name");
    let duplicated = property_get(entry, "duplicated");
    let shadowed = property_get(entry, "shadowed");
    let any_duplicated = greater_than(duplicated.length, 0);
    if (any_duplicated) {
      console.log(
        label + "BOUND TWICE  " + name + "  -> " + list_join_comma(duplicated),
      );
    }
    let any_shadowed = greater_than(shadowed.length, 0);
    if (any_shadowed) {
      console.log(
        label + "SHADOWS FN   " + name + "  -> " + list_join_comma(shadowed),
      );
    }
  }
  each(entries, print);
}
