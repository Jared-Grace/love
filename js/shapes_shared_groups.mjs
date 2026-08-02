import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
export function shapes_shared_groups(by_shape) {
  arguments_assert(arguments, 1);
  ("Every shape that more than one name was found under, as a group carrying the shape, the names and how many there are - the largest group first.");
  ("Each reading over duplication gathers names under a shape in its own way, and then every one of them narrows and sorts the gathering in exactly the same way. That last half is the part with no judgment in it, so it is written once here; what stays with each reader is the only thing they actually disagree about, which is what counts as a shape.");
  ("A shape only one name was found under is not a finding and is left out, which is what makes the answer readable rather than a list of every shape in the repo.");
  let shapes = properties_get(by_shape);
  let groups = [];
  for (let shape of shapes) {
    let names = property_get(by_shape, shape);
    let shared = list_multiple_is(names);
    if (shared) {
      let count = list_size(names);
      list_add(groups, {
        count,
        names,
        shape,
      });
    }
  }
  function by_count(a, b) {
    let difference = subtract(b.count, a.count);
    return difference;
  }
  groups.sort(by_count);
  return groups;
}
