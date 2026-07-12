import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
export async function ebible_version_chapters_all_download(version) {
  let project_url = firebase_storage_url_project_jg();
  let destination = ebible_version_chapters_all_upload_path(version);
  let chapters = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  return chapters;
}
