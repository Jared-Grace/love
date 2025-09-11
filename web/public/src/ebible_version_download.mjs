import { ebible_version_download_path } from "./ebible_version_download_path.mjs";
import { unzip } from "./unzip.mjs";
import { http_local } from "./http_local.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_download(bible_folder) {
  marker("1");
  let url = "https://ebible.org/Scriptures/" + bible_folder + "_html.zip";
  let buffer = await http_local(url);
  let file_path = ebible_version_download_path(bible_folder);
  await unzip(file_path, buffer);
  return file_path;
}
