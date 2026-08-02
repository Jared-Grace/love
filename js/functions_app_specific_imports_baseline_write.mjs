import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_app_specific_imports } from "./functions_app_specific_imports.mjs";
import { functions_app_specific_imports_baseline_path } from "./functions_app_specific_imports_baseline_path.mjs";
export async function functions_app_specific_imports_baseline_write() {
  "Rewrite the record of functions belonging to no app that reach into one app, from what the repo carries right now. For shrinking it after one has been cleared - never for blessing a new one, which is the single thing the gate exists to refuse.";
  let known = await functions_app_specific_imports();
  let path = functions_app_specific_imports_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions belong to no app and reach into one now, and did not before - move what they need into shared code rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
