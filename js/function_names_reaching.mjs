import { arguments_assert } from "./arguments_assert.mjs";
import { function_imports_reached } from "./function_imports_reached.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function function_names_reaching(f_names, f_name_target) {
  "$plain f_names";
  "$plain f_name_target";
  "Which of these functions can reach the named one by importing, however many files away - the ones that depend on it, named in the order they were given.";
  arguments_assert(arguments, 2);
  ("The question is asked this way round, from a set down to one name, because that is the shape every check of it has: a rule says a whole family must not depend on some particular thing, and the answer wanted is which members break it.");
  let reaching = [];
  for (let f_name of f_names) {
    let reached = await function_imports_reached(f_name);
    let reaches = list_includes(reached, f_name_target);
    if (reaches) {
      list_add(reaching, f_name);
    }
  }
  return reaching;
}
