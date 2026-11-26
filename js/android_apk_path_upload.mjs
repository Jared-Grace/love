import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { firebase_upload_generic } from "./firebase_upload_generic.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export async function android_apk_path_upload(apk_path, folder) {
  "uploads a built APK, at apk_path inside this repo, to storage at http/<folder>/app-debug.apk and returns its public download link. That is the address an app's own Update button downloads from (android/shared AppUpdate.kt), so the two must spell it alike; under http/ the storage rules serve it to a phone with no login";
  let path = await user_repo_path_combine(apk_path);
  let buffer = await file_read_buffer(path);
  let destination = "http/" + folder + "/app-debug.apk";
  let settings = {
    contentType: "application/vnd.android.package-archive",
    resumable: false,
  };
  await firebase_upload_generic(destination, settings, buffer);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  return url;
}
