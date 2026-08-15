import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_sum } from "./list_sum.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { multiply } from "./multiply.mjs";
import { list_set } from "./list_set.mjs";
export function g_profiles_deal_weights_fit(
  passes,
  names,
  groups,
  owed,
  weights,
  left,
  smallest,
) {
  arguments_assert(arguments, 7);
  ("Rescales the weights in place, one axis at a time, as many times over as it is told - so that every axis ends up near the share it is still owed at once.");
  ("The repeating is here rather than at the caller because a single sweep is not a meaningful answer. Rescaling the last axis unsettles the first, so a caller handed one sweep would have weights fitted to one axis and wrong on the rest, and would have to know to ask again - which is knowledge about the fitting, not about the deal.");
  for (let pass = 0; less_than(pass, passes); pass++) {
    for (let name of names) {
      let by_value = property_get(groups, name);
      let axis_owed = property_get(owed, name);
      let values = object_property_names(by_value);
      let total = list_sum(weights);
      for (let value of values) {
        let bucket = property_get(by_value, value);
        let current = 0;
        for (let index of bucket) {
          current = add(current, weights[index]);
        }
        let gone = equal(current, 0);
        if (gone) {
          continue;
        }
        let still = property_get(axis_owed, value);
        let overdrawn = less_than(still, 0);
        if (overdrawn) {
          still = 0;
        }
        let share = divide(still, left);
        let scale = multiply_divide(share, total, current);
        let satisfied = equal(scale, 0);
        if (satisfied) {
          scale = smallest;
        }
        for (let index of bucket) {
          let scaled = multiply(weights[index], scale);
          list_set(weights, index, scaled);
        }
      }
    }
  }
}
