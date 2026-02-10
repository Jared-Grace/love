import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_object_values } from "./each_object_values.mjs";
export async function functions_rename_generic(filter, name_change) {
  let f_names = await functions_names();
  let filtered = list_filter(f_names, filter);
  list_empty_not_is_assert(filtered);
  let dictionary = list_to_dictionary_value(list, name_change);
  let identifiers = await data_identifiers_get();
  function lambda2(f_name_after) {
    object_property_exists_not_assert(identifiers, f_name_after);
  }
  each_object_values(object, lambda2);
  async function lambda3(value, key) {}
  await each_object_async(object2, lambda3);
  await list_map_async(filtered, lambda);
  async function lambda(f_name_before) {
    let f_name_after = name_change(f_name_before);
    if (equal(f_name_before, f_name_after)) {
      return;
    }
    let v = await function_rename(f_name_before, f_name_after);
  }
}
