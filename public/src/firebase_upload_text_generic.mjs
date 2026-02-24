import { firebase_upload_generic } from "../../../love/public/src/firebase_upload_generic.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function firebase_upload_text_generic(
  content,
  destination,
  content_type,
) {
  log({
    msg: "uploading to firebase",
    destination,
  });
  let buffer = Buffer.from(content);
  const settings = {
    contentType: content_type,
    gzip: true,
  };
  await firebase_upload_generic(destination, settings, buffer);
}
