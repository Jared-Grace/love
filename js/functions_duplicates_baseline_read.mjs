import { functions_duplicates_baseline_path } from "./functions_duplicates_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
export async function functions_duplicates_baseline_read() {
  "The names that already shared their work with another name when the rule was written. The gate measures against this rather than against zero, so the rule binds what is written today instead of waiting on a judgment about every pair the repo already carries - and the list only ever shrinks, because a name it does not hold fails.";
  let path = functions_duplicates_baseline_path();
  let known = await baseline_known_read(path);
  return known;
}
