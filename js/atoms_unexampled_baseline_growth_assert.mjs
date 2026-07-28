import { atoms_unexampled_baseline_path } from "./atoms_unexampled_baseline_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function atoms_unexampled_baseline_growth_assert(known) {
  "Refuse to record an atom the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = atoms_unexampled_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these atoms are documented and undemonstrated now and were not before - write an example for each, or take the row out of the table, rather than recording the gap as known",
  );
}
