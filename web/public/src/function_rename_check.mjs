import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
export async function function_rename_check(f_name_after) {
  let identifiers = await data_identifiers_get();
  object_property_exists_not_assert(identifiers, f_name_after);
}
