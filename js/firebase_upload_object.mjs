import { property_get } from "./property_get.mjs";
import { firebase_upload_object_arg } from "./firebase_upload_object_arg.mjs";
import { firebase_upload_text_generic } from "./firebase_upload_text_generic.mjs";
export async function firebase_upload_object(destination, object) {
  var r = firebase_upload_object_arg(object);
  let content_type = property_get(r, "content_type");
  let content = property_get(r, "content");
  await firebase_upload_text_generic(content, destination, content_type);
}
