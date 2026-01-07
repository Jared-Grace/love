import { ebible_versions_english_choices_upload_path } from "../../../love/public/src/ebible_versions_english_choices_upload_path.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
export async function ebible_versions_english_choices_upload() {
  let destination = ebible_versions_english_choices_upload_path();
  await firebase_upload_object(destination, cs);
}
