import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_name_word_repeated_baseline_path } from "./functions_name_word_repeated_baseline_path.mjs";
export async function functions_name_word_repeated_baseline_growth_assert(
  known,
) {
  "Refuse to record a name the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = functions_name_word_repeated_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these names say one word twice running and did not before - drop the second telling, which narrows nothing, rather than recording the name as known",
  );
}
