import { firebase_upload_text_generic_browser } from "../../../love/public/src/firebase_upload_text_generic_browser.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { firebase_upload_object_arg } from "../../../love/public/src/firebase_upload_object_arg.mjs";
export async function firebase_upload_object_browser(destination, object) {
  var r = firebase_upload_object_arg(object);
  let content_type = property_get(r, "content_type");
  let content = property_get(r, "content");
  await firebase_upload_text_generic_browser(
    content,
    destination,
    content_type,
  );
}
