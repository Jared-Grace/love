import { exit } from "../../../love/public/src/exit.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { object_filter } from "../../../love/public/src/object_filter.mjs";
import { object_map_async } from "../../../love/public/src/object_map_async.mjs";
import { property_exists_not_assert } from "../../../love/public/src/property_exists_not_assert.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
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
    text_is_assert(f_name_after);
    property_exists_not_assert(identifiers, f_name_after);
  }
  log({
    different,
  });
  exit();
  function lambda4(value, property) {
    lambda2(value);
  }
  each_object(different, lambda4);
  async function lambda3(f_name_after, f_name_before) {
    let v = await function_rename(f_name_before, f_name_after);
  }
  let r = await object_map_async(different, lambda3);
  return r;
}
