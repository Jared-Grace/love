import { each } from "./each.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
export function parameters_unread_entries_print(entries, label) {
  "one line per function, naming the parameters its body never reads, each starting with label so a reader can tell a new offense from a listing of what was already known";
  function print(entry) {
    let name = property_get(entry, "name");
    let unread = property_get(entry, "unread");
    console.log(label + "UNREAD PARAM  " + name + "  -> " + list_join_comma(unread));
  }
  each(entries, print);
}
