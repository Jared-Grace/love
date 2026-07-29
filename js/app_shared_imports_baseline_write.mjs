import { baseline_known_write } from "./baseline_known_write.mjs";
import { app_shared_app_specific_imports } from "./app_shared_app_specific_imports.mjs";
import { app_shared_imports_baseline_path } from "./app_shared_imports_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_shared_imports_baseline_write() {
  "Rewrite the record of shared units reaching into one app from what the repo";
  "carries right now. For seeding it once and for shrinking it after one has been";
  "cleared - never for blessing a new one, which is the single thing the gate";
  "exists to refuse.";
  let known = await app_shared_app_specific_imports();
  let path = app_shared_imports_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these shared units reach into one app now and did not before - move what they need into shared code rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
