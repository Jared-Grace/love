import { permission_grants_baseline_path } from "./permission_grants_baseline_path.mjs";
import { permission_grants_baseline_growth_assert } from "./permission_grants_baseline_growth_assert.mjs";
import { permission_grants_flagged } from "./permission_grants_flagged.mjs";
import { permission_grants_counted } from "./permission_grants_counted.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function permission_grants_baseline_write() {
  "rewrite the grant baseline from the standing grants that fail the check right now — for seeding the ratchet once, and for shrinking it after a rule has been taken out or a function narrowed";
  "never for blessing a new grant, which is the one thing the gate exists to refuse, so growing the file throws instead of writing";
  let flagged = await permission_grants_flagged();
  let known = permission_grants_counted(flagged);
  await permission_grants_baseline_growth_assert(known);
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  let path = permission_grants_baseline_path();
  await file_overwrite(path, json);
  let r = known.length;
  return r;
}
