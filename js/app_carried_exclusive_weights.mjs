import { app_carried_names } from "./app_carried_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_weights } from "./functions_names_weights.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_pop } from "./list_pop.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_carried_exclusive_weights(a_main) {
  "$plain a_main";
  "For one app, what its bundle holds only because of each name it carries - the weight that would go if that one name stopped being reached and nothing else changed.";
  "★ A BRANCH NOBODY WALKS IS STILL CARRIED, AND THE QUESTION IN FRONT OF IT NEED NOT BE ABOUT THE ENVIRONMENT. The walk that finds a page's build-machine half turns aside wherever somebody asked which environment they were in, and it is right about those. A plain question about what this reader would rather see looks like nothing at all to it - and the picture bible was carrying better than a third of itself behind one of those, a key that stays hidden until somebody presses it. So this asks the question with no guard in it at all: what hangs off this name and off nothing else.";
  "The number is what a cut would free rather than what the name itself costs. A name whose whole subtree is shared with the rest of the page comes back at its own size alone, which is the honest answer - taking it away would free only itself.";
  "It names a place to look and never a saving. The bytes are the source file's, so prose weighs the same as work here for the reason written where the weighing is done, and whether a branch is really optional is a question about people rather than about imports - which is why nothing here decides anything.";
  arguments_assert(arguments, 1);
  let carried = await app_carried_names(
    a_main,
    "this entry point reached nothing at all, so nothing was weighed - the name is the thing to look at, not the empty answer",
  );
  let weights = await functions_names_weights(carried);
  let sizes = {};
  for (let weight of weights) {
    let weighed = property_get(weight, "f_name");
    let size = property_get(weight, "size");
    property_set(sizes, weighed, size);
  }
  let edges = {};
  async function edges_lambda(f_name) {
    let imports = await function_imports(f_name);
    property_set(edges, f_name, imports);
  }
  await list_map_unordered_async(carried, edges_lambda);
  function reached_without(blocked) {
    let seen = {};
    let unread = [a_main];
    while (list_empty_not_is(unread)) {
      let f_name = list_pop(unread);
      let skip = equal(f_name, blocked);
      if (skip) {
        continue;
      }
      let already = property_get_or_null(seen, f_name);
      if (already) {
        continue;
      }
      let imports = property_get_or_null(edges, f_name);
      let outside = null_is(imports);
      if (outside) {
        continue;
      }
      property_set(seen, f_name, true);
      for (let name of imports) {
        list_add(unread, name);
      }
    }
    return seen;
  }
  let rows = [];
  for (let blocked of carried) {
    let itself = equal(blocked, a_main);
    if (itself) {
      continue;
    }
    let seen = reached_without(blocked);
    let bytes = 0;
    let count = 0;
    for (let f_name of carried) {
      let kept = property_get_or_null(seen, f_name);
      if (kept) {
        continue;
      }
      let size = property_get(sizes, f_name);
      bytes = add(bytes, size);
      count = add(count, 1);
    }
    let row = {
      f_name: blocked,
      bytes,
      functions: count,
    };
    list_add(rows, row);
  }
  function bytes_of(row) {
    let bytes = property_get(row, "bytes");
    return bytes;
  }
  let sorted = list_sort_number_mapper_reverse(rows, bytes_of);
  return sorted;
}
