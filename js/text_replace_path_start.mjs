import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split } from "./text_split.mjs";
import { text_last } from "./text_last.mjs";
import { text_character_name_part_is } from "./text_character_name_part_is.mjs";
export function text_replace_path_start(t, before, after) {
  "Some writing with every place that names one folder at the start of a path saying a different folder instead.";
  "Only a naming that begins where a name may begin is changed. The same letters sitting on the end of a longer word are left exactly as they were, which is the whole difference between this and replacing the run everywhere: `py/` also reads out of `wrappy/`, and replacing it there turned an address that worked into one that leads nowhere.";
  "A folder mark before the name does not stop it, because that is how a path spelled from somewhere else names this same folder - `./py/` and `/home/somebody/love/py/` are both it. A folder of the same name nested inside another folder is the price of that, and it is why the caller is handed back the list of files it changed rather than a count.";
  let from = text_combine(before, "/");
  let to = text_combine(after, "/");
  let pieces = text_split(t, from);
  let written = "";
  let started = false;
  for (let piece of pieces) {
    if (started) {
      let carried = false;
      let blank = text_empty_is(written);
      if (not(blank)) {
        let end = text_last(written);
        carried = text_character_name_part_is(end);
      }
      let joiner = to;
      if (carried) {
        joiner = from;
      }
      written = text_combine_multiple([written, joiner, piece]);
      continue;
    }
    written = piece;
    started = true;
  }
  return written;
}
