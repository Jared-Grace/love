import { functions_duplicates_names } from "./functions_duplicates_names.mjs";
import { functions_duplicates_baseline_growth_assert } from "./functions_duplicates_baseline_growth_assert.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { duplicates_baseline_path } from "./duplicates_baseline_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function functions_duplicates_baseline_write() {
  "Rewrite the duplicate ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a pair has been collapsed onto one name - never for blessing a new twin, which is the one thing the gate exists to refuse.";
  let known = await functions_duplicates_names();
  await functions_duplicates_baseline_growth_assert(known);
  let path = duplicates_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
