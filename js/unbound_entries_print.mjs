import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function unbound_entries_print(entries, label) {
  "one line per function, each starting with label so a reader can tell a new offense from a listing of what was already known";
  function print(entry) {
    let name = property_get(entry, "name");
    let joined = property_list_join_comma(entry, "unbound");
    console.log(label + "UNBOUND  " + name + "  -> " + joined);
  }
  each(entries, print);
}
