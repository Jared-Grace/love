import { firebase_upload_generic } from "./firebase_upload_generic.mjs";
import { log } from "./log.mjs";
export async function firebase_upload_text_generic(
  content,
  destination,
  content_type,
) {
  log(firebase_upload_text_generic.name, {
    msg: "uploading to firebase",
    destination,
  });
  let buffer = Buffer.from(content);
  let settings = {
    contentType: content_type,
    gzip: true,
  };
  await firebase_upload_generic(destination, settings, buffer);
}
