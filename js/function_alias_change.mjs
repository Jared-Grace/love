import { function_exists_not_assert } from "./function_exists_not_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { property_delete } from "./property_delete.mjs";
import { error } from "./error.mjs";
import { property_set } from "./property_set.mjs";
export async function function_alias_change(alias_old, alias_new) {
  arguments_assert(arguments, 2);
  await function_exists_not_assert(alias_new);
  function lambda(a) {
    let unaliased = property_get(a, "unaliased");
    let aliases = property_get(a, "aliases");
    let exists = property_get(a, "exists");
    if (not(exists)) {
      error();
    }
    property_delete(aliases, alias_old);
    property_set(aliases, alias_new, unaliased);
  }
  await function_alias_generic(alias_old, lambda);
}
