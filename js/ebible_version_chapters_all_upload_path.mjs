import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export function ebible_version_chapters_all_upload_path(version) {
  let file_name = "chapters_all";
  let destination = ebible_firebase_upload_path(version, file_name);
  return destination;
}
