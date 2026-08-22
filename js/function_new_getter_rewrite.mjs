import { arguments_assert } from "./arguments_assert.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_new_getter } from "./function_new_getter.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { property_get } from "./property_get.mjs";
export async function function_new_getter_rewrite(f_name, meaning, value) {
  "Lay a named constant down over whatever is there - take the old one away if it exists, then write the new one - so a generated list can be produced again and again from the same command.";
  "WRITING A GETTER AND REPLACING ONE ARE DIFFERENT ASKS, and only the first had a command. Every generator over a saved list wanted the second, and each one wrote out the same four lines: look for the file, ask whether it is there, take it away if it is, write. The looking is not optional - writing a function that already exists is a different failure in each of the places it could happen.";
  "IT ASKS THROUGH THE ALIAS RATHER THAN FOR THE FILE, because a name the repo answers to under a shorthand still has a file behind it, and deleting the file the plain name points at would leave the shorthand pointing at nothing.";
  arguments_assert(arguments, 3);
  let u = await function_unalias_exists(f_name);
  let exists = property_get(u, "exists");
  if (exists) {
    await function_delete(f_name);
  }
  await function_new_getter(f_name, meaning, value);
  return f_name;
}
