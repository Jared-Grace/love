import { functions_repack_only_names } from "./functions_repack_only_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { functions_repack_only_baseline_path } from "./functions_repack_only_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
export async function functions_repack_only_added() {
  arguments_assert(arguments, 0);
  ("The functions whose whole product is a record they took apart and put back together that the repo was not already carrying - the ones written since the ratchet was set. Read-only.");
  ("The ratchet holds its record because folding the ones that were already there would be a change to bodies people are reading, and there are too many of them for one sweep not to collide with everybody. So the ones already written down are not a fault to repair; only what is new is, and this is the difference between the two.");
  ("The same difference the gate takes to decide whether to stop somebody, asked on its own so that a walk that puts these back where they came from can find its own set rather than be handed a list. A list handed in goes stale the moment anybody writes another one; this cannot.");
  let offenders = await functions_repack_only_names();
  let path = functions_repack_only_baseline_path();
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  return added;
}
