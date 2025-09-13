import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { ebible_firebase_folder } from "./ebible_firebase_folder.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { ebible_index } from "./ebible_index.mjs";
export async function ebible_index_upload(bible_folder) {
  let index = await ebible_index(bible_folder);
  let file_name = file_name_json("index");
  let joined = ebible_firebase_folder(bible_folder);
  let destination = list_join_slash_forward([joined, file_name]);
  await firebase_upload_object(object, destination2);
  return index;
}
