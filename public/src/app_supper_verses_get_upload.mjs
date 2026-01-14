import { app_supper_verses_get_upload_destination } from "../../../love/public/src/app_supper_verses_get_upload_destination.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_verses_get_upload() {
  marker("1");
  let verses = await app_supper_verses_get();
  let destination = app_supper_verses_get_upload_destination();
  await firebase_upload_object_compressed(destination, {
    verses,
  });
}
