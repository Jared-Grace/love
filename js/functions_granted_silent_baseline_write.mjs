import { baseline_known_write } from "./baseline_known_write.mjs";
import { functions_granted_silent } from "./functions_granted_silent.mjs";
import { functions_granted_silent_baseline_growth_assert } from "./functions_granted_silent_baseline_growth_assert.mjs";
import { functions_granted_silent_baseline_path } from "./functions_granted_silent_baseline_path.mjs";
export async function functions_granted_silent_baseline_write() {
  "Rewrite the silent-granted-command baseline from what is granted and wordless right now. For seeding the ratchet once, and for shrinking it after an account has been written - never for blessing a new silence, which is the one thing the gate exists to refuse.";
  let known = await functions_granted_silent();
  await functions_granted_silent_baseline_growth_assert(known);
  let path = functions_granted_silent_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
