import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { android_alarms_apk_destination } from "./android_alarms_apk_destination.mjs";
export function android_alarms_apk_url() {
  "the public download link for the alarms APK — open it on a phone to install; this is the single source of truth for the URL, shared by the uploader and any page that links to it";
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(android_alarms_apk_destination(), project_url);
  return url;
}
