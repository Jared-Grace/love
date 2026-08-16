import { ebible_version_folder_language_code } from "./ebible_version_folder_language_code.mjs";
import { ebible_versions_copyrights } from "./ebible_versions_copyrights.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_versions_language_code_disagreements() {
  "Every translation whose copyright page names one language while the name of its folder says another.";
  "Asked so that reading a language off a folder name is believed for a reason rather than believed because it looked right on the few that were glanced at. The folder name is only ever fallen back on, and a fallback is worth having exactly as far as it agrees with the thing it stands in for.";
  "Translations whose page names no language at all are left out, because those are the ones the fallback exists for and there is nothing to disagree with.";
  let copyrights = await ebible_versions_copyrights();
  function disagrees_is(copyright_read) {
    let stated = property_get(copyright_read, "language_code");
    let unstated = null_is(stated);
    if (unstated) {
      return false;
    }
    let bible_folder = property_get(copyright_read, "bible_folder");
    let filed = ebible_version_folder_language_code(bible_folder);
    let agrees = equal(filed, stated);
    let disagrees = not(agrees);
    return disagrees;
  }
  let disagreeing = list_filter(copyrights, disagrees_is);
  function shown(copyright_read) {
    let bible_folder = property_get(copyright_read, "bible_folder");
    let stated = property_get(copyright_read, "language_code");
    let filed = ebible_version_folder_language_code(bible_folder);
    let row = {
      bible_folder,
      stated,
      filed,
    };
    return row;
  }
  let rows = list_map(disagreeing, shown);
  return rows;
}
