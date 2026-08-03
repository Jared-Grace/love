import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_work_size_baseline_write() {
  ("record which functions already hold more lines of work than the ceiling allows, so the gate can refuse the next one without refusing the ones already here");
  ("run this after cutting a function down, to shrink the record - never to make a newly grown one green, which is the one thing it must not be used for");
  let path = functions_work_size_baseline_path();
  let named = await functions_work_oversize_names();
  await baseline_known_growth_assert(
    named,
    path,
    "these functions now hold more lines of work than the ceiling allows and did not before - give the shared runs inside them their own names rather than recording the size as known",
  );
  let r = await baseline_known_write(named, path);
  return r;
}
