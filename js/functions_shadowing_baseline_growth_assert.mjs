import { shadowing_baseline_path } from "./shadowing_baseline_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { shadowing_baseline_read } from "./shadowing_baseline_read.mjs";
import { functions_shadowing_versus_baseline } from "./functions_shadowing_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function functions_shadowing_baseline_growth_assert(known) {
  "Refuse to record a name the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = shadowing_baseline_path();
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    return;
  }
  let recorded = await shadowing_baseline_read();
  let change = functions_shadowing_versus_baseline(known, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint: "these names shadow now and did not before — fix the shadowing rather than recording it as known",
    added,
  });
}
