import { function_param_new } from "../../../love/public/src/function_param_new.mjs";
import { firebase_storage_download_text } from "../../../love/public/src/firebase_storage_download_text.mjs";
import { firebase_storage_download_property } from "../../../love/public/src/firebase_storage_download_property.mjs";
export async function sandbox() {
  let fns = [
    firebase_storage_download_property,
    firebase_storage_download_text,
  ];
  await function_param_new(f_name, param_name, default_value);
}
