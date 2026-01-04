import { ebible_versions_downloadable_filter } from "../../../love/public/src/ebible_versions_downloadable_filter.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
export async function ebible_versions_english_downloadable() {
  let bible_folders = await ebible_versions_english();
  let downloadable = await ebible_versions_downloadable_filter(bible_folders);
  return downloadable;
}
