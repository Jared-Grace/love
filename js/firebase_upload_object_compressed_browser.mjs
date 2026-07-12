import { firebase_upload_object_browser } from "./firebase_upload_object_browser.mjs";
import { json_compress_object } from "./json_compress_object.mjs";
export async function firebase_upload_object_compressed_browser(
  destination,
  value,
) {
  let c = await json_compress_object(value);
  await firebase_upload_object_browser(destination, c);
}
