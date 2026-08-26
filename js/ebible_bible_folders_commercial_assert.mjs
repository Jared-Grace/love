import { bible_versions_commercial } from "./bible_versions_commercial.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function ebible_bible_folders_commercial_assert(bible_folders) {
  "Refuses to go on when any of these translations is one this repo may not ship and earn from - what anything about to hand a list of wordings to readers owes the texts before it hands them over.";
  "It asks which translations may be shipped rather than keeping a list of names, so terms read differently later, and a translation added after this was written, are both caught without anybody coming back here.";
  "A translation that is not on this machine has granted nothing anybody here has read, so it is refused rather than let through - treating silence as permission is the one mistake that cannot be undone once the text has gone out.";
  let commercial = await bible_versions_commercial();
  let property_name = bible_folder_key();
  let allowed = list_map_property(commercial, property_name);
  function refused_is(bible_folder) {
    let missing = list_includes_not(allowed, bible_folder);
    return missing;
  }
  let offenders = list_filter(bible_folders, refused_is);
  list_empty_is_assert_json(offenders, {
    hint: "the terms these translations are offered on do not leave this repo free to ship them and to earn from what is built on them, so they may not be offered to a reader - offer a translation whose terms allow it, or get the publisher's written permission",
    bible_folders,
  });
}
