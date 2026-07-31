import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export async function functions_run_duplicates_generic(size, fn_shape) {
  arguments_assert(arguments, 2);
  ("Every group of functions sharing a run of work of this length, grouped by that");
  ("run - the shape reader says which end of the function the run is taken from.");
  ("Its neighbour asks whether two functions are the same function, which finds a");
  ("twin and nothing else. Duplication is not usually whole: two screens each began");
  ("with the same five lines clearing the page and building the reading column, and");
  ("each was a different screen by every other measure the repo had.");
  ("This reads and reports and changes nothing. Whether a group is one helper");
  ("waiting to be written, or several functions that merely begin or finish alike,");
  ("is a judgment - and the collapse is the ordinary one, a new function holding the");
  ("shared run and a call to it where each run stood.");
  let love = await repo_functions_names("love");
  let by_shape = {};
  for (let f_name of love) {
    let shape = await fn_shape(f_name, size);
    let none = text_empty_is(shape);
    if (none) {
      continue;
    }
    let known = property_exists(by_shape, shape);
    if (known) {
      let names = property_get(by_shape, shape);
      list_add(names, f_name);
    } else {
      by_shape[shape] = [f_name];
    }
  }
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
