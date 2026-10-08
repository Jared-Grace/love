import { permission_grants_dispatch_unfenced_names } from "./permission_grants_dispatch_unfenced_names.mjs";
import { permission_grants_dispatch_unfenced_baseline_growth_assert } from "./permission_grants_dispatch_unfenced_baseline_growth_assert.mjs";
import { permission_grants_dispatch_unfenced_baseline_path } from "./permission_grants_dispatch_unfenced_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function permission_grants_dispatch_unfenced_baseline_write() {
  "Rewrite this ratchet's record from what offends right now. For seeding it once, and for shrinking it after a repair - never for blessing a new offence, which is the one thing the gate exists to refuse.";
  let known = await permission_grants_dispatch_unfenced_names();
  await permission_grants_dispatch_unfenced_baseline_growth_assert(known);
  let path = permission_grants_dispatch_unfenced_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
