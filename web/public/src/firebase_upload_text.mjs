import { firebase_upload_string_generic } from "../../../love/public/src/firebase_upload_string_generic.mjs";
export async function firebase_upload_text(content, destination) {
  const content_type = "text/plain";
  destination = await firebase_upload_string_generic(
    content,
    destination,
    content_type,
  );
  return destination;
}
