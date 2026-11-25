import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_folder } from "./command_line_folder.mjs";
export async function android_record_store_build() {
  "Builds the store version of the recorder app (android/record, release: opens the public site, keeps every take on the phone, never updates itself) as the bundle the Play Console takes, and returns where it is. The alarms app's build tool builds it, as it does the owner's build. Unsigned until a signing key is set up in android/record/app/build.gradle.kts.";
  let folder = await user_repo_path_combine("android/alarms");
  await command_line_folder("./gradlew -p ../record bundleRelease", folder);
  let r = await user_repo_path_combine(
    "android/record/app/build/outputs/bundle/release/app-release.aab",
  );
  return r;
}
