import { permission_grants_baseline_path } from "./permission_grants_baseline_path.mjs";
import { permission_grants_baseline_read } from "./permission_grants_baseline_read.mjs";
import { permission_grants_versus_baseline } from "./permission_grants_versus_baseline.mjs";
import { file_exists } from "./file_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function permission_grants_baseline_growth_assert(counted) {
  "refuse to record a grant the baseline did not already hold, or a grant failing for more reasons than it held";
  "a ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job";
  "the first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names or reasons";
  let path = permission_grants_baseline_path();
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    return;
  }
  let recorded = await permission_grants_baseline_read();
  let change = permission_grants_versus_baseline(counted, recorded);
  let added = property_get(change, "added");
  let worsened = property_get(change, "worsened");
  list_empty_is_assert_json(added, {
    hint: "these grants fail the check now and did not before — take the rule out, or narrow the function, rather than recording the grant as known",
    added,
  });
  list_empty_is_assert_json(worsened, {
    hint: "these grants fail for more reasons than the baseline holds — the new reason is the thing to fix, not to record",
    worsened,
  });
}
