import { log } from "../../../love/public/src/log.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { object_filter } from "../../../love/public/src/object_filter.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_object_values } from "./each_object_values.mjs";
export async function functions_rename_generic(filter, name_change) {
  let f_names = await functions_names();
  let filtered = list_filter(f_names, filter);
  list_empty_not_is_assert(filtered);
  let dictionary = list_to_dictionary_value(filtered, name_change);
  function lambda(f_name_before, f_name_after) {
    let ne = equal_not(f_name_before, f_name_after);
    return ne;
  }
  let different = object_filter(dictionary, lambda);
  let identifiers = await data_identifiers_get();
  function lambda2(f_name_after) {
    object_property_exists_not_assert(identifiers, f_name_after);
  }
  log({
    different,
  });
  each_object_values(different, lambda2);
  async function lambda3(f_name_after, f_name_before) {
    let v = await function_rename(f_name_before, f_name_after);
  }
  await each_object_async(dictionary, lambda3);
}
