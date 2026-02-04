import { http_firebase_file_path } from "../../../love/public/src/http_firebase_file_path.mjs";
import { ebible_version_download_url_html } from "../../../love/public/src/ebible_version_download_url_html.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_download_zip_delete(bible_folder) {
  marker("1");
  let url = ebible_version_download_url_html(bible_folder);
  let joined = http_firebase_file_path(url);
  let v = await ebible_version_download(bible_folder);
  return v;
}
