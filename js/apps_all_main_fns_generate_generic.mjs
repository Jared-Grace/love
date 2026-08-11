import { apps_all_main_fns_generate_open } from "./apps_all_main_fns_generate_open.mjs";
import { list_intersect_sort_text } from "./list_intersect_sort_text.mjs";
import { data_identifiers_get_properties } from "./data_identifiers_get_properties.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
export async function apps_all_main_fns_generate_generic(generate_fn) {
  let prefixed = await apps_names_prefixed();
  let identifier_names = await data_identifiers_get_properties();
  let apps = list_intersect_sort_text(prefixed, identifier_names);
  await generate_fn(apps_all_main_fns_generate_open, apps);
}
