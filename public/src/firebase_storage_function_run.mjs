import { firebase_storage_function_run_generic } from "../../../love/public/src/firebase_storage_function_run_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
export async function firebase_storage_function_run(f_name, version_get) {
  marker("1");
  let call = js_code_call_statement(f_name);
  await firebase_storage_function_run_generic(version_get, f_name, call);
}
