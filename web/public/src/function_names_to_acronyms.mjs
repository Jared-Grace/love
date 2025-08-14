import { object_invert } from "./object_invert.mjs";
import { function_name_to_acronym } from "./function_name_to_acronym.mjs";
import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { functions_names } from "./functions_names.mjs";
export function function_names_to_acronyms() {
  let f_names = functions_names();
  let dictionary = list_to_dictionary(f_names, function_name_to_acronym);
  let inverted = object_invert(dictionary);
  return;
}
