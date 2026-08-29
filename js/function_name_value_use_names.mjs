import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { functions_name_value_use_names } from "./functions_name_value_use_names.mjs";
export async function function_name_value_use_names(f_name) {
  arguments_assert(arguments, 1);
  ("the files that hand this function over as a value rather than calling it");
  ("its sibling is handed the set of files to look in, because the one caller that had it already knew the set. asking a name on its own meant writing the same two lines - find who mentions it, then look in those - at each place that wanted the answer, and the second of those places is what this exists for");
  ("an empty answer is the interesting one: nobody hands it anywhere, so its parameter list is its own and every name in it was asked for rather than demanded. one file handing it over settles the question the other way for all of them at once");
  let f_names = await data_identifiers_search_names(f_name);
  let handing = await functions_name_value_use_names(f_names, f_name);
  return handing;
}
