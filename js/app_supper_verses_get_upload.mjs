import { app_supper_verses_get_upload_destination } from "./app_supper_verses_get_upload_destination.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { app_supper_verses_get } from "./app_supper_verses_get.mjs";
export async function app_supper_verses_get_upload(ebible_folder) {
  let verses = await app_supper_verses_get(ebible_folder);
  let destination = app_supper_verses_get_upload_destination(ebible_folder);
  await firebase_upload_object_compressed(destination, {
    verses,
  });
}
