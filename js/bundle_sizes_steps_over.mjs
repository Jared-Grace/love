import { bundle_size_step_ceiling } from "./bundle_size_step_ceiling.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function bundle_sizes_steps_over(now, recorded) {
  "Which bundles grew, in one step, by more than a bundle may.";
  "A bundle that has shrunk is not an offense and neither is one that stayed still, so only the growing side is measured. A bundle nobody has a size for yet has not grown either - it has arrived, and the first sight of a thing is not a step.";
  "A bundle that has gone from the folder is simply not asked about, because it is the sizes on disk that are walked rather than the sizes remembered.";
  let ceiling = bundle_size_step_ceiling();
  function over_or_null(entry) {
    let name = property_get(entry, "name");
    let size = property_get(entry, "size");
    let before = list_find_property_or_null(recorded, "name", name);
    let unknown = null_is(before);
    if (unknown) {
      return null;
    }
    let was = property_get(before, "size");
    let grew = subtract(size, was);
    let over = greater_than(grew, ceiling);
    if (over) {
      let offense = {
        name,
        was,
        size,
        grew,
      };
      return offense;
    }
    return null;
  }
  let steps = list_map_filter_null_not_is(now, over_or_null);
  return steps;
}
