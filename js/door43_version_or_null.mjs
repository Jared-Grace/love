import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { door43_versions } from "./door43_versions.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function door43_version_or_null(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("The Door43 bible a folder name stands for, or nothing when that name belongs to eBible instead.");
  ("This is the one question that tells the two sources apart, asked in every place that has to know. Written once so that adding a second Door43 bible is one line in the list next door rather than a search for everywhere the first one was named.");
  ("Nothing is the ordinary answer. Almost every folder this app carries comes from eBible, and asking about one of those is not a fault.");
  let versions = door43_versions();
  let property_name = bible_folder_key();
  let found = list_find_property_or_null(versions, property_name, bible_folder);
  return found;
}
