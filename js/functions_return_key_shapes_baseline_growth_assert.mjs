import { arguments_assert } from "./arguments_assert.mjs";
import { functions_return_key_shapes_baseline_path } from "./functions_return_key_shapes_baseline_path.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { functions_return_key_shapes_versus_baseline } from "./functions_return_key_shapes_versus_baseline.mjs";
export async function functions_return_key_shapes_baseline_growth_assert(
  known,
) {
  arguments_assert(arguments, 1);
  ("$plain known");
  ("Refuse to record a function the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.");
  ("The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops functions.");
  let path = functions_return_key_shapes_baseline_path();
  let hint =
    "these functions answer with different sets of keys now and did not before - make the ways out agree rather than recording the disagreement as known";
  await baseline_growth_assert_generic(
    known,
    path,
    functions_return_key_shapes_versus_baseline,
    hint,
  );
}
