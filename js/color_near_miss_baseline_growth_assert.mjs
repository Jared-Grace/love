import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { color_near_miss_baseline_path } from "./color_near_miss_baseline_path.mjs";
export async function color_near_miss_baseline_growth_assert(known) {
  "Refuse to record a colour pair the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops pairs.";
  let path = color_near_miss_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these colours read as one colour now and did not before — reuse the existing colour rather than recording the near miss as known",
  );
}
