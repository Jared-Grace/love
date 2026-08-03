import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_duplicates_baseline_path } from "./functions_duplicates_baseline_path.mjs";
export async function functions_duplicates_baseline_growth_assert(known) {
  "Refuse to record a name the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = functions_duplicates_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions share their work with another name now and did not before - collapse the pair onto one name rather than recording it as known",
  );
}
