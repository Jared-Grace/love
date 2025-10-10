import { firebase_storage_function_run } from "../../../love/public/src/firebase_storage_function_run.mjs";
import { app_replace_main } from "../../../love/public/src/app_replace_main.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_replace() {
  marker("1");
  let f_name = app_replace_main.name;
  await firebase_storage_function_run(f_name);
}
