import { firebase_storage_function_run } from "./firebase_storage_function_run.mjs";
import { app_message_main } from "./app_message_main.mjs";
import { marker } from "./marker.mjs";
export async function app_message() {
  marker("1");
  let f_name = app_message_main.name;
  await firebase_storage_function_run(f_name);
}
