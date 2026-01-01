import { object_invert } from "../../../love/public/src/object_invert.mjs";
import { function_name_to_acronym } from "../../../love/public/src/function_name_to_acronym.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function function_names_to_acronyms() {
  let f_names = await functions_names();
  let dictionary = list_to_dictionary_value(f_names, function_name_to_acronym);
  let acronyms = object_invert(dictionary);
  return acronyms;
}
