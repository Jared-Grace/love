import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
import { marker } from "./marker.mjs";
export function ebible_verses(bible_folder, chapter_code) {
  let joined = ebible_version_download_path_combine(bible_folder, chapter_code);
  marker("1");
  return joined;
}
