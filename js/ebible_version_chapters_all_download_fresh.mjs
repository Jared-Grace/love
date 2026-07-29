import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
export async function ebible_version_chapters_all_download_fresh(version) {
  "every chapter of one version in a single file, remembering nothing; the caller decides what to keep";
  "this exists so an offline download does not leave a second copy of the entire version behind it: it is already writing every chapter where the reader will look for it, and a read-through copy of the same file would double what the download costs in room";
  let project_url = firebase_storage_url_project_jg();
  let destination = ebible_version_chapters_all_upload_path(version);
  let chapters = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  return chapters;
}
