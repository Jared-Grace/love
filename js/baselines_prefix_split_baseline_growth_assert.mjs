import { baselines_prefix_split_baseline_path } from "./baselines_prefix_split_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function baselines_prefix_split_baseline_growth_assert(known) {
  "Refuse to record an offender the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = baselines_prefix_split_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these as known would bless a new offence rather than repair it - a ratchet's record and its rewriter are filed under different names here, so somebody reading one cannot guess the other - rename the rewriter to share the record's prefix",
  );
}
