import { functions_prose_sequence_names } from "./functions_prose_sequence_names.mjs";
import { functions_prose_sequence_baseline_growth_assert } from "./functions_prose_sequence_baseline_growth_assert.mjs";
import { functions_prose_sequence_baseline_path } from "./functions_prose_sequence_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_prose_sequence_baseline_write() {
  "Rewrite this ratchet's record from what offends right now. For seeding it once, and for shrinking it after a repair - never for blessing a new offence, which is the one thing the gate exists to refuse.";
  let known = await functions_prose_sequence_names();
  await functions_prose_sequence_baseline_growth_assert(known);
  let path = functions_prose_sequence_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
