import { firebase_upload_text_generic_browser } from "./firebase_upload_text_generic_browser.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_upload_object_arg } from "./firebase_upload_object_arg.mjs";
export async function firebase_upload_object_browser(destination, object) {
  var r = firebase_upload_object_arg(object);
  let content = property_get(r, "content");
  await firebase_upload_text_generic_browser(content, destination);
}
