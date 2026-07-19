import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { app_supper } from "./app_supper.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
export function app_supper_verses_get_upload_destination(ebible_folder) {
  let without = app_shared_name_prefix_without_fn(app_supper);
  let destination = ebible_firebase_upload_path(ebible_folder, without);
  return destination;
}
