import { marker } from "./marker.mjs";
import { firebase_upload_generic } from "./firebase_upload_generic.mjs";
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
