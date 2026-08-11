import { process_stat_fields_or_null } from "./process_stat_fields_or_null.mjs";
import { list_get } from "./list_get.mjs";
import { null_is } from "./null_is.mjs";
export function process_parent_id_or_null(pid) {
  "Which process this one hangs from, or nothing when there is no such process or it is not ours to look at.";
  "What the machine records starts at the state letter, so this is the second thing there.";
  let fields = process_stat_fields_or_null(pid);
  if (null_is(fields)) {
    return null;
  }
  ("Given back as the machine writes it rather than as a number, because that is");
  ("what the readings beside this one want handed to them: a process is asked about");
  ("by the name of its folder, and a folder is named in text.");
  let parent = list_get(fields, 1);
  return parent;
}
