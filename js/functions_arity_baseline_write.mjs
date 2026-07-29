import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { arity_baseline_path } from "./arity_baseline_path.mjs";
import { functions_arity_mismatches } from "./functions_arity_mismatches.mjs";
export async function functions_arity_baseline_write() {
  "Rewrite the wrong-argument-count ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a call has been corrected - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await functions_arity_mismatches();
  let path = arity_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these calls hand a repo function the wrong number of things and did not before - give it what it declares, or change what it declares and every call with it",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
