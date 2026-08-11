import { process_record_or_null } from "./process_record_or_null.mjs";
import { text_trim } from "./text_trim.mjs";
import { null_is } from "./null_is.mjs";
export function process_name_or_null(pid) {
  "What a running process is called, or nothing when there is no such process or it is not ours to look at.";
  "The machine keeps the name on a line of its own, so what is read back ends in a line break that is no part of the name.";
  let text = process_record_or_null(pid, "comm");
  if (null_is(text)) {
    return null;
  }
  let name = text_trim(text);
  return name;
}
