import { object_property_names } from "./object_property_names.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { function_identifier_replace_auto } from "./function_identifier_replace_auto.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_duplicate_replace(f_name, f_name_shared) {
  "$plain f_name";
  "$plain f_name_shared";
  "the first name is the copy to remove and the second is the function already doing the same work; both are function names this repo answers to, and nothing that runs.";
  "Points every function that mentions a copy at the shared function doing the same work, then deletes the copy, so the repo holds the work once.";
  "The top-level twin of the local duplicate replace. It finds the callers itself, from the identifier index, rather than taking a list, so the set it repoints cannot drift from the set that actually mentions the copy.";
  "It does not judge that the two do the same work. That is the caller's proof to make before running this, by reasoning over both bodies; this only carries the decision out.";
  "The callers are repointed before the copy is deleted, because a deleted copy with callers still naming it leaves files that do not load.";
  arguments_assert(arguments, 2);
  let found = await data_identifiers_search(f_name);
  function lambda(name) {
    let neq = not_equal(name, f_name);
    return neq;
  }
  let callers = object_property_names(found).filter(lambda);
  for (let caller of callers) {
    await function_identifier_replace_auto(caller, f_name, f_name_shared);
  }
  await function_delete(f_name);
  let r = {
    callers,
    deleted: f_name,
  };
  return r;
}
