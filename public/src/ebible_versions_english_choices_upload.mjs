import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { ebible_firebase_upload } from "../../../love/public/src/ebible_firebase_upload.mjs";
import { ebible_index_flat_upload_name } from "../../../love/public/src/ebible_index_flat_upload_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_choices_upload() {
  marker("1");
  let index = await ebible_versions_english_choices();
  let file_name = ebible_index_flat_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, index);
}
