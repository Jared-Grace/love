import { firebase_storage_function_run_generic } from "./firebase_storage_function_run_generic.mjs";
import { js_code_call_statement } from "./js_code_call_statement.mjs";
export async function firebase_storage_function_run(f_name, version_get) {
  let call = js_code_call_statement(f_name);
  await firebase_storage_function_run_generic(version_get, f_name, call);
}
