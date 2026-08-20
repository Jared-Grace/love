import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_prose_silent_oversize_baseline_path } from "./functions_prose_silent_oversize_baseline_path.mjs";
export async function functions_prose_silent_oversize_baseline_growth_assert(
  known,
) {
  "Refuse to record a function the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  arguments_assert(arguments, 1);
  let path = functions_prose_silent_oversize_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions are big enough to need a sentence and say nothing now, and did not before - write one line saying what each is for, rather than recording the silence as known",
  );
}
