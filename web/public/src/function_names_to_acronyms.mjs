import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { object_invert } from "../../../love/public/src/object_invert.mjs";
import { function_name_to_acronym } from "../../../love/public/src/function_name_to_acronym.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function function_names_to_acronyms() {
  let f_names = await functions_names();
  let dictionary = list_to_dictionary_value(f_names, function_name_to_acronym);
  let acronyms = object_invert(dictionary);
  return acronyms;
  let json = json_to(f_names);
  let value = global_function_initialize(fn, {
    json: null,
    result: null,
  });
  let json2 = object_property_get(value, "json");
  if (equal_not(json, json2)) {
    let dictionary = list_to_dictionary_value(
      f_names,
      function_name_to_acronym,
    );
    let acronyms = object_invert(dictionary);
    object_property_set(value, "result", acronyms);
    object_property_set(value, "json", json2);
  }
  let result2 = object_property_get(value, "result");
  return result2;
}
