import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_code_screens_diff_removed(r2) {
  arguments_assert(arguments, 1);
  let check_current = property_get(r2, "check_current");
  let changed = property_get(r2, "changed");
  let current_map = property_get(r2, "current_map");
  let current = property_get(r2, "current");
  let baseline = property_get(r2, "baseline");
  let added = property_get(r2, "added");
  each(current, check_current);
  let removed = [];
  let r = {
    changed,
    current_map,
    baseline,
    added,
    removed,
  };
  return r;
}
