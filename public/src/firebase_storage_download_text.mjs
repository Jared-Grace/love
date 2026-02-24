import { buffer_text_to } from "../../../love/public/src/buffer_text_to.mjs";
import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
export async function firebase_storage_download_text(destination, project_url) {
  let buffer = await firebase_storage_download(project_url, destination);
  let s = buffer_text_to(buffer);
  return s;
}
