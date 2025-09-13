import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_index_upload } from "./ebible_index_upload.mjs";
import { each_async } from "./each_async.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let v = ebible_folder_english();
  const bible_folders = [v, "urdgvu"];
  await each_async(bible_folders, ebible_index_upload);
}
