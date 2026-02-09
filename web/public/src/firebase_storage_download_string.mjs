import { buffer_text_to } from "../../../love/public/src/buffer_text_to.mjs";
import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
export async function firebase_storage_download_string(destination) {
  let buffer = await firebase_storage_download(destination);
  let s = buffer_text_to(buffer);
  return s;
}
