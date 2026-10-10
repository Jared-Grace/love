import { functions_keys_unproven } from "./functions_keys_unproven.mjs";
import { functions_keys_unproven_baseline_growth_assert } from "./functions_keys_unproven_baseline_growth_assert.mjs";
import { functions_keys_unproven_baseline_path } from "./functions_keys_unproven_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_keys_unproven_baseline_write() {
  "rewrite the unproven-key baseline from what the repo leaves unproven right now. For seeding the ratchet once, and for shrinking it after a key has been checked - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await functions_keys_unproven();
  await functions_keys_unproven_baseline_growth_assert(known);
  let path = functions_keys_unproven_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
