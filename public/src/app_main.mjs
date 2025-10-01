import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { firebase_storage_function_run } from "./firebase_storage_function_run.mjs";
import { marker } from "./marker.mjs";
import { firebase_name } from "./firebase_name.mjs";
export async function app_main(f_name, firebase_name_value) {
  marker("1");
  global_function_initialize(firebase_name, firebase_name_value);
  await firebase_storage_function_run(f_name);
}
