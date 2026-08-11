import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { functions_cross_app_imports } from "./functions_cross_app_imports.mjs";
import { functions_cross_app_imports_baseline_path } from "./functions_cross_app_imports_baseline_path.mjs";
export async function functions_cross_app_imports_baseline_write() {
  "Rewrite the record of one app reaching into another, from what the repo carries right now. For shrinking it after one has been cleared - never for blessing a new one, which is the single thing the gate exists to refuse.";
  let known = await functions_cross_app_imports();
  let path = functions_cross_app_imports_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "one app reaches into another now and did not before - move what it needs into shared code rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
