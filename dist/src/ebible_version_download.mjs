import { ebible_version_download_url_html } from "../../../love/public/src/ebible_version_download_url_html.mjs";
import { ebible_version_download_path } from "../../../love/public/src/ebible_version_download_path.mjs";
import { unzip } from "../../../love/public/src/unzip.mjs";
import { http_local } from "../../../love/public/src/http_local.mjs";
export async function ebible_version_download(bible_folder) {
  let url = ebible_version_download_url_html(bible_folder);
  let buffer = await http_local(url);
  let file_path = ebible_version_download_path(bible_folder);
  await unzip(file_path, buffer);
  return file_path;
}
