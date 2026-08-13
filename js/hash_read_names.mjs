import { hash_object_read_name } from "./hash_object_read_name.mjs";
import { hash_text_read_name } from "./hash_text_read_name.mjs";
export function hash_read_names() {
  "Every function that hands back the address of the page, whichever shape it hands it back in.";
  "Gathered rather than asked for one at a time, because a reading that wants to know whether a file touches the address at all does not care which way it asked - and one that named only the shape it expected would pass silently over the file that used the other.";
  let object_read = hash_object_read_name();
  let text_read = hash_text_read_name();
  let names = [object_read, text_read];
  return names;
}
