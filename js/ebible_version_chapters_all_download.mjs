import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
export async function ebible_version_chapters_all_download(version) {
  "every chapter of one version in a single file, kept on this disk after the first read; the whole version is one request either way, so the keeping is what turns a second visit from a long wait into none";
  "the sibling ending in fresh is the same read without the keeping, and is for whoever is already storing what comes back";
  let project_url = firebase_storage_url_project_jg();
  let destination = ebible_version_chapters_all_upload_path(version);
  let chapters = await firebase_storage_download_json_decompress_cache(
    project_url,
    destination,
  );
  return chapters;
}
