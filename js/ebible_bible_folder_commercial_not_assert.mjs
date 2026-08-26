import { bible_versions_commercial } from "./bible_versions_commercial.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
export async function ebible_bible_folder_commercial_not_assert(bible_folder) {
  "$plain bible_folder";
  "Refuses to go on when this translation is one the repo is free to ship - what anything about to take a published text down owes the text before it removes it.";
  "The check runs the opposite way round from the one the publishing doors ask, and for the opposite reason. A door has to be stopped from sending a text nobody may send; a remover has to be stopped from taking down a text everybody may read. The same reading of the terms answers both, which is what keeps the two from ever disagreeing about a folder.";
  "Named rather than left to the caller because a remover pointed at the wrong folder is the one mistake here that costs a re-upload of tens of thousands of files, and nothing about the name of a folder says which kind it is.";
  let commercial = await bible_versions_commercial();
  let property_name = bible_folder_key();
  let allowed = list_map_property(commercial, property_name);
  let shippable = list_includes(allowed, bible_folder);
  false_is_assert_json(shippable, {
    hint: "this translation is one the repo is free to ship and to earn from, so taking its text down would remove something a reader may lawfully read - name a translation whose terms refuse us",
    bible_folder,
  });
}
