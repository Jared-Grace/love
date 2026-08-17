import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_screens_diff_changed } from "./app_code_screens_diff_changed.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_screens_diff_added(current_path, baseline_json) {
  arguments_assert(arguments, 2);
  let r = await app_code_screens_diff_changed(current_path, baseline_json);
  let changed = property_get(r, "changed");
  let current_map = property_get(r, "current_map");
  let baseline_map = property_get(r, "baseline_map");
  let masked_of = property_get(r, "masked_of");
  let current = property_get(r, "current");
  let baseline = property_get(r, "baseline");
  let added = [];
  let r2 = {
    changed,
    current_map,
    baseline_map,
    masked_of,
    current,
    baseline,
    added,
  };
  return r2;
}
