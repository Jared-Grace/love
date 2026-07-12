import { global_function_cache } from "./global_function_cache.mjs";
import { object_invert } from "./object_invert.mjs";
import { function_name_to_acronym } from "./function_name_to_acronym.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { functions_names } from "./functions_names.mjs";
import { log } from "./log.mjs";
export async function function_names_to_acronyms() {
  let f_names = await functions_names();
  let result = global_function_cache(
    function_names_to_acronyms,
    f_names,
    value_get,
  );
  return result;
  function value_get() {
    let dictionary = list_to_dictionary_value(
      f_names,
      function_name_to_acronym,
    );
    let acronyms = object_invert(dictionary);
    return acronyms;
  }
}
