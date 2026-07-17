import { command_line_folder } from "./command_line_folder.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function android_alarms_install() {
  let folder = await user_repo_path_combine("android/alarms");
  let r = await command_line_folder("./gradlew installDebug", folder);
  return r;
}
