import { ebible_index_upload } from "./ebible_index_upload.mjs";
import { each_async } from "./each_async.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folders = ["engbsb", "urdgvu"];
  await each_async(bible_folders, ebible_index_upload);
}
