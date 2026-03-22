import { ebible_version_readaloud_download_zip_delete } from "../../../love/public/src/ebible_version_readaloud_download_zip_delete.mjs";
import { ebible_version_readaloud_download } from "../../../love/public/src/ebible_version_readaloud_download.mjs";
export async function ebible_version_readaloud_download_refresh(bible_folder) {
  await ebible_version_readaloud_download_zip_delete(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
}
