import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { data_identifiers_get_properties } from "./data_identifiers_get_properties.mjs";
import { list_intersect_sort_text } from "./list_intersect_sort_text.mjs";
export async function apps_all_main_fns_derived() {
  "every app that is actually here, by the name of the function that is its way in - worked out from the pages on disk rather than read from a list anybody keeps.";
  "a page and an entry point are BOTH required, and each one alone means something different. A page with no function behind it is not an app, and a function with no page is not one either, so the answer is the overlap.";
  "held apart from the writer that puts it in a file, because the same answer is what says whether the file is still true. Written in one place and asked in the other, the two could disagree and nothing would say so.";
  let prefixed = await apps_names_prefixed();
  let identifier_names = await data_identifiers_get_properties();
  let apps = list_intersect_sort_text(prefixed, identifier_names);
  return apps;
}
