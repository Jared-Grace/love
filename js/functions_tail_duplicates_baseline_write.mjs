import { functions_tail_duplicate_names } from "./functions_tail_duplicate_names.mjs";
import { functions_tail_duplicates_baseline_path } from "./functions_tail_duplicates_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_tail_duplicates_baseline_write() {
  "record which groups of functions already end in the same run of work, so the gate can refuse the next one without refusing the ones already here";
  "run this after collapsing a group, to shrink the record - never to make a new group green, which is the one thing it must not be used for";
  let named = await functions_tail_duplicate_names();
  let path = functions_tail_duplicates_baseline_path();
  let r = await baseline_known_write(named, path);
  return r;
}
