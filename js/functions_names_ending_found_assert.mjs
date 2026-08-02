import { functions_names } from "./functions_names.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
export async function functions_names_ending_found_assert(ending, missing_hint) {
  "$plain ending";
  "$plain missing_hint";
  "Every function in this repo whose name ends in the words given, refusing outright when there are none.";
  "The refusal is the point and it is what earns this a name. A sweep that finds its subject by the ending of a name and then hands back a subtraction gives the same nothing whether the repo is in good order or the finding has stopped working - so an empty left side must stop the run rather than be quietly carried through into an answer that reads as a clean bill of health.";
  "What to say when there are none is left to whoever asked, because only they know what the ending was meant to find and therefore where to look when it finds nothing.";
  let f_names = await functions_names();
  let found = list_filter_ends_with(f_names, ending);
  list_empty_not_is_assert_json(found, {
    hint: missing_hint,
  });
  return found;
}
