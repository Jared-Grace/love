import { arguments_assert } from "./arguments_assert.mjs";
import { berean_version } from "./berean_version.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function berean_version_or_null(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("The Berean record a folder name stands for, or nothing when that name belongs to one of the other two places a bible here can come from.");
  ("This is the one question that tells this source from the others, asked in every place that has to know. Written once so that the places which have to know are found by asking who calls this, rather than by searching for everywhere the folder was named.");
  ("Nothing is the ordinary answer. Almost every folder this app carries comes from the archive, and asking about one of those is not a fault.");
  let version = berean_version();
  let right = property_get(version, "bible_folder");
  let same = equal(bible_folder, right);
  if (same) {
    return version;
  }
  return null;
}
