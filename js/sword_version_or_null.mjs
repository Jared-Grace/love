import { sword_versions } from "./sword_versions.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function sword_version_or_null(bible_folder) {
  "$plain bible_folder";
  "The Sword-module bible a folder name stands for, or nothing when that name belongs to one of the other sources instead.";
  "This is the one question that tells this source apart from the others, asked in every place that has to know. Written once so that adding a second module is one line in the list next door rather than a search for everywhere the first one was named.";
  "Nothing is the ordinary answer. Almost every folder this app carries comes from eBible, and asking about one of those is not a fault.";
  let versions = sword_versions();
  let property_name = bible_folder_key();
  let found = list_find_property_or_null(versions, property_name, bible_folder);
  return found;
}
