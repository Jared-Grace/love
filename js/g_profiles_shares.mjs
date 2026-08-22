import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
import { add_1 } from "./add_1.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function g_profiles_shares(profiles) {
  "What share of a set of dealt people each value on each axis actually holds, out of a hundred per axis, in the same shape the target table is written in.";
  "IT IS THE SAME SHAPE AS THE TARGET ON PURPOSE, so the two can be compared value by value without either side knowing which axes there are. Add an axis to the deck and both tables grow one together; a reader that named its axes here would go on comparing the old ones and say nothing at all about the new one.";
  "AN EMPTY SET ANSWERS AN EMPTY TABLE rather than dividing by nobody. Nobody written yet is the ordinary first case and not a fault, and a table of noughts would be a lie of a different kind: it would say every value sits at nought per cent of a cast, when there is no cast for anything to be a share of.";
  "ONLY VALUES SOMEBODY ACTUALLY HOLDS GET A LINE, because a value nobody holds is at nought and a reader comparing against a target has to read a missing line as nought regardless - a value the target has never heard of can turn up here the moment the deck grows one.";
  let counted = {};
  let total = 0;
  for (let profile of profiles) {
    total = add_1(total);
    let names = object_property_names(profile);
    for (let name of names) {
      let held = profile[name];
      let axis = property_get_or(counted, name, null);
      if (equal(axis, null)) {
        axis = {};
        property_set(counted, name, axis);
      }
      let so_far = property_get_or(axis, held, 0);
      let one_more = add_1(so_far);
      property_set(axis, held, one_more);
    }
  }
  let r = {};
  let names = object_property_names(counted);
  for (let name of names) {
    let axis = property_get_or(counted, name, null);
    let shares = {};
    let values = object_property_names(axis);
    for (let value of values) {
      let held = property_get_or(axis, value, 0);
      let hundredths = multiply(held, 100);
      let share = divide(hundredths, total);
      property_set(shares, value, share);
    }
    property_set(r, name, shares);
  }
  return r;
}
