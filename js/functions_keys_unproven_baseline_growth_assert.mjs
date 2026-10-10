import { functions_keys_unproven_baseline_path } from "./functions_keys_unproven_baseline_path.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { functions_keys_unproven_versus_baseline } from "./functions_keys_unproven_versus_baseline.mjs";
export async function functions_keys_unproven_baseline_growth_assert(known) {
  "Refuse to record an unproven key the baseline did not already hold. The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops keys.";
  let path = functions_keys_unproven_baseline_path();
  await baseline_growth_assert_generic(
    known,
    path,
    functions_keys_unproven_versus_baseline,
    "these keys reach a record by brackets unproven now and did not before - check the key first, or reach the record through the core accessors, rather than recording it as known",
  );
}
