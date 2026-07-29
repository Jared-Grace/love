import { functions_unbound_baseline_growth_assert } from "./functions_unbound_baseline_growth_assert.mjs";
import { unbound_baseline_path } from "./unbound_baseline_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { functions_unbound_names } from "./functions_unbound_names.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function functions_unbound_baseline_write() {
  "rewrite the unbound-name baseline from what the repo reads unbound right now. For seeding the ratchet once, and for shrinking it after a name has been bound or a dead line deleted - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await functions_unbound_names();
  await functions_unbound_baseline_growth_assert(known);
  let path = unbound_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
