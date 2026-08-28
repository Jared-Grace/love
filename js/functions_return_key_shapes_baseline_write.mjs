import { arguments_assert } from "./arguments_assert.mjs";
import { functions_return_key_shapes_disagree } from "./functions_return_key_shapes_disagree.mjs";
import { property_get } from "./property_get.mjs";
import { functions_return_key_shapes_baseline_growth_assert } from "./functions_return_key_shapes_baseline_growth_assert.mjs";
import { functions_return_key_shapes_baseline_path } from "./functions_return_key_shapes_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_return_key_shapes_baseline_write() {
  arguments_assert(arguments, 0);
  ("Rewrite the record of which functions answer with different sets of keys, from what the repo does right now. For seeding the ratchet once, and for shrinking it after a function's ways out have been made to agree - never for blessing a new disagreement, which is the one thing the gate exists to refuse.");
  ("Growing the file is refused rather than written. Seeding and shrinking are both honest, but a function that disagrees today and did not yesterday is the offense the gate exists to catch, and rewriting the record over it would turn the one red light into a green one with nothing left to show it happened.");
  ("The sweep answers with how many functions it read as well as who offended, and only the offenders are recorded. The count is for a reader deciding whether a clean answer means anything; what goes in the file is the offense.");
  let walked = await functions_return_key_shapes_disagree();
  let known = property_get(walked, "offenders");
  await functions_return_key_shapes_baseline_growth_assert(known);
  let path = functions_return_key_shapes_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
