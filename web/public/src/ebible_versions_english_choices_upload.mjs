import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { ebible_verses_upload } from "../../../love/public/src/ebible_verses_upload.mjs";
import { ebible_versions_english_choices_upload_path } from "../../../love/public/src/ebible_versions_english_choices_upload_path.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_choices_upload() {
  let cs = await ebible_versions_english_choices();
  async function lambda(item) {}
  await each_unordered_async(list, lambda);
  await ebible_verses_upload(bible_folder);
  marker("1");
  let destination = ebible_versions_english_choices_upload_path();
  await firebase_upload_object(destination, cs);
}
