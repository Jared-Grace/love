import { ebible_versions } from "../../../love/public/src/ebible_versions.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_versions_downloadable_filter } from "../../../love/public/src/ebible_versions_downloadable_filter.mjs";
export async function ebible_versions_downloadable() {
  marker("1");
  let bible_folders = await ebible_versions();
  let downloadable = await ebible_versions_downloadable_filter(bible_folders);
  return downloadable;
}
