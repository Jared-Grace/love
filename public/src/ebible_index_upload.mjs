import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { ebible_index } from "./ebible_index.mjs";
export async function ebible_index_upload(bible_folder) {
  let index = await ebible_index(bible_folder);
  let file_name = file_name_json("index");
  await ebible_firebase_upload(bible_folder, "index", index);
  return index;
}
