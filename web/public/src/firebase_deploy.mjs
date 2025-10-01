import { user_repo_path_combine } from "../../../love/public/src/user_repo_path_combine.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy() {
  marker("1");
  let combined = await user_repo_path_combine(".");
  let v = await command_line_generic("dir", {});
  let stdout = await command_line("firebase deploy");
  return stdout;
}
