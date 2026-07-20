import fs from "fs";
import { firebase_upload_generic } from "./firebase_upload_generic.mjs";
import { android_alarms_apk_destination } from "./android_alarms_apk_destination.mjs";
import { android_alarms_apk_path } from "./android_alarms_apk_path.mjs";
import { android_alarms_apk_url } from "./android_alarms_apk_url.mjs";
export async function android_alarms_apk_upload() {
  "uploads the built alarms APK to Firebase Storage public-read path and returns its public download link; the android package content type makes a phone browser offer to install it";
  let path = await android_alarms_apk_path();
  let buffer = fs.readFileSync(path);
  let settings = {
    contentType: "application/vnd.android.package-archive",
    resumable: false,
  };
  await firebase_upload_generic(android_alarms_apk_destination(), settings, buffer);
  let url = android_alarms_apk_url();
  return url;
}
