import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { ebible_versions } from "../../../love/public/src/ebible_versions.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english() {
  marker("1");
  let v = await ebible_versions();
  let filtered = list_filter_starts_with(v, "eng");
  let file_path = await ebible_version_download(bible_folder);
  return filtered;
}
