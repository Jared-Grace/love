import { error } from "./error.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { browser_is } from "./browser_is.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_global_init } from "./js_code_global_init.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
export async function firebase_storage_function_run_generic(
  version_get,
  f_name,
  call,
) {
  let destination_version = version_get(f_name);
  let project_url = error();
  let destination = await firebase_storage_download_property(
    project_url,
    destination_version,
    "destination",
  );
  let project_url2 = error();
  let code = await firebase_storage_download_property(
    project_url2,
    destination,
    "code",
  );
  let global_init = js_code_global_init();
  let joined = list_join_newline([global_init, code, call]);
  if (browser_is()) {
    let body = html_document_body();
    let component = html_element(body, "script");
    html_attribute_set(component, "type", "module");
    html_text_set(component, joined);
  } else {
    eval(joined);
  }
}
