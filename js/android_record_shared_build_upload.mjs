import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_folder } from "./command_line_folder.mjs";
import { android_apk_path_upload } from "./android_apk_path_upload.mjs";
export async function android_record_shared_build_upload() {
  "Builds the linked version of the recorder app (android/record, shared: the store's version - opens the public site, keeps every take on the phone, no Send and no sign-in - except that it updates itself) and uploads it, returning the public link someone opens on their phone to install it without the store (human 2026-11-26). Its Update app button downloads from that same link, so uploading again is how everyone holding it gets the new version.";
  let folder = await user_repo_path_combine("android/alarms");
  await command_line_folder("./gradlew -p ../record assembleShared", folder);
  let url = await android_apk_path_upload(
    "android/record/app/build/outputs/apk/shared/app-shared.apk",
    "record_shared",
  );
  return url;
}
