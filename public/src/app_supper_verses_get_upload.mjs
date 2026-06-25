import { error } from "../../../love/public/src/error.mjs";
import { app_supper_verses_get_upload_destination } from "../../../love/public/src/app_supper_verses_get_upload_destination.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
export async function app_supper_verses_get_upload() {
  let ebible_folder2 = error();
  let verses = await app_supper_verses_get(ebible_folder2);
  let ebible_folder = error();
  let destination = app_supper_verses_get_upload_destination(ebible_folder);
  await firebase_upload_object_compressed(destination, {
    verses,
  });
}
