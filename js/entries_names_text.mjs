import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function entries_names_text(entries) {
  "the function names in one line. A gate that runs inside the whole-repo run only gets its message read, not its printed lines, so the message has to carry the names or the reader is told a count and left to go looking.";
  let names = list_map_property(entries, "name");
  let text = list_join_comma(names);
  return text;
}
