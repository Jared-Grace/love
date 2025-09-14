import { marker } from "./marker.mjs";
import { ebible_index_upload_name } from "./ebible_index_upload_name.mjs";
import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { ebible_index } from "./ebible_index.mjs";
export async function ebible_index_flat_upload(bible_folder) {
  marker("1");
  let index = await ebible_index(bible_folder);
  let file_name = ebible_index_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, index);
}
