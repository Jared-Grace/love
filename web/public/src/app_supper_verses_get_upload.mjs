import { app_supper } from "../../../love/public/src/app_supper.mjs";
import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_verses_get_upload() {
  marker("1");
  let verses = await app_supper_verses_get();
  let e = ebible_folder_english();
  let without = app_prefix_without(app_supper);
  let destination = ebible_firebase_upload_path(e, without);
  await firebase_upload_object_compressed(destination, {
    verses,
  });
}
