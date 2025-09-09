import { firebase_upload_string } from "./firebase_upload_string.mjs";
import { json_to } from "./json_to.mjs";
export async function firebase_upload_object(object, destination) {
  let content = json_to(object);
  await firebase_upload_string(content, destination);
}
