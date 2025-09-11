import { ebible_version_download } from "./ebible_version_download.mjs";
import { local_function_path } from "./local_function_path.mjs";
export function ebible_version_download_path(bible_folder) {
  let joined2 = local_function_path(ebible_version_download, bible_folder);
  return joined2;
}
