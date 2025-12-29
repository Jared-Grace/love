import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { firebase_storage_function_run_generic } from "../../../love/public/src/firebase_storage_function_run_generic.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { marker } from "./marker.mjs";
import { firebase_name } from "./firebase_name.mjs";
export async function app_main(f_name, firebase_name_value, version_get) {
  marker("1");
  global_function_initialize(firebase_name, firebase_name_value);
  marker("1");
  let call = js_code_call_app_context_initialize(f_name);
  await firebase_storage_function_run_generic(version_get, f_name, call);
}
