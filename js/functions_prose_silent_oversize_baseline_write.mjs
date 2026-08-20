import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { functions_prose_silent_oversize_names } from "./functions_prose_silent_oversize_names.mjs";
import { functions_prose_silent_oversize_baseline_growth_assert } from "./functions_prose_silent_oversize_baseline_growth_assert.mjs";
import { functions_prose_silent_oversize_baseline_path } from "./functions_prose_silent_oversize_baseline_path.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_prose_silent_oversize_baseline_write() {
  "Rewrite the silent-oversize-function baseline from what is wordless right now. For seeding the ratchet once, and for shrinking it after a function has been described or cut back down under the floor - never for blessing a new silence, which is the one thing the gate exists to refuse.";
  arguments_assert(arguments, 0);
  let told = await functions_prose_silent_oversize_names();
  let known = property_get(told, "names");
  await functions_prose_silent_oversize_baseline_growth_assert(known);
  let path = functions_prose_silent_oversize_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
