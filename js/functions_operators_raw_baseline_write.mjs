import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { operators_raw_baseline_path } from "./operators_raw_baseline_path.mjs";
import { functions_operators_raw_names } from "./functions_operators_raw_names.mjs";
export async function functions_operators_raw_baseline_write() {
  "Rewrite the raw-operator baseline from what the repo carries right now. For seeding the ratchet once, and for shrinking it after a function has been put through the canonicalizing pass - never for blessing a new one, which is the one thing the gate exists to refuse.";
  "Shrinking it is the ordinary case here rather than a rare cleanup, because every run of the sweep that repairs a few of these leaves the record holding names that no longer offend.";
  let known = await functions_operators_raw_names();
  let path = operators_raw_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions spell their operators as symbols now and did not before - run the canonicalizing pass over them rather than recording them as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
