import { ebible_version_readaloud_download_url } from "../../../love/public/src/ebible_version_readaloud_download_url.mjs";
import { ebible_version_download_zip_delete_generic } from "../../../love/public/src/ebible_version_download_zip_delete_generic.mjs";
export async function ebible_version_readaloud_download_zip_delete(
  bible_folder,
) {
  let url_get = ebible_version_readaloud_download_url;
  await ebible_version_download_zip_delete_generic(url_get, bible_folder);
}
