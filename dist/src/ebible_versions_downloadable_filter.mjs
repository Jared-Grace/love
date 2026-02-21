import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { list_filter_try_async } from "../../../love/public/src/list_filter_try_async.mjs";
export async function ebible_versions_downloadable_filter(bible_folders) {
  let v = await list_filter_try_async(bible_folders, ebible_version_download);
  return v;
}
