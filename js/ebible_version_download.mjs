import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_version_download_url_html } from "./ebible_version_download_url_html.mjs";
import { ebible_version_download_path } from "./ebible_version_download_path.mjs";
import { unzip } from "./unzip.mjs";
import { http_local } from "./http_local.mjs";
export async function ebible_version_download(bible_folder) {
  let url = ebible_version_download_url_html(bible_folder);
  let project_url = firebase_storage_url_project_jg();
  let buffer = await http_local(url, project_url);
  let file_path = ebible_version_download_path(bible_folder);
  await unzip(buffer, file_path);
  return file_path;
}
