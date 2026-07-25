import { firebase_mirror_path } from "./firebase_mirror_path.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { firebase_upload_buffer } from "./firebase_upload_buffer.mjs";
export async function firebase_mirror_upload(relative) {
  "back up one mirrored file to Firebase storage: read the local <root>/<relative> and upload its bytes to the identical Firebase path";
  let path = firebase_mirror_path(relative);
  let buffer = await file_read_buffer(path);
  await firebase_upload_buffer(buffer, relative);
  return relative;
}
