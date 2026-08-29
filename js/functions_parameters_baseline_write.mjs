import { functions_parameters_baseline_path } from "./functions_parameters_baseline_path.mjs";
import { functions_parameters_oversize_names } from "./functions_parameters_oversize_names.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_parameters_baseline_write() {
  "record which functions already ask a caller to line up more things than the ceiling allows, so the gate can refuse the next one without refusing the ones already here";
  "run this after collapsing a row into a record, to shrink the record - never to make a newly grown one green, which is the one thing it must not be used for";
  let path = functions_parameters_baseline_path();
  let named = await functions_parameters_oversize_names();
  await baseline_known_growth_assert(
    named,
    path,
    "these functions now ask a caller to line up more things than the ceiling allows and did not before - gather the row into one record rather than recording the row as known",
  );
  let r = await baseline_known_write(named, path);
  return r;
}
