import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_verse_marks_displaced_letter_path() {
  "Where the public list of verse marks whose id disagrees with the number they print is kept, for a letter to link to.";
  arguments_assert(arguments, 0);
  ("Kept under the found folder rather than beside the letter, because it is measured rather than written, and a rebuild must be free to replace it whole.");
  let f_name = fn_name("ebible_verse_marks_displaced_measure");
  let path = text_combine_multiple(["data/found/", f_name, ".json"]);
  return path;
}
