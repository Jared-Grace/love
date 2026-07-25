import { firebase_mirror_path } from "./firebase_mirror_path.mjs";
import { firebase_bucket_file_get } from "./firebase_bucket_file_get.mjs";
import { property_get } from "./property_get.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_write_buffer } from "./file_write_buffer.mjs";
export async function firebase_mirror_download(relative) {
  "restore one mirrored file from Firebase storage: download the Firebase <relative> and write it to the identical local mirror path";
  let v = await firebase_bucket_file_get(relative);
  let file = property_get(v, "file");
  let downloaded = await file.download();
  let buffer = downloaded[0];
  let path = firebase_mirror_path(relative);
  await file_parent_exists_ensure(path);
  await file_write_buffer(path, buffer);
  return path;
}
