import { fn_name } from "./fn_name.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { english_words_lookup_from_lines } from "./english_words_lookup_from_lines.mjs";
export async function english_words_system_lookup() {
  ("The English words this machine's own word list holds, in small letters, split into ordinary words and names. How the lines are read is ",
    fn_name("english_words_lookup_from_lines"),
    ", which a page shares.");
  let lines = await file_read_lines("/usr/share/dict/american-english");
  let lookup = english_words_lookup_from_lines(lines);
  return lookup;
}
