import { baseline_known_write } from "./baseline_known_write.mjs";
import { atoms_unexampled } from "./atoms_unexampled.mjs";
import { atoms_unexampled_baseline_growth_assert } from "./atoms_unexampled_baseline_growth_assert.mjs";
import { atoms_unexampled_baseline_path } from "./atoms_unexampled_baseline_path.mjs";
export async function atoms_unexampled_baseline_write() {
  "Rewrite the undemonstrated-atom baseline from what the instructions promise and the corpus never runs right now. For seeding the ratchet once, and for shrinking it after an example has been written - never for blessing a new gap, which is the one thing the gate exists to refuse.";
  let known = await atoms_unexampled();
  await atoms_unexampled_baseline_growth_assert(known);
  let path = atoms_unexampled_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
