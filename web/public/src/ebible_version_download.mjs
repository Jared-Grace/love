import { http_local } from "./http_local.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_download(bible_folder) {
  marker("1");
  let url = "https://ebible.org/Scriptures/" + bible_folder + "_html.zip";
  let result = await http_local(url);
  return result;
}
