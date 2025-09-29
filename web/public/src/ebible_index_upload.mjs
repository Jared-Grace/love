import { ebible_index_upload_name } from "../../../love/public/src/ebible_index_upload_name.mjs";
import { ebible_firebase_upload } from "../../../love/public/src/ebible_firebase_upload.mjs";
import { ebible_index } from "../../../love/public/src/ebible_index.mjs";
export async function ebible_index_upload(bible_folder) {
  let index = await ebible_index(bible_folder);
  let file_name = ebible_index_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, index);
}
