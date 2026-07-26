import { permission_grants_baseline_growth_assert } from "./permission_grants_baseline_growth_assert.mjs";
import { permission_grants_baseline_file_write } from "./permission_grants_baseline_file_write.mjs";
import { permission_grants_flagged } from "./permission_grants_flagged.mjs";
import { permission_grants_counted } from "./permission_grants_counted.mjs";
export async function permission_grants_baseline_write() {
  "rewrite the grant baseline from the standing grants that fail the check right now — for seeding the ratchet once, and for shrinking it after a rule has been taken out or a function narrowed";
  "never for blessing a new grant, which is the one thing the gate exists to refuse, so growing the file throws instead of writing";
  let flagged = await permission_grants_flagged();
  let known = permission_grants_counted(flagged);
  await permission_grants_baseline_growth_assert(known);
  let r = await permission_grants_baseline_file_write(known);
  return r;
}
