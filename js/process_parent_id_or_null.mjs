import { process_stat_fields_or_null } from "./process_stat_fields_or_null.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
import { null_is } from "./null_is.mjs";
export function process_parent_id_or_null(pid) {
  "The number of the process this one hangs from, or nothing when there is no such process or it is not ours to look at.";
  "What the machine records starts at the state letter, so this is the second thing there.";
  let fields = process_stat_fields_or_null(pid);
  if (null_is(fields)) {
    return null;
  }
  let parent_text = list_get(fields, 1);
  let parent = number_from_text(parent_text);
  return parent;
}
