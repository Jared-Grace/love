import { firebase_upload_text_generic } from "../../../love/public/src/firebase_upload_text_generic.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function firebase_upload_object(destination, object) {
  let content = json_to(object);
  const content_type = "application/json";
  await firebase_upload_text_generic(content, destination, content_type);
}
