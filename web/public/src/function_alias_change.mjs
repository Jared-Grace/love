import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_unalias_exists_not_assert } from "../../../love/public/src/function_unalias_exists_not_assert.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export async function function_alias_change(alias_old, alias_new) {
  assert_arguments(arguments, 2);
  await function_unalias_exists_not_assert(alias_new);
  function lambda(a) {
    let unaliased = object_property_get(a, "unaliased");
    let aliases = object_property_get(a, "aliases");
    let exists = object_property_get(a, "exists");
    if (not(exists)) {
      error();
    }
    property_delete(aliases, alias_old);
    object_property_set(aliases, alias_new, unaliased);
  }
  await function_alias_generic(alias_old, lambda);
}
