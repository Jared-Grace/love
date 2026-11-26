import { android_apk_path_upload } from "./android_apk_path_upload.mjs";
export async function android_apk_upload_generic(app) {
  "uploads the built debug APK of the app in android/<app> to storage at http/<app>/app-debug.apk and returns its public download link. That is the address each app's own Update button downloads from (android/shared AppUpdate.kt), so the two must spell it alike; under http/ the storage rules serve it to a phone with no login";
  let url = await android_apk_path_upload(
    "android/" + app + "/app/build/outputs/apk/debug/app-debug.apk",
    app,
  );
  return url;
}
