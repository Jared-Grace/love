import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_upload_generic } from "../../../love/public/src/firebase_upload_generic.mjs";
export async function firebase_upload_buffer(content, destination) {
  marker("1");
  let buffer = Buffer.from(content);
  const settings = {
    contentType: "application/octet-stream",
    resumable: false,
  };
  await firebase_upload_generic(destination, settings, buffer);
  return destination;
}
