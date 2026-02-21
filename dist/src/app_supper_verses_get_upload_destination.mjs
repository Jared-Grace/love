import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
import { app_supper } from "../../../love/public/src/app_supper.mjs";
import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export function app_supper_verses_get_upload_destination() {
  let e = ebible_folder_english();
  let without = app_prefix_without(app_supper);
  let destination = ebible_firebase_upload_path(e, without);
  return destination;
}
