import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function android_alarms_apk_path() {
  "the on-disk path of the built debug APK (produced by android_alarms_install / gradle assembleDebug)";
  let p = await user_repo_path_combine(
    "android/alarms/app/build/outputs/apk/debug/app-debug.apk",
  );
  return p;
}
