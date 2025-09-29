import { firebase_upload_generic } from "../../../love/public/src/firebase_upload_generic.mjs";
export async function firebase_upload_string(content, destination) {
  let buffer = Buffer.from(content);
  const settings = {
    contentType: "text/plain",
    gzip: true,
  };
  await firebase_upload_generic(destination, settings, buffer);
  return destination;
}
