import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function git_history_heavy_absent_baseline_growth_assert(known) {
  "Refuse to record a path the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops paths.";
  "Refusing matters more here than in most of these, because the thing being blessed would be blessed for ever. A path recorded here is a large file settled into the past of every copy of this repo that will ever be made, and the moment it can still be taken out cheaply is the moment this refuses.";
  let path = git_history_heavy_absent_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would accept a large file into this repo's past for good rather than take it out while that is still easy - drop them from the history instead",
  );
}
