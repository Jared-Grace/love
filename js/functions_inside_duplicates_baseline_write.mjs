import { functions_inside_duplicates_baseline_path } from "./functions_inside_duplicates_baseline_path.mjs";
import { functions_inside_duplicate_names } from "./functions_inside_duplicate_names.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_inside_duplicates_baseline_write() {
  "record which groups of functions already share a run of work somewhere inside them, so the gate can refuse the next one without refusing the ones already here";
  "run this after collapsing a group, to shrink the record - never to make a new group green, which is the one thing it must not be used for";
  let path = functions_inside_duplicates_baseline_path();
  let named = await functions_inside_duplicate_names();
  let r = await baseline_known_write(named, path);
  return r;
}
