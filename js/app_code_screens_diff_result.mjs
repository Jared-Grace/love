import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_code_screens_diff_result(r, check_removed) {
  arguments_assert(arguments, 2);
  let changed = property_get(r, "changed");
  let baseline = property_get(r, "baseline");
  let added = property_get(r, "added");
  let removed = property_get(r, "removed");
  each(baseline, check_removed);
  let result = {
    changed,
    added,
    removed,
  };
  return result;
}
