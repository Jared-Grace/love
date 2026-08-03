import { functions_parameters_unread_baseline_path } from "./functions_parameters_unread_baseline_path.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { functions_parameters_unread_versus_baseline } from "./functions_parameters_unread_versus_baseline.mjs";
export async function functions_parameters_unread_baseline_growth_assert(
  known,
) {
  "Refuse to record a parameter the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = functions_parameters_unread_baseline_path();
  await baseline_growth_assert_generic(
    known,
    path,
    functions_parameters_unread_versus_baseline,
    "these parameters are read by nothing now and were not before - read them or take them out rather than recording them as known",
  );
}
