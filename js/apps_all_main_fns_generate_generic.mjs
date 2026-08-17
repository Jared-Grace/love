import { apps_all_main_fns_generate } from "./apps_all_main_fns_generate.mjs";
import { list_intersect_sort_text } from "./list_intersect_sort_text.mjs";
import { data_identifiers_get_properties } from "./data_identifiers_get_properties.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
export async function apps_all_main_fns_generate_generic(generate_fn) {
  "Write the list of every app's entry point out again from the apps that are actually there.";
  "The name handed to the writer is this generator's own plain name, because the writer works out which list to write by taking _generate off it. The showing twin's name was handed over instead for a while, and _generate is not the end of that name, so both twins threw before they wrote anything - and the list they write is what the page gathering all the apps reads, so a newly made app could not appear on it.";
  let prefixed = await apps_names_prefixed();
  let identifier_names = await data_identifiers_get_properties();
  let apps = list_intersect_sort_text(prefixed, identifier_names);
  await generate_fn(apps_all_main_fns_generate, apps);
}
