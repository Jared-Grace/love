import { ebible_versions } from "./ebible_versions.mjs";
import { ebible_versions_downloadable_filter } from "./ebible_versions_downloadable_filter.mjs";
export async function ebible_versions_downloadable() {
  let bible_folders = await ebible_versions();
  let downloadable = await ebible_versions_downloadable_filter(bible_folders);
  return downloadable;
}
