import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages_commercial_single } from "./ebible_languages_commercial_single.mjs";
import { ebible_version_downloaded_chapters_count } from "./ebible_version_downloaded_chapters_count.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
export async function ebible_languages_commercial_chapters_count() {
  "How many chapter files shipping one translation in every language this repo is free to ship would put into storage.";
  "Asked before uploading rather than after, because nothing in this repo deletes from storage. An upload is the one move here that cannot be taken back, so its size is worth knowing as a number rather than as an estimate.";
  "The languages come back with the choosing already done, so this counts exactly what would go up and not the four hundred and twenty seven translations they were chosen from.";
  let languages = await ebible_languages_commercial_single();
  let property_name = bible_folder_key();
  let bible_folders = list_map_property(languages, property_name);
  let counts = await list_map_async(
    bible_folders,
    ebible_version_downloaded_chapters_count,
  );
  let chapters = list_sum(counts);
  let languages_count = languages.length;
  let counted = {
    languages_count,
    chapters,
  };
  return counted;
}
