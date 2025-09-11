import { ebible_version_download } from "./ebible_version_download.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  let file_path = await ebible_version_download(bible_folder);
  marker("1");
}
