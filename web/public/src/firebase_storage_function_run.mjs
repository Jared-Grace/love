import { marker } from "../../../love/public/src/marker.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { js_code_call_statement } from "../../../love/public/src/js_code_call_statement.mjs";
import { firebase_storage_download_property } from "../../../love/public/src/firebase_storage_download_property.mjs";
export async function firebase_storage_function_run(f_name, version_get) {
  marker("1");
  let destination_version = version_get(f_name);
  let destination = await firebase_storage_download_property(
    destination_version,
    "destination",
  );
  let code = await firebase_storage_download_property(destination, "code");
  let call = js_code_call_statement(f_name);
  let joined = list_join_newline([call, code]);
  if (browser_is()) {
    const fn = new Function(joined);
    fn();
    return;
  }
  eval(joined);
}
