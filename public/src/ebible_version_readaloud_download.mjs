import { ebible_version_download_url } from "../../../love/public/src/ebible_version_download_url.mjs";
import { local_function_path } from "../../../love/public/src/local_function_path.mjs";
import { unzip } from "../../../love/public/src/unzip.mjs";
import { http_local } from "../../../love/public/src/http_local.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_readaloud_download(bible_folder) {
  marker("1");
  let url = ebible_version_download_url(bible_folder, "readaloud");
  let buffer = await http_local(url);
  let file_path = local_function_path(
    ebible_version_readaloud_download,
    bible_folder,
  );
  await unzip(file_path, buffer);
  return file_path;
}
