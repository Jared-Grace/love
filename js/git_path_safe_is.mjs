import { not } from "./not.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
export function git_path_safe_is(f_path) {
  "A path travels to git inside a line of command text that gets split on spaces";
  "and double quotes, so a path carrying either one arrives as two paths and git";
  "is asked about files that do not exist.";
  "Nothing in this repo is named that way, so a single unsafe path is a sign that";
  "something unexpected is happening — reason enough to hand the whole commit back";
  "to the plain sweep rather than to quietly drop the file.";
  let unsafe = [" ", '"', "'"];
  let bad = text_includes_multiple_is(f_path, unsafe);
  let safe = not(bad);
  return safe;
}
