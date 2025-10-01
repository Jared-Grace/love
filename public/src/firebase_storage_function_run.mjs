import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { firebase_storage_download_property } from "../../../love/public/src/firebase_storage_download_property.mjs";
import { firebase_deploy_function_destination_version } from "../../../love/public/src/firebase_deploy_function_destination_version.mjs";
export async function firebase_storage_function_run(f_name) {
  let destination_version =
    firebase_deploy_function_destination_version(f_name);
  let destination = await firebase_storage_download_property(
    destination_version,
    "destination",
  );
  let code = await firebase_storage_download_property(destination, "code");
  let call = js_code_call_statement(f_name);
  let joined = list_join_newline([call, code]);
  if (browser_is()) {
  }
  eval(joined);
}
