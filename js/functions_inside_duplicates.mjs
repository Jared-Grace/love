import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_inside_shapes } from "./function_inside_shapes.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
export async function functions_inside_duplicates(size) {
  arguments_assert(arguments, 1);
  ("Every group of functions sharing a run of work of this length, wherever the run sits in each of them, grouped by that run.");
  ("The third of three readings, and the one with the most to find. Its neighbours ask a function for the shape of its opening and the shape of its ending, which is one shape each and so cheap enough to group a whole repo by; this asks for every run of that length, so a long function answers with many. A run touching neither end is invisible to both of them, and a long function is precisely where a shared run is most likely to sit in the middle - which is why the answer here is largest exactly where a reader most wants it.");
  ("A group counts a function once however many times the run occurs inside it, because what is being reported is which functions have met, not how often.");
  ("This reads and reports and changes nothing. Whether a group is one helper waiting to be written, or several functions that merely pass through the same few lines, is a judgment - and the collapse is the ordinary one, a new function holding the shared run and a call to it where each run stood.");
  let love = await repo_functions_names("love");
  let by_shape = {};
  for (let f_name of love) {
    let shapes = await function_inside_shapes(f_name, size);
    for (let shape of shapes) {
      let known = property_exists(by_shape, shape);
      if (known) {
        let names = property_get(by_shape, shape);
        list_add_unique(names, f_name);
      } else {
        by_shape[shape] = [f_name];
      }
    }
  }
  let groups = shapes_shared_groups(by_shape);
  return groups;
}
