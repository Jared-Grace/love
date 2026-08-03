import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_unreachable_statements_baseline_path } from "./functions_unreachable_statements_baseline_path.mjs";
import { functions_unreachable_statements_names } from "./functions_unreachable_statements_names.mjs";
export async function functions_unreachable_statements_baseline_write() {
  "Rewrite the never-runs ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a dead line has been dealt with - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await functions_unreachable_statements_names();
  let path = functions_unreachable_statements_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions hold work written under a line that always leaves, and did not before - move the work above the line, or delete it if the line above it is the answer",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
