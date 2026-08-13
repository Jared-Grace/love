import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export function ebible_version_chapters_all_upload_path(version) {
  "Where the whole list of one bible version's chapters is kept in storage, named in one place so the side that writes it and the side that reads it cannot disagree about where it is.";
  let file_name = "chapters_all";
  let destination = ebible_firebase_upload_path(version, file_name);
  return destination;
}
