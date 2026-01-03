import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { list_filter_try_async } from "../../../love/public/src/list_filter_try_async.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
export async function ebible_versions_english_downloadable() {
  let bible_folders = await ebible_versions_english();
  let downloadable = await list_filter_try_async(
    bible_folders,
    ebible_version_download,
  );
  return downloadable;
}
