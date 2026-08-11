import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_calls_unawaited_baseline_path } from "./functions_calls_unawaited_baseline_path.mjs";
import { functions_calls_unawaited_names } from "./functions_calls_unawaited_names.mjs";
export async function functions_calls_unawaited_baseline_write() {
  "Rewrite the nothing-waits-for-it ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a call has been waited for - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await functions_calls_unawaited_names();
  let path = functions_calls_unawaited_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions hold a call nothing waits for, and did not before - write the wait in, or hand the call to something that waits for it",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
