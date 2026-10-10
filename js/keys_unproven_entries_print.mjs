import { property_get } from "./property_get.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { each } from "./each.mjs";
export function keys_unproven_entries_print(entries, label) {
  "one line per function, each starting with label so a reader can tell a new offense from a listing of what was already known";
  function print(entry) {
    let name = property_get(entry, "name");
    let joined = property_list_join_comma(entry, "keys");
    console.log(label + "KEY  " + name + "  -> " + joined);
  }
  each(entries, print);
}
