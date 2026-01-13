import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_index_upload_name } from "../../../love/public/src/ebible_index_upload_name.mjs";
import { ebible_firebase_upload } from "../../../love/public/src/ebible_firebase_upload.mjs";
export async function ebible_chapter_codes_upload(bible_folder) {
  marker("1");
  let index = await ebible_chapter_codes(bible_folder);
  let file_name = ebible_index_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, index);
}
