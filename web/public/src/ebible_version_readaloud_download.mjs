import { firebase_storage_url_project_jg } from "../../../love/public/src/firebase_storage_url_project_jg.mjs";
import { ebible_version_readaloud_download_path } from "../../../love/public/src/ebible_version_readaloud_download_path.mjs";
import { ebible_version_download_url } from "../../../love/public/src/ebible_version_download_url.mjs";
import { unzip } from "../../../love/public/src/unzip.mjs";
import { http_local } from "../../../love/public/src/http_local.mjs";
export async function ebible_version_readaloud_download(bible_folder) {
  let url = ebible_version_download_url(bible_folder, "readaloud");
  let project_url = firebase_storage_url_project_jg();
  let buffer = await http_local(url, project_url);
  let file_path = ebible_version_readaloud_download_path(bible_folder);
  await unzip(file_path, buffer);
  return file_path;
}
