import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_initialize_list_add_if_not_includes } from "./property_initialize_list_add_if_not_includes.mjs";
import { js_identifier_rename_imports_fix } from "./js_identifier_rename_imports_fix.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function functions_identifiers_rename_map(renames, identifiers) {
  "Moves every caller of every renamed function onto its new name, each calling file rewritten once for all the names it calls. Asked one name at a time, a file calling twenty of them was parsed and written twenty times.";
  "The index is handed in, read before the functions moved, because the moves change the files and the index folds itself again after every change. A caller that is itself being renamed has moved by now, so it is found under its new name.";
  "A renamed function's own file is left out of its own name's list, because the move already renamed it there; it is still rewritten for the other names it calls.";
  arguments_assert(arguments, 2);
  let befores = object_property_names(renames);
  let groups = {};
  for (let before of befores) {
    if (property_exists_not(identifiers, before)) {
      continue;
    }
    let users = property_get(identifiers, before);
    for (let user of users) {
      if (equal(user, before)) {
        continue;
      }
      let now = user;
      if (property_exists(renames, user)) {
        now = property_get(renames, user);
      }
      property_initialize_list_add_if_not_includes(groups, now, before);
    }
  }
  async function rewrite(now) {
    let names = property_get(groups, now);
    async function lambda(ast) {
      for (let before of names) {
        let after = property_get(renames, before);
        await js_identifier_rename_imports_fix(ast, before, after);
      }
    }
    await function_transform(now, lambda);
  }
  let callers = object_property_names(groups);
  await list_map_unordered_async(callers, rewrite);
  return callers;
}
