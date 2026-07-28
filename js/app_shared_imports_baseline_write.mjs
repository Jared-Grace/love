import { app_shared_app_specific_imports } from "./app_shared_app_specific_imports.mjs";
import { app_shared_imports_baseline_path } from "./app_shared_imports_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_shared_imports_baseline_write() {
  "Rewrite the record of shared units reaching into one app from what the repo";
  "carries right now. For seeding it once and for shrinking it after one has been";
  "cleared - never for blessing a new one, which is the single thing the gate";
  "exists to refuse.";
  let known = await app_shared_app_specific_imports();
  let path2 = app_shared_imports_baseline_path();
  await baseline_known_growth_assert(
    known,
    path2,
    "these shared units reach into one app now and did not before - move what they need into shared code rather than recording it as known",
  );
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  let path = app_shared_imports_baseline_path();
  await file_overwrite(path, json);
  let r = known.length;
  return r;
}
