import { baselines_prefix_split } from "./baselines_prefix_split.mjs";
import { baselines_prefix_split_baseline_growth_assert } from "./baselines_prefix_split_baseline_growth_assert.mjs";
import { baselines_prefix_split_baseline_path } from "./baselines_prefix_split_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function baselines_prefix_split_baseline_write() {
  "Rewrite this ratchet's record from what offends right now. For seeding it once, and for shrinking it after a repair - never for blessing a new offence, which is the one thing the gate exists to refuse.";
  let known = await baselines_prefix_split();
  await baselines_prefix_split_baseline_growth_assert(known);
  let path = baselines_prefix_split_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
