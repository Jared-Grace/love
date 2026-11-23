import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_folder } from "./command_line_folder.mjs";
import { android_record_apk_serve } from "./android_record_apk_serve.mjs";
export async function android_record_build_serve() {
  "Builds the recorder app (android/record, with the shared library it uses) and puts it where the phone downloads it, returning that address. The alarms app's build tool builds it, so the recorder does not carry its own copy of one.";
  let folder = await user_repo_path_combine("android/alarms");
  await command_line_folder("./gradlew -p ../record assembleDebug", folder);
  let r = await android_record_apk_serve();
  return r;
}
