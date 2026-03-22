import { ebible_version_download_zip_delete_generic } from "../../../love/public/src/ebible_version_download_zip_delete_generic.mjs";
import { ebible_version_download_url_html } from "../../../love/public/src/ebible_version_download_url_html.mjs";
export async function ebible_version_readaloud_download_zip_delete(
  bible_folder,
) {
  let url_get = ebible_version_download_url_html;
  await ebible_version_download_zip_delete_generic(url_get, bible_folder);
}
