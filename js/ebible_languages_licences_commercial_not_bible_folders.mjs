import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages_licences_commercial_not } from "./ebible_languages_licences_commercial_not.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_languages_licences_commercial_not_bible_folders() {
  "The names alone of the translations this app offers on terms it may not ship - the same finding as its sibling, with everything but the name dropped.";
  "A name is what a record kept between runs can hold. The rest of a finding is read off the licence page each time and would go stale in a file, and a record that goes stale is one nobody trusts enough to act on.";
  let found = await ebible_languages_licences_commercial_not();
  let property_name = bible_folder_key();
  let bible_folders = list_map_property(found, property_name);
  return bible_folders;
}
