import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_index_upload } from "./ebible_index_upload.mjs";
import { each_async } from "./each_async.mjs";
import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
export async function sandbox() {
  let result = path_join(["..", "a"]);
  return result;
  marker("1");
  let v = ebible_folder_english();
  let v2 = ebible_folder_urdu();
  const bible_folders = [v, v2];
  await each_async(bible_folders, ebible_index_upload);
}
