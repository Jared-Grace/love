import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
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
  let global_init = js_code_global_init();
  let joined = list_join_newline([global_init, code, call]);
  if (browser_is()) {
    let body = html_document_body();
    let component = html_element(body, "script");
    html_attribute_set(component, "type", "module");
    html_text_set(component, joined);
    return;
  }
  eval(joined);
}
