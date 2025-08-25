import { firebase_storage_function_run } from "./firebase_storage_function_run.mjs";
import { app_replace_main } from "./app_replace_main.mjs";
import { marker } from "./marker.mjs";
export async function app_replace() {
  marker("1");
  let f_name = app_replace_main.name;
  await firebase_storage_function_run(f_name);
}
