import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function unbound_entries_names_text(entries) {
  "the offending function names on one line, for the sentence a failing gate throws - the detail is already printed above it, so the message only has to say where to look";
  let names = list_map_property(entries, "name");
  let joined = list_join_comma(names);
  return joined;
}
