import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { folder_read } from "./folder_read.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  let file_path = await ebible_version_download(bible_folder);
  let files = folder_read(file_path);
  let joined = path_join(list_of_segments);
  let contents = await file_read(file_path2);
  return files;
  marker("1");
}
