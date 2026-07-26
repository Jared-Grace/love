import { functions_shadowing_baseline_path } from "./functions_shadowing_baseline_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function functions_shadowing_baseline_growth_assert(known) {
  "Refuse to record a name the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would happen at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, as is any rewrite that only drops names.";
  let path = functions_shadowing_baseline_path();
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    return;
  }
  let baseline = await file_read_json(path);
  let recorded = property_get(baseline, "known");
  let recorded_names = list_map_property(recorded, "name");
  let names = list_map_property(known, "name");
  let added = list_difference(names, recorded_names);
  list_empty_is_assert_json(added, {
    hint: "these names shadow now and did not before — fix the shadowing rather than recording it as known",
    added,
  });
}
