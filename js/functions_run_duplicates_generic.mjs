import { shapes_shared_groups } from "./shapes_shared_groups.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
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
  let groups = shapes_shared_groups(by_shape);
  return groups;
}
