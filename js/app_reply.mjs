import { app_reply_main } from "../../../love/public/src/app_reply_main.mjs";
import { firebase_storage_function_run } from "../../../love/public/src/firebase_storage_function_run.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_reply() {
  marker("1");
  let f_name = app_reply_main.name;
  await firebase_storage_function_run(f_name);
}
