import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages_derivatives_forbidden } from "./ebible_languages_derivatives_forbidden.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_languages_derivatives_forbidden_bible_folders() {
  "The names alone of the translations this app offers whose own words may not be altered - the same finding as its sibling, with everything but the name dropped.";
  "A name is what a reading somewhere else can hold on to. The rest of a finding is read off the licence page each time and would go stale anywhere it was kept.";
  let found = await ebible_languages_derivatives_forbidden();
  let property_name = bible_folder_key();
  let bible_folders = list_map_property(found, property_name);
  return bible_folders;
}
