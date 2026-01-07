import { ebible_versions_english_choices_upload_path } from "../../../love/public/src/ebible_versions_english_choices_upload_path.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
export async function ebible_versions_english_choices_upload() {
  let cs = await ebible_versions_english_choices();
  let destination = ebible_versions_english_choices_upload_path();
  await firebase_upload_object(destination, cs);
}
