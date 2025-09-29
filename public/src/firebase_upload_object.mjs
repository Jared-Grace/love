import { firebase_upload_string } from "../../../love/public/src/firebase_upload_string.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function firebase_upload_object(object, destination) {
  let content = json_to(object);
  await firebase_upload_string(content, destination);
}
