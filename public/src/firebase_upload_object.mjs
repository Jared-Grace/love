import { firebase_upload_string_generic } from "../../../love/public/src/firebase_upload_string_generic.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function firebase_upload_object(object, destination) {
  let content = json_to(object);
  const content_type = "application/json";
  destination = await firebase_upload_string_generic(
    content,
    destination,
    content_type,
  );
  return destination;
}
